import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionSearch from './questions/QuestionSearch.jsx';
import QuestionList from './questions/QuestionList.jsx';
import QuestionAction from './questions/QuestionAction.jsx';

import './questions/Questions.css'

function Questions({props}) {
  console.log(props);
  const [productID, setProductID] = useState(props);
  const [questionData, setQuestionData] = useState([]);

  const questionURL = '';



  // When componenet mounts, get question info for product.

  useEffect(() => {
    axios.get(`/qa/questions/?product_id=${productID}`)
    .then((response) => {
      console.log('QUESTIONS', response.data);
      return setQuestionData(response.data.results);
    });
  }, [setQuestionData]);



  return (
    <div className="questions-div">
      <h2>QUESTIONS</h2>
      <QuestionSearch />
      <QuestionList />
      <QuestionAction />
    </div>
  );
}

export default Questions;