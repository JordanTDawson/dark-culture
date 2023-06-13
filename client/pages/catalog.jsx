import React, { useState, useEffect } from 'react';
import Products from '../catalog-components/products';
import Loading from '../components/loader';
import { fetchCatalog } from '../util-files/product-utils'

export default function Catalog() {
  const [catalog, setCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetching entire catalog data.
    const fetchData = async () => {
      const catalogData = await fetchCatalog();
      setCatalog(catalogData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return <Products catalog={catalog} />;
  }
}
