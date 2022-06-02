import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

import StarRating from '../shared/StarRating/StarRating.jsx';

function ProductInfo({name, description, rating, reviewCount, price, salePrice, category }) {

  return (
    <div className="overview-product-info">
      <StarRating stars={rating} />
      {reviewCount ?
        <h5><a href="reviews-div">See all reviews</a> {reviewCount}</h5>
        : <></>
      }
      <h5>CATEGORY: {category}</h5>
      <h4>{name}</h4>
      <h5>{description}</h5>
      {/* <h6>{price}</h6> */}
      { salePrice ?
        <h5>
          <span style={{textDecorationLine: 'line-through'}}>${price}</span>
          <span style={{color: 'red'}}> ${salePrice}</span>
        </h5>
        : <h5>${price}</h5>
      }
      <div className="overview-social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaPinterest />
      </div>
    </div>
  );

}

export default ProductInfo;