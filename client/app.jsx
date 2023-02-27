import React from 'react';
import NavBar from './components/navbar';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Link, Outlet } from 'react-router-dom';
import { Home } from './pages/home';
import { Clothes } from './pages/clothes';
import { Blog } from './pages/blog';

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    )
  );

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

const Root = () => {
  <div>
    <Link> Home </Link>
    <Link> Data </Link>
  </div>;

    <div>
      <Outlet />
    </div>;
};
