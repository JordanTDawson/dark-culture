import React from 'react';
import Products from '../catalog-components/products';

const products = [{
  item: {
    itemType: 'shirt',
    itemName: 'Fancy Shirt for someone',
    itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwt7KaCBLelo5n1Atee75T-BAV9JJ-Pb-Ow&usqp=CAU',
    price: 10000,
    itemId: 0
  }
}, {
  item: {
    itemType: 'shirt',
    itemName: 'These Pants are awesome',
    itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwt7KaCBLelo5n1Atee75T-BAV9JJ-Pb-Ow&usqp=CAU',
    price: 10000,
    itemId: 1
  }
}, {
  item: {
    itemType: 'shirt',
    itemName: 'How could you not want these they are a steal!',
    itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwt7KaCBLelo5n1Atee75T-BAV9JJ-Pb-Ow&usqp=CAU',
    price: 918230498,
    itemId: 2
  }
}, {
  item: {
    itemType: 'shirt',
    itemName: "Can't think of anything else that I would want to put here.",
    itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwt7KaCBLelo5n1Atee75T-BAV9JJ-Pb-Ow&usqp=CAU',
    price: 981234098,
    itemId: 3
  }
}, {
  item: {
    itemType: 'shirt',
    itemName: 'Something here',
    itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwt7KaCBLelo5n1Atee75T-BAV9JJ-Pb-Ow&usqp=CAU',
    price: 934815983,
    itemId: 4
  }
}, {
  item: {
    itemType: 'shirt',
    itemName: 'Something here',
    itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwt7KaCBLelo5n1Atee75T-BAV9JJ-Pb-Ow&usqp=CAU',
    price: 4758375,
    itemId: 5
  }
}, {
  item: {
    itemType: 'shirt',
    itemName: 'Something here',
    itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwt7KaCBLelo5n1Atee75T-BAV9JJ-Pb-Ow&usqp=CAU',
    price: 9374159,
    itemId: 6
  }
}, {
  item: {
    itemType: 'shirt',
    itemName: 'Something here',
    itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwt7KaCBLelo5n1Atee75T-BAV9JJ-Pb-Ow&usqp=CAU',
    price: 82374589,
    itemId: 7
  }
}, {
  item: {
    itemType: 'shirt',
    itemName: 'Something here',
    itemImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwt7KaCBLelo5n1Atee75T-BAV9JJ-Pb-Ow&usqp=CAU',
    price: 8972345,
    itemId: 8
  }
}];

export default function Catalog() {
  return (
    <Products catalog={products} />
  );
}
