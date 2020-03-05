import React, { Component } from 'react'; 
import './card.scss'
import viewUrl from '../assets/viewed.png';
import likeUrl from '../assets/liked.png';
import dislikeUrl from '../assets/dislike.png';
import commentUrl from '../assets/comments.png';
import { NavLink } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const week = 7;
    const month = 30;
    const halfOfYear = 178; 
    const daysAfterPublication= (+new Date() - +new Date(this.props.date)) / 1000 / 60 / 60 / 24;
    let border = '';
    if(daysAfterPublication < week) {
      border = '5px solid green'
    } 
    else if ( daysAfterPublication < month) {
      border = '5px solid blue'
    }
    else if (daysAfterPublication > halfOfYear) {
      border = '5px solid red'
    }

    return (
      <div className="card" style={{borderBottom: border}}>
      <div className="card__image-box">
        <img className="card__image" src={this.props.cardUrl} alt="card"/>
      </div>
      <div className="card__info">
        <div className="card__info-block"><img src={viewUrl} alt="view"/><p>{this.props.viewCount}</p></div>
        <div className="card__info-block"><img src={likeUrl} alt="like"/><p>{this.props.likeCount}</p></div>
        <div className="card__info-block"><img src={dislikeUrl} alt="dislike"/><p>{this.props.dislikeCount}</p></div>
        <div className="card__info-block"><img src={commentUrl} alt="comment"/><p>{this.props.commentCount}</p></div>
      </div>
      <div className="card__title">
        <p>{this.props.title.substring(0,65) + '...'}</p>
      </div>
      <div className="card__button-box">
          <NavLink to={`/search/${this.props.id}`}>
            <button id={this.props.id} onClick={this.props.isOpenFullCard} className="card__button">more...</button>
          </NavLink>
      </div>
    </div>
    )
  }
}