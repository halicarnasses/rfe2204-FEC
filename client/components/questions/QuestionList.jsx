import React, { useState, useEffect } from 'react';
import Question from "./Question.jsx"

function QuestionList({props}) {
  console.log('LIST',props);

  const [questions, setQuestions] = useState(props);
  const [qLimit, setQLimit] = useState(2);

  // useEffect(() => {
  //   setQuestions(props)
  // }, [props, setQuestions]);

  const clickHandler = (event) => {
    const target = event.target;
    const name = target.name;
  }

  const showMoreQuestions = () => {
    let newLimit = qLimit;
    newLimit += 2;
    setQLimit(newLimit);
    // if questions.length < newLimit, hide more question button
    if (questions.length < newLimit) {
      document.getElementById('more-questions-btn').style.display = 'none';
    }
  };


  return (
    <div  className="question-list">
      <h3>Question List</h3>
      { questions.map((q, i) => {
        if ( i < qLimit) {
          return (
            <Question
              key={q.question_id}
              qBody={q.question_body}
              qDate={q.question_date}
              qName={q.asker_name}
              qHelpfulness={q.question_helpfulness}
              qReported={q.reported}
              qAnswers={q.answers}/>)
        }
      })}
      <button id="more-questions-btn" name="more-questions" onClick={showMoreQuestions}>MORE ANSWERED QUESTIONS</button>
      <button>ADD A QUESTION +</button>
    </div>
  );


}


export default QuestionList;