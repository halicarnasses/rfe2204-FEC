import React from 'react';
import Bar from './Bar.jsx'

function BarsList({ id, starsWithNumber }) {
  const numOfReviewsForStar = Object.values(starsWithNumber);
  const total = numOfReviewsForStar.reduce((acc, cur) => Number(cur) + acc, 0);
  return(
    <div className="ratingBarsList">
      {
        numOfReviewsForStar.map((bar, index) => <Bar total={total} bar={bar} index={index + 1} id={id} key={index + id} />)
      }
    </div>
  )
}
export default BarsList;
