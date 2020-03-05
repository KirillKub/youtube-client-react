import React from 'react';
import './search.scss'
import settingUrl from '../assets/search_settings.png';
import { NavLink } from 'react-router-dom';

export default function Search(props) {
  return (
    <div className="search-box">
      <div className="search">
        <input type="text" placeholder="What are you want to find out?" onInput={props.changeSearchValue}/>
        <NavLink to='/search'>
          <button onClick={props.isClickSearch}>search</button>
        </NavLink>
      </div>
      <img className="search-img" src={settingUrl} alt="setting" onClick={props.isClickSetting}/>
    </div>
  )
}