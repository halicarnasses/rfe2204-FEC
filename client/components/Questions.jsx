import React, { useState } from 'react';
import axios from "axios";

function Questions({props}) {
  console.log(props);
  const [productID, setProductID] = useState(props);
  const [questionData, setQuestionData] = useState();

  // When componenet mounts, get question info for product.

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make request to server
  }

  return (
    <div>
      <h2>Questions</h2>
      <h3>Search Bar</h3>
        {/* Searchs questions */}
        <button onSubmit={handleSubmit}>SEARCH</button>
      <h3>QAList</h3>
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