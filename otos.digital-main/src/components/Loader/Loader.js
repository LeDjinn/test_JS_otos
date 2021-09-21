import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.css';
export default function LoaderComponent() {
  return (
    <div className="loader-position">
      <Loader
        type="Rings"
        color="#6226a9"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}
