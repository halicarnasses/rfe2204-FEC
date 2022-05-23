import React, { useState, useEffect } from 'react';
import Question from "./Question.jsx"
function QuestionList({props}) {
  console.log(props);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(props)
  }, [props, setQuestions]);

  const clickHandler = (event) => {
    event.preventDefault();
  }

  if (questions !== undefined) {
    return (
      <div  className="question-list">
        <h3>Question List</h3>
        { questions.map((q) => (
          <Question key={q.question_id} props={q}/>
        ))
        }
      </div>
    );
  }

  return <div></div>

}


export default QuestionList;