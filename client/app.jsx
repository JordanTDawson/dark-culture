import React, { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Home from './pages/home';
import Catalog from './pages/catalog';
import ProductDetails from './catalog-components/product-details';
import Cart from './pages/cart';
import NotFound from './pages/not-found';
import BrandFooter from './components/brand-footer';
import parseRoute from './lib/parse-route';
import Loader from './components/loader';

export default function App() {
  const [route, setRoute] = useState(parseRoute(window.location.hash));
  const [isLoading, setIsLoading] = useState(true);
  const [isProductDetailsPage, setIsProductDetailsPage] = useState(false);

  function handleChange(event) {
    setRoute(parseRoute(window.location.hash));
    setIsLoading(true);
  }

  useEffect(() => {
    window.addEventListener('hashchange', handleChange);
    return () => window.removeEventListener('hashchange', handleChange);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsProductDetailsPage(route.path === 'products');
    }, 1000);
  }, [route]);

  function renderPage() {
    if (route.path === '') {

      return { component: <Home />, showFooter: true };

    } else if (route.path === 'catalog') {

      return { component: <Catalog />, showFooter: true };

    } else if (route.path === 'products') {

      const productId = Number(route.params.get('productId'));

      return { component: <ProductDetails productId={productId} />, showFooter: true };

    } else if (route.path === 'cart') {

      return { component: <Cart />, showFooter: false };

    } else {

      return { component: <NotFound />, showFooter: false };
      
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="flex-grow-1">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {renderPage().component}
          </>
        )}
      </div>
      {renderPage().showFooter && (
        <BrandFooter className={isProductDetailsPage ? 'sticky-bottom' : ''} />
      )}
    </div>
  );
}
