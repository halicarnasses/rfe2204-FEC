import React, { useState } from 'react';

function QuestionSearch({searchHandler}) {
  const [query, setQuery] = useState("");

  // Set the query to whatever is typed in search bar.
  const onChangeHandler = (event) => {
    const target = event.target;
    const value = target.value;
    console.log(value);
    setQuery(value);
    // Add handler to search questions.
    searchHandler(value);
  };

  const searchQuestions = (event) => {
    event.preventDefault();
    console.log(`SEARCH FOR: ${query}`);
    searchHandler(query);
  }

  return (
    <div  className="question-search">
      <input
        type="text"
        value={query}
        name="question-search"
        onChange={onChangeHandler}
        placeholder="Have a question? Search for answers..." />

      <button onClick={searchQuestions}>SEARCH</button>
    </div>
  );

}

export default QuestionSearch;