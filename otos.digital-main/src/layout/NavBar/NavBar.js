import React, { useState, useEffect } from 'react';
import './NavBar.css';

import Logo from '../../components/Logo/Logo';
import BurgerBtn from '../../components/BurgerBtn/BurgerBtn';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <nav className={navbar ? 'navbar active fixed-top' : 'navbar fixed-top'}>
      <Logo />
      <BurgerBtn />
    </nav>
  );
}
