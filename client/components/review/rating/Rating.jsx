import React, { useState } from 'react';
import axios from 'axios';
import StarsList from '../Stars.jsx'
import BarsList from './BarsList.jsx';

function Rating({ id, ratings, handleFilter }) {
  const stars = Object.values(ratings);
  const sum = stars.reduce((acc, cur) => Number(cur) + acc, 0);
  let ave = stars.reduce((acc, cur, i) => Number(cur) * (i + 1) + acc, 0) / sum;
  ave = Math.floor(ave * 10) / 10;

  function handleStarClick (e) {
    return null;
  }
  return (
    <div className="ratingApp">
      <div className="starrating">
      <span id="starnum">{ave}</span>
      <StarsList compId="rating" rating={ave} handleClick={handleStarClick} />
      </div>
      <BarsList id={id} handleFilter={handleFilter} starsWithNumber={ratings} />
    </div>
  );
}
export default Rating;