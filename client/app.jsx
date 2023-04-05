import React, { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Home from './pages/home';
import Catalog from './pages/catalog';
import ProductDetails from './catalog-components/product-details';
import Cart from './pages/cart';
import Blog from './pages/blog';
import NotFound from './pages/not-found';
import BrandFooter from './components/brand-footer';
import parseRoute from './lib/parse-route';

export default function App() {
  const [route, setRoute] = useState(parseRoute(window.location.hash));

  function handleChange(event) {
    setRoute(parseRoute(window.location.hash));
  }

  useEffect(() => {
    window.addEventListener('hashchange', handleChange);
    return () => window.removeEventListener('hashchange', handleChange);
  }, []);

  function renderPage() {
    if (route.path === 'home') {

      return <Home />;

    } else if (route.path === 'catalog') {

      return <Catalog />;

    } else if (route.path === 'products') {

      const productId = route.params.get('productId');
      return <ProductDetails productId={productId}/>;

    } else if (route.path === 'cart') {

      return <Cart />;

    } else if (route.path === 'blog') {

      return <Blog />;

    }
    return <NotFound />;
  }

  return (
    <>
      <NavBar />
      { renderPage() }
      <BrandFooter />
    </>
  );
}
