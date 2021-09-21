import React from 'react';
import TypedTitle from '../TypedTitle/TypedTitle';
import MyButton from '../Button/Button';
import './CallToAction.css';

function CalltoAction() {
  return (
    <div className="call-to-action">
      <h1 className="text-center">
        <TypedTitle />
      </h1>
      <div className="text-center" style={{ margin: '50px' }}>
        <MyButton className="btn btn-large">
          <strong>Parler de mon projet</strong>
        </MyButton>
      </div>
    </div>
  );
}

export default CalltoAction;
