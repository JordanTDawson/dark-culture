import React, { useState, useEffect } from 'react';
import { Loader, Products } from '../index';
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
    return <Loader />;
  } else {
    return <Products catalog={catalog} />;
  }
}
