import React from 'react';
import HelloWorld from '../components/hello-world';
import NavBar from '../components/navbar';

export default function Home(props) {
  return (
    <div>
      <NavBar />
      <HelloWorld />
    </div>
  );
}
