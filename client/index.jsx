import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';

export { default as NavBar } from './components/navbar';
export { default as Home } from './pages/home';
export { default as Catalog } from './pages/catalog';
export { default as Products } from './catalog-components/products';
export { default as ProductDetails } from './catalog-components/product-details';
export { default as Cart } from './pages/cart';
export { default as CartItems } from './catalog-components/cart-items' 
export { default as NotFound } from './pages/not-found';
export { default as BrandFooter } from './components/brand-footer';
export { default as parseRoute } from './lib/parse-route';
export { default as Loader } from './components/loader';
export { default as HeroImage } from './home-components/hero-image';
export { default as ThreeImageCol } from './home-components/three-column-image';
export { default as HomeCarousel } from './home-components/carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
