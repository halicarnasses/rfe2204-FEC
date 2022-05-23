import React, { useState } from 'react';
import axios from 'axios';
import QuestionSearch from './questions/QuestionSearch.jsx';

function Questions({props}) {
  console.log(props);
  const [productID, setProductID] = useState(props);
  const [questionData, setQuestionData] = useState();

  // When componenet mounts, get question info for product.


  return (
    <div>
      <h2>Questions</h2>
      <QuestionSearch />
      <h3>QuestionList</h3>
        {/* QAListItem */}
          {/* Item Question */}
            {/* Helpful Button */}
            {/* Add Answer MAKE MODAL*/}
          {/* Item Answer */}
            {/* Timestamp with UserID */}
            {/* Helpful Button */}
            {/* Report Button */}
            {/* Potential Photo List MAKE MODAL */}
            {/* Load more answers for question */}
      <h3>ActionBar</h3>
        {/* More Questions Button */}
          {/* Loads more questions */}
        {/* Add Questions Button MAKE MODAL */}
    </div>
  );
}

export default Questions;