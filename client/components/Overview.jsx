import React, { useState, useEffect } from 'react';

import ImageGallery from "./overview/ImageGallery.jsx"
import ProductInfo from "./overview/ProductInfo.jsx";


import Carousel from './shared/Carousel.jsx';


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

  console.log(style);
  // console.log('PHOTOS', photos);

  return (
    <div className="overview-div">
      {/* <ImageGallery images={style.photos}/> */}

      <Carousel slides={style ? style.photos : []}/>

      <ProductInfo
        name={product ? product.name : ''}
        rating={rating}
        price={product ? product.default_price : 0}
        salePrice={style ? style.sale_price : 0}/>
    </div>
  )

}

export default Overview;