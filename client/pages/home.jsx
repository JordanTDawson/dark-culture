import React from 'react';
import HeroImage from '../home-components/hero-image';
import ThreeImageCol from '../home-components/three-column-image';
import HomeCarousel from '../home-components/carousel';

export default function Home() {
  return (
    <>
      <HeroImage />
      <ThreeImageCol />
      <HomeCarousel />
    </>
  );
}
