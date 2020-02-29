import React from 'react';
import loginUrl from '../assets/login.png'  
import './login.scss'

export default function Login() {
  return (
    <div className="login">
      <p>Your name</p>
      <img src={loginUrl} alt="login"/>
    </div>
  )
}