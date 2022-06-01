import React, { useState, useEffect } from 'react';
import List from './reviews/List.jsx';

function Reviews ({ product_id }) {
  return (<div>
    <List pId={product_id}/>
  </div>)
}
export default ReviewList;