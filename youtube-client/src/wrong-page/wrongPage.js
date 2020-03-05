import React from 'react';
import './wrongPage.scss';
import url from '../assets/404.png';

export default function WrongPage() {
  return (
    <div className="error">
      <img src={url} alt="error"/>
      <div className="error-text">Sorry, smth went wrong((</div>
    </div>
  )
}