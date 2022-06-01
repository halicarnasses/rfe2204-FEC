import React from "react";
import "./Star.css";
import Star from "./Star.jsx";


function StarRating({stars}) {
  console.log(stars);
  let rating = 0;
  let ratingWidth = '';

  /* This is to round the rating to closest .5 or .0 */
  if (stars) {
    const ratio = (stars/5).toFixed(2);
    console.log(ratio);
    rating = (Math.round((stars) * 4) / 4).toFixed(2);
    ratingWidth = rating.toString().split(".")[1] + '%';
    }

  console.log(rating, ratingWidth);

  return (
    <div className="star-rating-container">
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