import React, { lazy, Suspense } from 'react';
import Metatags from '../MetaTags/MetaTags';

import './Header.css';


const Hero = lazy(() => import('../Hero/Hero'));
const NavBar = lazy(() => import('../NavBar/NavBar'));


export default function Header() {
  return (
    <>
      <Hero />
      <NavBar />
      <Metatags />
    </>
  );
}
