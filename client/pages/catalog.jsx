import React, { useState, useEffect } from 'react';
import Products from '../catalog-components/products';
import Loading from '../components/loader';

export default function Catalog() {

  const [catalog, setCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/shoppingCatalog/Catalog')
      .then(res => res.json())
      .then(catalog => {
        setCatalog(catalog)
        setIsLoading(false);
      })
      .catch(catalog => setCatalog([]));
  }, []);

  if (!catalog) {
    return [];
  } else if (isLoading) {
    <Loading />
  } else {
    return (
      <Products catalog={catalog} />
    );
  }
}
