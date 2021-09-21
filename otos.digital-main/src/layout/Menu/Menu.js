import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

import DropDownTest from '../../components/DropDownMenu/DropDownMenu';

export default function Menu({ isOpen, toggleMenu }) {
  return (
    <ul className={isOpen ? 'menu open' : 'menu'}>
      <li>
        <NavLink to="/accueil" activeClassName="active" onClick={toggleMenu}>
          Accueil
        </NavLink>
      </li>

      <li>
        <span className="dropdown-link">Nos services</span>
        <DropDownTest toggleMenu={toggleMenu} />
      </li>

      <li>
        <NavLink
          to="/methodologie"
          activeClassName="active"
          onClick={toggleMenu}
        >
          Notre méthodologie
        </NavLink>
      </li>
      <li>
        <NavLink to="/notre-adn" activeClassName="active" onClick={toggleMenu}>
          Notre ADN
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/nous-contacter"
          activeClassName="active"
          onClick={toggleMenu}
        >
          Nous contacter
        </NavLink>
      </li>
    </ul>
  );
}
