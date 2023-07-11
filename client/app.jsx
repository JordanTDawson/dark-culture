import React, { useEffect, useState } from 'react';
import { NavBar, Home, Catalog, ProductDetails, Cart, NotFound, BrandFooter, parseRoute, Loader } from './index';
import Button from 'react-bootstrap/Button';

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
    <div className="d-flex flex-column">
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
      <Button className="circle-button" variant="secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>^</Button>
    </div>
  );
}
