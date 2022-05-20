import React, { useState } from 'react';
import Overview from './Overview.jsx';
import Questions from './Questions/Questions.jsx';

function ProductDetails() {

  // Inital product ID = 37311.
  // Use this product ID to test all of your API requests.
  const [product, setProduct] = useState(37311);

  return (
    <div>Product Details
      <Overview props={product}/>
      <Questions props={product}/>
    </div>
  );
}

export default ProductDetails;