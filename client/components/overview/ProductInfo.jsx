import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

import StarRating from '../shared/StarRating/StarRating.jsx';

function ProductInfo({name, description, rating, reviewCount, price, salePrice, category }) {
  console.log(name, rating, price, salePrice);

  return (
    <div className="overview-product-info">
      <div className="overview-product-reviews">
        <StarRating stars={rating} />
        {reviewCount ?
          <h4><a href="reviews-div">See all reviews</a>{reviewCount}</h4>
          : <></>
        }
      </div>
      <h5>CATEGORY: {category}</h5>
      <h3>{name}</h3>
      <h5>{description}</h5>
      { salePrice ?
        <h6>
          <span style={{textDecorationLine: 'line-through'}}>{price}</span>
          <span style={{color: 'red'}}>{salePrice}</span>
        </h6>
        : <></>
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
2