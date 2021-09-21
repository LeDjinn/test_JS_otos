import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';
import './DropDownMenu.css';

const childMenu = [
  {
    title: 'Site vitrine',
    path: '/services/site-vitrine',
  },
  {
    title: 'E-Commerce',
    path: '/services/e-commerce',
  },
  {
    title: 'Applications Mobile',
    path: '/services/application-web',
  },
  {
    title: 'Blog',
    path: '/services/blog',
  },
  {
    title: 'Portfolio',
    path: '/services/portfolio',
  },
  {
    title: 'CRM',
    path: '/services/crm',
  },
];

export default function DropDownMenu({ toggleMenu }) {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <ul className="child-menu">
      {childMenu.map((linkD) => (
        <li key={linkD.title} onClick={refreshPage}>
          <NavLink
            to={linkD.path}
            activeClassName="active"
            onClick={toggleMenu}
          >
            <GoChevronRight className="chevron" />
            {linkD.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
