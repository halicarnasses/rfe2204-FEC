import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import Question from "./Question.jsx"
function QuestionList() {
  const [questions, setQuery] = useState([]);
  const [questionData, setQuestionData] = useState([]);

  const clickHandler = (event) => {
    event.preventDefault();
  }


  useEffect(() => {
    axios.get(`/qa/questions/?product_id=${37311}`)
    .then((response) => {
      console.log('QUESTIONS', response.data);
      return setQuestionData(response.data.results);
    });
  }, [setQuestionData]);



  return (
    <div  className="question-list">
      <h3>Question List</h3>
      <Question />
    </div>
  );

}


export default QuestionList;