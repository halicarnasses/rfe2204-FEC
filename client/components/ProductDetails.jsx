import React, { useState, useEffect } from 'react';
import axios from "axios";
import Overview from './Overview.jsx';
import Questions from './Questions.jsx';
import Reviews from './Reviews.jsx';
import "./css/App.css";
function ProductDetails() {

  const [productID, setProductID] = useState(37313);

  // All info stored in one state.
  const [productAll, setProductAll] =useState({});
  // Update state on mount.
  useEffect(() => {
    updateState(productID);
  }, []);

  const updateState = (id, page=1, count=10, sort='relevant') => {
    id = Number(id);
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
        axios.get(`/reviews/?product_id=${id}&page=${page}&count=${count}&sort=${sort}`),
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
        return allInfo;
      }))
      .then((data) => ( setProductAll(data) ))
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div className="product-details-div">
      <Overview
        id={productID}
        productInfo={productAll.productInfo}
        productStyles={productAll.productStyles}
        reviews={productAll.reviews}
        stateHandler={updateState}/>

      <Questions
        id={productID}
        product={productAll.productInfo}
        questionsData={productAll.questions}
        stateHandler={updateState}/>

      <Reviews
        id={productID}
        reviews={productAll.reviews}
        reviewsMeta={productAll.reviewsMeta}
        stateHandler={updateState}/>

    </div>
  );

}

export default ProductDetails;