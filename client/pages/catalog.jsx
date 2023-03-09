import React, { useState, useEffect } from 'react';
import Products from '../catalog-components/products';

export default function Catalog() {

  const [catalog, setCatalog] = useState();

  useEffect(() => {
    fetch('/api/shoppingCatalog/Catalog')
      .then(res => res.json())
      .then(catalog => setCatalog(catalog));
  }, []);
  if (!catalog) return null;
  return (
    <Products catalog={catalog} />
  );
}
