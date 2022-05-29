import React, { useState, useEffect } from 'react';
import axios from "axios";
import Overview from './Overview.jsx';
import Questions from './Questions.jsx';
// import Reviews from './Reviews.jsx';
// import Carousel from './examples/Carousel/Carousel.jsx';
// import CarouselTestData from './examples/Carousel/CarouselTestData.js';
// import StarRating from './examples/StarRating/StarRating.jsx'

function ProductDetails() {

  const [productID, setProductID] = useState(37311);

  // All info stored in one state.
  const [productAll, setProductAll] =useState({});

  // Update state on mount.
  useEffect(() => {
    updateState(productID);
  }, []);

  const updateState = (id, page=1, count=100, sort='newest') => {
    console.log(`Updating ${id} ${page} ${count}`);

    axios
      .all([

        // All products not needed right now.
        // axios.get(`/products/?page=${page}&count=${count}`),

        // Product Information
        axios.get(`/products/${id}`),
        // Product Styles
        axios.get(`/products/${id}/styles`),
        // Questions
        axios.get(`/qa/questions/?product_id=${id}&page=${page}&count=${count}`),
        // Reviews
        axios.get(`/reviews/?page=&count=&product_id=${id}`),
        axios.get(`/reviews/meta/?product_id=${id}`),
      ])
      .then(axios.spread((...responses) => {

        const allInfo = {
          products: {},
          productInfo: {},
          productStyles: {},
          questions: {},
          reviews: {},
          reviewsMeta: {}
        };

        allInfo.productInfo = responses[0].data;
        allInfo.productStyles = responses[1].data;
        allInfo.questions = responses[2].data.results;
        allInfo.reviews = responses[3].data;
        allInfo.reviewsMeta = responses[4].data;
        // console.log(allInfo.productStyles);
        return allInfo;
      }))
      .then((data) => ( setProductAll(data) ))
      .catch((error) => {
        console.log(error);
      });

  };

  // Add ternary conditional for all props to handle undefined data?
  // ex:  props={props? props : {}}
  return (
    <div>
      <h1>Product Details</h1>
      <Overview
        id={productID}
        productInfo={productAll.productInfo}
        productStyles={productAll.productStyles}
        reviews={productAll.reviews}
        stateHandler={updateState}/>

      {/* <Questions
        id={productID}
        product={productAll.productInfo}
        questionsData={productAll.questions}
        stateHandler={updateState}/> */}

      {/* <Reviews id={productID} reviews={productAll.reviews} reviewsMeta={productAll.reviewsMeta} stateHandler={updateState}/> */}

    </div>
  );

}

export default ProductDetails;
