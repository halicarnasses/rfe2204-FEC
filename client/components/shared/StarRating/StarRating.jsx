import React from "react";
import "./Star.css";
import Star from "./Star.jsx";


function StarRating({stars}) {
  let rating = 0;
  let ratingWidth = '';

  /* This is to round the rating to closest .5 or .0 */
  if (stars) {
    console.log('STARS', stars);
    // Ratio is the actual percentage to fill.
    const ratio = (stars/5).toFixed(2);
    console.log('RATIO', ratio)
    // Explain this
    const ratioRounded = (Math.round(ratio * 4) / 4).toFixed(2).toString();
    console.log(`ADJ ${ ratioRounded }`);

    ratingWidth = ratioRounded.toString().split('.')[1] + '%';

    console.log('str', ratingWidth);

    }

  // console.log(stars, ratingWidth);


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