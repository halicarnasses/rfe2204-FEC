import React, { useState, useEffect } from 'react'

import StarRating from '../shared/StarRating/StarRating.jsx';

function ProductInfo({rating, name, price }) {
  // console.log(name, rating, price)
  // const [pInfo, setInfo] = setState({});

  return (
    <div className="overview-product-info">
      {/* Star Rating */}
      <StarRating stars={rating} />
      <h5>CATEGORY</h5>
      <h3>{name}</h3>
      <h6>{price}</h6>
    </div>
  )

}

export default ProductInfo
