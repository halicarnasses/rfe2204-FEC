import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionSearch from './questions/QuestionSearch.jsx';
import QuestionList from './questions/QuestionList.jsx';
import QuestionAction from './questions/QuestionAction.jsx';

import './questions/Questions.css'

function Questions({props}) {
  const [productID, setProductID] = useState(props);
  const [questions, setQuestions] = useState();

  const questionURL = '';

  // When componenet mounts, get question info for product.

  useEffect(() => {
    axios.get(`/qa/questions/?product_id=${productID}`)
    .then((response) => {
      const results = response.data.results;
      console.log('GOT', results);
      setQuestions(results);
    });
  }, [setQuestions]);



  return (
    <div className="questions-div">
      <h2>QUESTIONS</h2>
      <QuestionSearch />
      <QuestionList  props={questions}/>
      <QuestionAction />
    </div>
  );
}

export default Questions;