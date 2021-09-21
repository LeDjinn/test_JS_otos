import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.css';

export default function Logo() {
  return (
    <>
      <NavLink to="/">
        <div className="logo"> Otos.lab </div>{' '}
        <div className="slogan">from scratch to success</div>
      </NavLink>
    </>
  );
}
