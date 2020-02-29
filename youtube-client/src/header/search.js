import React from 'react';
import './search.scss'
import settingUrl from '../assets/search_settings.png';

export default function Search() {
  return (
    <div className="search-box">
      <div className="search">
        <input type="text" placeholder="What are you want to find out?"/>
        <button>search</button>
      </div>
      <img className="search-img" src={settingUrl} alt="setting"/>
    </div>
  )
}