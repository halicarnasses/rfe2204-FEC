import React, { useState } from 'react';
import Question from "./Question.jsx"
function QuestionList() {
  const [questions, setQuery] = useState([]);

  const clickHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div  className="question-list">
      <h3>Question List</h3>
      <Question />
    </div>
  );

}


export default QuestionList;