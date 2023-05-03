require('dotenv/config');
const pg = require('pg');
const types = require('pg').types;
types.setTypeParser(1700, 'text', parseFloat);
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/shoppingCatalog',
  ssl: {
    rejectUnauthorized: false
  }
});
const ClientError = require('./client-error');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');

const app = express();

app.use(staticMiddleware);

app.use(express.json());

app.get('/api/shoppingCatalog/Catalog/:productId', (req, res, next) => {
  const productId = Number(req.params.productId);
  if (!productId) {
    throw new ClientError(400, 'productId must be a positive integer!');
  }
  const sql = `
    select "productId",
           "itemName",
           "itemImage",
           "price"
    from "Catalog"
    where "productId" = $1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find product with productId ${productId}`);
      }
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.get('/api/shoppingCatalog/CartItems', (req, res) => {
  const sql = `
    select *
      from "CartItems"`;
  db.query(sql)
    .then(result => {
      const cartItems = result.rows;
      res.json(cartItems);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.get('/api/shoppingCatalog/Catalog', (req, res) => {
  const sql = `
    select *
      from "Catalog"`;
  db.query(sql)
    .then(result => {
      const catalog = result.rows;
      res.json(catalog);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.post('/api/shoppingCatalog/Cart', (req, res, next) => {
  const userId = req.body.userId;

  const sql = `
    insert into "Cart" ("createdDate", "totalPrice", "userId")
      values($1, $2, $3)
      returning *`;
  const params = [Date.now(), 0, userId];
  db.query(sql, params)
    .then(result => {
      const [newCart] = result.rows;
      res.status(201).json(newCart);
    })
    .catch(err => next(err));
});

app.post('/api/shoppingCatalog/CartItems', (req, res, next) => {
  const price = req.body.price;
  const productId = req.body.productId;
  const cartId = req.body.cartId;
  if (price === undefined || productId === undefined) {
    throw new ClientError(400, 'productId is invalid.');
  }
  const sql = `
    insert into "CartItems" ("price", "productId", "cartId")
    values ($1, $2, $3)
    returning *
    `;
  const params = [price, productId, cartId];
  db.query(sql, params)
    .then(result => {
      const [newCartItem] = result.rows;
      res.status(201).json(newCartItem);
    })
    .catch(err => next(err));
});

app.delete('/api/shoppingCatalog/CartItems/:productId', (req, res) => {
  const productId = Number(req.params.productId);
  if (!Number.isInteger(productId) || productId <= 0) {
    res.status(400).json({
      error: '"productId" must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "CartItems"
    where "productId" = $1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      if (result.rowCount === 0) {
        res.status(404).json({
          error: `Cannot find product with "productId" ${productId}`
        });
      } else {
        res.status(204).json({
          Succesful: `Deleted "productId" ${productId} from Cart`
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.delete('/api/shoppingCatalog/CartItems', (req, res) => {
  const sql = `
    truncate table "CartItems"
  `;
  db.query(sql)
    .then(result => {
      const cartItems = result.rows;
      res.json(cartItems);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
