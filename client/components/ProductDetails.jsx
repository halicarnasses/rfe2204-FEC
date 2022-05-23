import React, { useState } from 'react';
import Overview from './Overview.jsx';
import Questions from './Questions.jsx';
// import Reviews from './Reviews.jsx';

function ProductDetails() {

  // Inital product ID = 37311.
  // Use this product ID to test all of your API requests.
  const [productID, setProductID] = useState(37311);

  const updateState = (id) => {
    setProductID(id);
    // Once the state has been changed,
    // componenets should re-render with updated product.s
  }

  return (
    <div>
      <h1>Product Details</h1>
      <Overview props={productID} stateHandler={updateState}/>
      <Questions props={productID} />
      {/* <Reviews productID={productID} /> */}
    </div>
  );
}

export default ProductDetails;