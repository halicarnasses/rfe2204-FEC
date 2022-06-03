import React from 'react';
import Bar from './Bar.jsx'

function BarsList({ id, handleFilter, starsWithNumber }) {
  const numOfReviewsForStar = Object.values(starsWithNumber);
  const total = numOfReviewsForStar.reduce((acc, cur) => Number(cur) + acc, 0);

  return(
    <div className="ratingBarsList">
      {

        numOfReviewsForStar.map((bar, index) => {
          return (
            <div key={index}>
              <label>{index + 1}</label>
              <Bar handleFilter={handleFilter} total={total} bar={bar} index={index + 1} id={id} key={`${index + id}`} />
            </div>
          )
        })
      }
    </div>
  )
}
export default BarsList;
