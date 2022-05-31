import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ProductInfo from "./overview/ProductInfo.jsx";
import Cart from "./overview/Cart.jsx";
import ImageGallery from "./overview/ImageGallery.jsx";
import StyleSelector from "./overview/StyleSelector.jsx";
import Fullscreen from "./overview/Fullscreen.jsx";
import "./Overview.css";

const axios = require("axios");
function Overview({
  id,
  productInfo,
  productStyles,
  reviewsMeta,
  stateHandler,
}) {
  const [style, setStyle] = useState([]);
  const [product, setProduct] = useState();
  const [styles, setStyles] = useState();
  const [ratings, setRatings] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  // console.log('whats in overview: ', id, productInfo, productStyles, reviewsMeta, stateHandler)
  useEffect(() => {
    console.log("ps " + JSON.stringify(productInfo));

    if (productStyles && Object.keys(productStyles).length > 0) {
      setStyles(productStyles.results);
      setStyle(productStyles.results[0]);
    }

    setProduct(productInfo);
    if (!reviewsMeta) {
      return;
    }
    console.log("r-meta", reviewsMeta);
    let total = 0;
    let count = 0;
    Object.keys(reviewsMeta.ratings).forEach((k, i) => {
      total += k * reviewsMeta.ratings[k];
      count += parseInt(reviewsMeta.ratings[k]);
    });
    let stars = Math.floor(total / count);
    console.log(total, count);
    let decimal = total / count - stars;
    console.log("stars + decimal : ", total / count, stars, decimal);
    if (decimal > 0.75) {
      if (decimal - 0.75 > 0.125) {
        decimal = 1;
      } else {
        decimal = 0.75;
      }
    } else if (decimal > 0.5) {
      if (decimal - 0.5 > 0.125) {
        decimal = 0.75;
      } else {
        decimal = 0.5;
      }
    } else if (decimal > 0.25) {
      if (decimal - 0.25 > 0.125) {
        decimal = 0.5;
      } else {
        decimal = 0.25;
      }
    } else {
      if (decimal > 0.125) {
        decimal = 0.25;
      } else {
        decimal = 0;
      }
    }
    console.log("stars + decimal : ", stars, decimal);
    setRatings({
      stars: stars + decimal,
      count: count,
    });
  }, [productInfo]);

  const setCurrStyle = (index) => {
    setStyle(styles[index]);
  };

  if (product) {
    return (
      <>
        {Object.keys(fullscreen).length === 0 ? (
          <div className="overview">
            <div className="overview__item">
              <ImageGallery setFullscreen={(data) => {setFullscreen(data)}} currStyle={style.photos ? style.photos : []} />
            </div>
            <div className="overview__item">
              <ProductInfo
                currStyle={style}
                ratings={ratings}
                product={product}
              />
              <StyleSelector setCurrStyle={setCurrStyle} styles={styles} />
              <Cart sizes={style.skus ? style.skus : {}} />
            </div>
          </div>
        ) : (
          <Fullscreen data={fullscreen} setFullscreen={() => {setFullscreen({})}}></Fullscreen>
        )}
      </>
    );
  } else {
    return <div>no product info yet</div>;
  }
}

export default Overview;
