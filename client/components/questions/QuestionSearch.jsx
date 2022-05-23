import React, { useState } from 'react';


function QuestionSearch({searchHandler}) {
  const [query, setQuery] = useState("");

  // Set the query to whatever is typed in search bar.
  const onChangeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    setQuery(value);
    // Add handler to search questions.
    console.log(`SEARCH: ${query}`);
  };

  const searchQuestions = (event) => {
    event.preventDefault();
    console.log(`SEARCH FOR: ${query}`);
    // Add handler to search questions.
  }

  return (
    <div  className="question-search">
      <h3>Search</h3>
      <input
        type="text"
        value={query}
        name="question-search"
        onChange={onChangeHandler}>
      </input>
        {/* Searchs questions */}
      <button onClick={searchQuestions}>SEARCH</button>
    </div>
  );

}


export default QuestionSearch;