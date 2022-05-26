import React, { useState, useEffect } from 'react';
import axios from "axios";
import Overview from './Overview.jsx';
import Questions from './Questions.jsx';
// import Reviews from './Reviews.jsx';

function ProductDetails() {

  // Inital product ID = 37311.
  // Use this product ID to test all of your API requests.
  const [productID, setProductID] = useState(37317);
  // All info stored in one state.
  const [productAll, setProductAll] =useState({});

  // Update state on mount.
  useEffect(() => {
    updateState(productID);
  }, [])

  const updateState = (id) => {
    console.log(`Updating ${id}`);

    axios
      .all([
        // All products not needed right now.
        // axios.get(`/products/?page=${page}&count=${count}`),
        axios.get(`/products/${id}`),
        axios.get(`/products/${id}/styles`),
        axios.get(`/qa/questions/?product_id=${id}`),
        axios.get(`/reviews/?product_id=${id}`),
        axios.get(`/reviews/?page=&count=&product_id=${id}`)
      ])
      .then(axios.spread((...responses) => {

        const allInfo = {
          products: {},
          productInfo: {},
          productStyles: {},
          questions: {},
          reviews: {},
          reviewsMeta: {}
        }
        allInfo.productInfo = responses[0].data;
        allInfo.productStyles = responses[1].data;
        allInfo.questions = responses[2].data.results;
        allInfo.reviews = responses[3].data;
        allInfo.reviewsMeta = responses[4].data;
        return allInfo;
      }))
      .then((data) => ( setProductAll(data) ))
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div>
      <h1>Product Details</h1>
      {/* <Overview id={productID} productInfo={productAll.productInfo} productStyles={productAll.productStyles} stateHandler={updateState}/> */}
      <Questions id={productID} questionsData={productAll.questions} stateHandler={updateState}/>
      {/* <Reviews id={productID} reviews={productAll.reviews} reviewsMeta={productAll.reviewsMeta} stateHandler={updateState}/> */}
    </div>
  );

}

export default ProductDetails;