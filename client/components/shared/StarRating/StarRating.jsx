import React from "react";
import "./Star.css";
import Star from "./Star.jsx";


function StarRating({stars}) {
  let rating = 0;
  let ratingWidth = '';

  /* This is to round the rating to closest .5 or .0 */
  if (stars) {
    // Ratio is the actual percentage to fill.
    const ratio = (stars/5).toFixed(2);
    // Ratio times 4 when rounded,
    // is the width we need for the front star div
    // in order to fill only quarters of stars, but
    // it is on a scale of 1 to 4.
    // Divide by 4 to change the scale to 0 to 1,
    // round to nearest tenth,
    // then multiple by 100 to get a percentage for the div width;
    const ratioRounded = (Math.round(ratio * 4) / 4).toFixed(2) * 100;
    ratingWidth = ratioRounded.toString() + '%';
    }

  return (
    <div className="stars-div">
      <div className="star-rating-back">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <div className="star-rating-front" style={{width: ratingWidth}}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </div>
  );
}

export default StarRating;