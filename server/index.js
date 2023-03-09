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

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
