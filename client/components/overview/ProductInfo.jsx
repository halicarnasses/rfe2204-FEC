import React from 'react';
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

import StarRating from '../shared/StarRating/StarRating.jsx';

function ProductInfo({name, description, rating, reviewCount, price, salePrice, category }) {


  const sharePage = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    console.log(target);

  }

  return (
    <div className="overview-product-info">
      <StarRating stars={rating} />
      {reviewCount ?
        <h5><a className="onclick" href="reviews-div">See all reviews</a> {reviewCount}</h5>
        : <></>
      }
      <h5>CATEGORY: {category}</h5>
      <h4>{name}</h4>
      <h5>{description}</h5>
      {/* <h6>{price}</h6> */}
      { salePrice ?
        <h4>
          <span style={{textDecorationLine: 'line-through'}}>${price}</span>
          <span style={{color: 'red'}}> ${salePrice}</span>
        </h4>
        : <h4>${price}</h4>
      }
      <div className="overview-social-icons">

        <a target="_blank" className="onclick" href= {`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
          <FaFacebook name="icon" size={25}/>
        </a>

        <a target="_blank" className="twitter-share-button  onclick" href="https://twitter.com/intent/tweet?text=Check%20this%20out%33" data-size="large">
          <FaTwitter size={25}/>
        </a>

        <a target="_blank" className="onclick" href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" data-pin-custom="true">
          <FaPinterest size={25}/>
        </a>

      </div>
    </div>
  );

}

export default ProductInfo;