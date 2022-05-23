import React, { useState } from 'react';
import axios from 'axios';
import QuestionSearch from './questions/QuestionSearch.jsx';
import QuestionList from './questions/QuestionList.jsx';
import QuestionAction from './questions/QuestionAction.jsx';

import './questions/Questions.css'

function Questions({props}) {
  console.log(props);
  const [productID, setProductID] = useState(props);
  const [questionData, setQuestionData] = useState();

  // When componenet mounts, get question info for product.

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