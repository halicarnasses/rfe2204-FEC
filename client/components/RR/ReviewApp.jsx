import React, { useState, useEffect } from 'react';
import List from './ReviewList/List.jsx';
import Rating from './Rating/Rating.jsx'

function ReviewApp ({ product_id }) {
  return (<div>
    <List pId={product_id}/>
    <Rating productId={product_id} />
  </div>)
}
export default ReviewApp;
