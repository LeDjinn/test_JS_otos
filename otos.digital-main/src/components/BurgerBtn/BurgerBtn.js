import React, { useState } from 'react';
import './BurgerBtn.css';

import MenuTest from '../../layout/Menu/Menu';

export default function BurgerBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <div
        className={isOpen ? 'burger-btn open' : 'burger-btn'}
        onClick={toggleMenu}
      >
        <div />
        <div />
        <div />
      </div>
      <MenuTest isOpen={isOpen} toggleMenu={toggleMenu} />
    </React.Fragment>
  );
}
