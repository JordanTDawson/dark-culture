import React, { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import Home from './pages/home';
import Catalog from './pages/catalog';
import Blog from './pages/blog';
import NotFound from './pages/not-found';
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
      return <Home />;
    }
    if (route.path === 'catalog') {
      return <Catalog />;
    }
    if (route.path === 'blog') {
      return <Blog />;
    }
    return <NotFound />;
  }

  return (
    <>
      <NavBar />
      { renderPage() }
    </>
  );
}
