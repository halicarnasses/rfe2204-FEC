import React, { useState } from 'react';
import Overview from './Overview.jsx';
import Questions from './Questions.jsx';
// import Reviews from './Reviews.jsx';

function ProductDetails() {

  // Inital product ID = 37311.
  // Use this product ID to test all of your API requests.
  const [productID, setProductID] = useState(37317);

  const [overviewData, setOverviewData] = useState();
  const [questionData, setQuestionData] = useState();
  const [reviewData, setReviewData] = useState();

  const updateState = (id) => {
    setProductID(id);
    // Once the state has been changed,
    // componenets should re-render with updated product.s
    // axios.get('/qa/questions')
    // https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
  }

  // Add:
  // updateOverview
  // updateQuestions
  // updateReviews
  const updateQuestions = (req, url, data=[]) => {

    // for each type of req
    // make the axios request
    // then call updateState

    if (req === 'GET') {
      console.log(req, url);
    } else if (req === 'POST') {
      console.log(req, url);
    } else if (req === 'PUT') {
      console.log(req, url);
    }
  }

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