import React from 'react';
import './setting.scss'

export default function Setting(props) {
  return props.isSetting ? (
    <div className="setting">
      <div className="setting-sort">Sorting by:</div>
      <span className="setting-sort_name" onClick={props.sortByDate}>date</span>
      <span className="setting-sort_name" onClick={props.sortByCount}>count of views</span>
      <div className="setting-input">
        <span className="setting-sort_span">by word or sentence</span>
        <input onInput={props.sortByInput} type="text"/>
      </div>
    </div>) : null;
}