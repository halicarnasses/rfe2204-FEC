import React, { useState, useEffect } from 'react';
import ImageGallery from "./overview/ImageGallery.jsx";
import Carousel from './shared/Carousel/Carousel.jsx';


import ProductInfo from "./overview/ProductInfo.jsx";
import StyleSelector from "./overview/StyleSelector.jsx";
import AddToCart from "./overview/AddToCart.jsx";
import './css/overview/Overview.css';


function Overview({id, productInfo, productStyles, reviews, stateHandler}) {

  if (productInfo === undefined ) {
    console.log('OVERVIEW NO DATA');
  }

  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [style, setStyle] = useState({});
  const [rating, setRating] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

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

  const updateStyle = (obj) => {
    setStyle(obj);
  };

  return (
    <div className="overview-div">

      <Carousel slides={style ? style.photos : [] } />

      <div className="overview-product-dash">
        <ProductInfo
          name={product ? product.name : ''}
          description={product ? product.description : ''}
          rating={rating}
          reviewCount={reviews ? reviews.count : 0}
          price={product ? product.default_price : 0}
          salePrice={style ? style.sale_price : 0}
          category={product ? product.category : ''}/>
        <StyleSelector
          styleHandler={updateStyle}
          style={styles ? style : {}}
          results={styles ? styles.results : []}/>
        <AddToCart skus={style ? style.skus : []}/>
      </div>

    </div>
  );

}

export default Overview;
