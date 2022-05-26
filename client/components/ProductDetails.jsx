import React, { useState } from 'react';
import Overview from './Overview.jsx';
import Questions from './Questions.jsx';
// import Reviews from './Reviews.jsx';

function ProductDetails() {

  // Inital product ID = 37311.
  // Use this product ID to test all of your API requests.
  const [productID, setProductID] = useState(37317);

  const allInfo = {
    products: {},
    productInfo: {},
    productStyles: {},
    questions: {},
    reviews: {},
    reviewsMeta: {}
  }

  // States
  const [productAll, setProductAll] =useState(allInfo);
  // Overview
  const [productList, setProductList] = useState();
  const [productInfomation, setProductInfomation] = useState();
  const [productStyles, setPoductStyles] = useState();

  // Questions
  const [questions, setQuestions] = useState();
  // const [answers, setAnswers] = useState();

  // Reviews
  const [rewviews, setRewviews] = useState();
  const [rewviewsMeta, setRewviewsMeta] = useState();

  const updateState = (id) => {
    //setProductID(id);
    // Once the state has been changed,
    // componenets should re-render with updated product.s
    // axios.get('/qa/questions')
    // https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios

    axios
      .all([
        // Need requests for
        // products
        // can add values for page and count later
        // axios.get(`/products/?page=${page}&count=${count}`),
        // product info
        axios.get(`/products/${id}`),
        // product style
        axios.get(`/products/${id}/styles`),
        // questions
        axios.get(`/qa/questions/?product_id=${id}`),
        // reviews
        axios.get(),
        // reviews metadata
        // can add values for page and count later
        axios.get(`/reviews/?page=&count=s&product_id=${id}`)
      ])
      .then(axios.spread((...responses) => {
        // const responseProducts = responses[0];
        allInfo.productInfo = responses[0];
        allInfo.productStyles = responses[1];
        allInfo.questions = responses[2];
        allInfo.reviews = responses[3];
        allInfo.reviewsMeta = responses[4];
        setProductAll(allInfo);
      }))
      .catch((error) => {
        console.log(error);
      });

  }

  // Add:
  // updateOverview
  // updateQuestions
  // updateReviews

  // const updateQuestions = (req, url, data=[]) => {

  //   // for each type of req
  //   // make the axios request
  //   // then call updateState
  //   // if (req === 'GET') {
  //   //   console.log(req, url);
  //   // } else if (req === 'POST') {
  //   //   console.log(req, url);
  //   // } else if (req === 'PUT') {
  //   //   console.log(req, url);
  //   // }
  // }

  return (
    <div>
      <h1>Product Details</h1>
      {/* <Overview props={productID} /> */}
      <Questions props={productID} axiosRequest={updateQuestions}/>
      {/* <Reviews productID={productID} /> */}
    </div>
  );
}

export default ProductDetails;