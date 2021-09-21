import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CallToAction from '../../components/CallToAction/CallToAction';

import './Hero.css';

export default function Hero() {
  const [path, setPath] = useState('');
  const location = useLocation();
  const currentPath = location.pathname;
  const splittedPath = currentPath.split('/')[1];

  useEffect(() => {
    setPath(splittedPath);
  }, [splittedPath]);

  return (
    <div>
      {path === 'home' ? (
        <div className="header accueil">
          <CallToAction />
        </div>
      ) : (
        <div className={'header ' + path}>
          <CallToAction />
        </div>
      )}
    </div>
  );
}
