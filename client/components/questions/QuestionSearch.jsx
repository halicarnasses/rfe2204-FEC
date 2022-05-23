import React, { useState } from 'react';


function QuestionSearch({searchHandler}) {
  const [query, setQuery] = useState("");

  // Set the query to whatever is typed in search bar.
  const onChangeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    setQuery(value);
    // Add handler to search questions.
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add handler to search questions.
  }

  return (
    <div>
      <h3>Search Bar</h3>
      <input
        type="text"
        value={query}
        name="question-search"
        onChange={onChangeHandler}>
      </input>
        {/* Searchs questions */}
      <button onSubmit={handleSubmit}>SEARCH</button>
    </div>
  );

}


export default QuestionSearch;