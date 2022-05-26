
import React, { useState } from 'react';
import Overview from './Overview.jsx';
// import Questions from './Questions.jsx';
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
      {/* <Questions props={productID} /> */}
      {/* <Reviews productID={productID} /> */}
    </div>
  );
}

export default ProductDetails;


// import React, { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom'
// import Overview from './Overview.jsx'
// const axios = require('axios')

// function ProductDetails() {
//   // 37312, 37311
//   const [productID, setProductID] = useState(37311)
//   const [product, setProduct] = useState({})
//   const [styles, setStyles] = useState([])

//   useEffect(() => {

//     if (productID) {``
//       axios.get(`/products/${productID}`)
//         .then((result) => {
//           console.log('product state set to: ', result.data)
//           setProduct(result.data)
//         })
//         .catch((err) => {
//           console.error('ProductDetails.jsx -products state- ran into an error: ', err)
//         });

//       axios.get(`/products/${productID}/styles`)
//         .then((result) => {
//           console.log('product state set to: ', result.data)
//           setStyles(result.data.results)
//         })
//         .catch((err) => {
//           console.error('ProductDetails.jsx -styles state-ran into an error: ', err)
//         });
//     }
//   }, [productID]);

//   return <div>Product Detailss
//     <Overview pid={productID} styles={styles} product={product}>Hello</Overview>
//   </div>
// }

// export default ProductDetails