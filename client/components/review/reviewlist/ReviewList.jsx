import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tile from './Tile.jsx';

function ReviewList({ markedHelpful, reviews, handleNextPage }) {
  if (reviews === undefined) {
    return null;
  }
  const list = reviews;
  const [feedTile, setFeedTile] = useState(reviews.slice(0, 2));
  const [restList, setRestList] = useState(reviews.slice(2));

  function handleShowMore(e) {
    e.preventDefault();
    if (restList.length < 1) {
      handleNextPage();
    }
    setFeedTile(feedTile.concat(restList.slice(0, 2)));
    setRestList(restList.slice(2));
  }
  return (
    <div>
      <ul>
        {
          feedTile.map(item => {
            return <Tile markedHelpful={markedHelpful} key={item.review_id} item={item}/>
          })
        }
      </ul>
      {
        list.length > 0 || restList.length > 0 ? <button type="button" onClick={handleShowMore}>show more</button> : null
      }
    </div>)
}
export default ReviewList;