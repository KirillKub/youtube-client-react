import React, { Component } from 'react';
import Logo from './logo'
import Search from './search';
import Login from './login';
import './header.scss'

export default class Header extends Component {
  render (){
      return (
        <div className="header">
        <div className="invisibility-box"></div>
          <div className="header-search">
            <Logo/>
            <Search/>
          </div>
          <Login/>
        </div>       
      )
  }
}