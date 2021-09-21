import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';

import './Footer.css';

export default function Footer() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="footer">
      <div className="styled-footer">
        <a
          href="https://www.facebook.com/Otos.Lab"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className='sr-only'>Facebook</span>
          <RiFacebookCircleLine size={30} className="social-links" />
        </a>
        <a
          href="https://www.instagram.com/otos_lab.fr/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className='sr-only'>Instragram</span>
          <RiInstagramLine size={30} className="social-links" />
        </a>
      </div>

      <div className="brand"> © 2021 Otos Lab.</div>
      <div onClick={refreshPage} className="terms">
        <Link to="/mentions-legales">Mentions Légales</Link>
      </div>
    </div>
  );
}
