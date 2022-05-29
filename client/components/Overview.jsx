import React, { useState, useEffect } from 'react';

import ImageGallery from "./overview/ImageGallery.jsx"

import './overview/Overview.css';

function Overview({id, productInfo, productStyles, reviews, stateHandler}) {

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [style, setStyle] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setProduct(productInfo);
    setStyles(productStyles);
    if (productStyles) {
      setStyle(productStyles.results[0]);
    }
    if (reviews) {
      // Get avgerage rating.
      let ratingsSum = 0;
      for (let r of reviews.results) {
        ratingsSum += r.rating;
      }
      const avg = ratingsSum / reviews.count;
      setRating(avg);
    }

  }, [productInfo, productStyles, reviews]);

  // console.log(product, styles, style.photos, rating);
  // console.log('PHOTOS', photos);

  return (
    <div className="overview-div">
      <h2>Overview</h2>
      <ImageGallery images={style.photos}/>
    </div>
  )

}

export default Overview;