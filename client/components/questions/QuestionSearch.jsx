import React, { useState, useEffect  } from 'react';
import axios from 'axios';


function QuestionSearch({searchHandler}) {
  const [query, setQuery] = useState("");
  const [questionData, setQuestionData] = useState([]);

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


  useEffect(() => {
    axios.get(`/qa/questions/?product_id=${37311}`)
    .then((response) => {
      console.log('QUESTIONS', response.data);
      return setQuestionData(response.data.results);
    });
  }, [setQuestionData]);


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