import React, { useState, useEffect } from 'react';
import Products from '../catalog-components/products';
import Loading from '../components/loader';

export default function Catalog() {
  const [catalog, setCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/shoppingCatalog/Catalog');
        const catalogData = await response.json();
        setCatalog(catalogData);
      } catch (error) {
        setCatalog([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return <Products catalog={catalog} />;
  }
}
