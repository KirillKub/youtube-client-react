import React, { Component } from 'react';
import Card from './card';
import './listCard.scss'


export default class ListCard extends Component {
  render() {
    let listCard = this.props.cards ? this.props.cards.map((card) => {
      return(
        <Card
        key={card.id}
        cardUrl={card.snippet.thumbnails.high.url}
        viewCount={card.statistics.viewCount}
        likeCount={card.statistics.likeCount}
        dislikeCount={card.statistics.dislikeCount}
        commentCount={card.statistics.commentCount}
        title={card.snippet.title}        
        date={card.snippet.publishedAt}
        isOpenFullCard={this.props.isOpenFullCard}
        id={card.id}
        />
      )
    }) : null;

    return(
      <div className="list-card">
        {listCard}
      </div>
    )
  }
}