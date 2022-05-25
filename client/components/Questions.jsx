import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionSearch from './questions/QuestionSearch.jsx';
import QuestionList from './questions/QuestionList.jsx';
import QuestionAction from './questions/QuestionAction.jsx';
// import Question from "./questions/Question.jsx"

import './questions/Questions.css';

import questionData from './questions/questions-sample.js'

function Questions({props}) {
  const [productID, setProductID] = useState(props);
  const [questions, setQuestions] = useState(questionData.results);
  // Need to sort questions by helpfulness.
  // Need to update list based on search filter.

  const questionURL = '';

  // When componenet mounts, get question info for product.
  // useEffect(() => {
  //   axios.get(`/qa/questions/?product_id=${productID}`)
  //   .then((response) => {
  //     const results = response.data.results;
  //     console.log('GOT', results);
  //     setQuestions(results);
  //   });
  // }, [setQuestions]);


  // Use to update data via server/api.
  const updateQuestions = () => {
    // Add POST or PUT requests.
    // Add GET request after response.
    // Update state.
    // setQuestions();

  };

  const searchHandler = (filter) => {
    // Update question list based on filter.
  };

// Add action buttons.
  if (questions) {
    return (
      <div className="questions-div">
      <h2>QUESTIONS</h2>
      <QuestionSearch />
      <QuestionList  props={questions}/>
    </div>
    )
  } else {
    return (
      <div>NO QUESTIONS!</div>
    );
  }
}

export default Questions;