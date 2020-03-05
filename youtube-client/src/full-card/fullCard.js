import React from 'react';
import './fullCard.scss';
import viewUrl from '../assets/viewed.png';
import likeUrl from '../assets/liked.png';
import dislikeUrl from '../assets/dislike.png';
import commentUrl from '../assets/comments.png';
import backUrl from '../assets/left.png'
import { NavLink, useParams } from 'react-router-dom';


export default function FullCard(props) {
    let { id } = useParams();
    let card = null;
    if(props.cards) card = props.cards.find(elem => elem.id === id);
    const week = 7;
    const month = 30;
    const halfOfYear = 178; 
    let border = '';
    if(card) {
      const daysAfterPublication = (+new Date() - +new Date(card.snippet.publishedAt)) / 1000 / 60 / 60 / 24;
      if(daysAfterPublication < week) {
        border = '5px solid green'
      } 
      else if ( daysAfterPublication < month) {
        border = '5px solid blue'
      }
      else if (daysAfterPublication > halfOfYear) {
        border = '5px solid red'
      }
    }

    return card ? (
      <div className="fullCard">
        <div className="fullCard__back">
          <NavLink to="/search">
            <div className="fullCard__back-block">
                <img src={backUrl} alt="back"/>
            </div>
          </NavLink>  
        </div>
        <img src={card.snippet.thumbnails.high.url} alt="logo" width="729" height="461"/>
        <div className="fullCard__description" style={{borderBottom: border}}>
          <div className="fullCard__description-title">
            <div className="fullCard__description-title__title">{card.snippet.title}</div>
            <div className="fullCard__description-title__date">{card.snippet.publishedAt}</div>
          </div>
          <div className="fullCard__description-desc">
            Description:
            <div className="fullCard__description-desc-text">
              {card.snippet.description.substring(0,700) + '...'}
            </div>
          </div>
          <div className="fullCard__description-info">
            <div className="fullCard__description-info-block"><img src={viewUrl} alt="view"/><p>{card.statistics.viewCount}</p></div>
            <div className="fullCard__description-info-block"><img src={likeUrl} alt="like"/><p>{card.statistics.likeCount}</p></div>
            <div className="fullCard__description-info-block"><img src={dislikeUrl} alt="dislike"/><p>{card.statistics.dislikeCount}</p></div>
            <div className="fullCard__description-info-block"><img src={commentUrl} alt="comment"/><p>{card.statistics.commentCount}</p></div>
          </div>
        </div>
      </div>
    ) : null;
  } 