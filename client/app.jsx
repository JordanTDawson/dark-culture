import React, { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Home from './pages/home';
import Catalog from './pages/catalog';
import ProductDetails from './catalog-components/product-details';
import Cart from './pages/cart';
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
    if (route.path === '') {

      return { component: <Home />, showFooter: true };

    } else if (route.path === 'catalog') {

      return { component: <Catalog />, showFooter: true };

    } else if (route.path === 'products') {

      const productId = route.params.get('productId');
      return { component: <ProductDetails productId={productId} />, showFooter: false };

    } else if (route.path === 'cart') {

      return { component: <Cart />, showFooter: false };

    } else {
      return { component: <NotFound />, showFooter: false };
    }
  }

  return (
    <>
      <NavBar />
      { renderPage().component }
      { renderPage().showFooter && <BrandFooter /> }
    </>
  );
}
