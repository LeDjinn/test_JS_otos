import React from 'react';
import Typed from 'react-typed';
import './TypedTitle.css';

const Demo = () => {
  return (
    <div>
      <Typed
        strings={[
          'Vous voulez un site internet ?',
          'Vous voulez une application mobile ?',
          'Vous voulez digitaliser votre entreprise?',
          'Vous voulez du dynamisme ?',
          'Vous voulez du professionnalisme ?',
          `Vous avez des questions ?`,
          `Vous avez besoin de conseils ?`,
          'Vous avez tapez à la bonne adresse !',
          'Votre projet nous intéresse !',
        ]}
        className="demo-typed"
        typeSpeed={70}
        backSpeed={80}
        loop
      />
    </div>
  );
};

export default Demo;
