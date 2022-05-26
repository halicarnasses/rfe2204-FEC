import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from "./questions/Question.jsx"

import './questions/Questions.css';

function Questions({id, questionsData, stateHandler}) {
  console.log(questionsData);
  const [productID, setProductID] = useState(id);
  const [questions, setQuestions] = useState(questionsData);
  const [qLimit, setQLimit] = useState(2);

  useEffect(() => {
    setQuestions(questionsData);
  }, [questionsData]);

  // updates global state
  // change this name
  const updateState = () => {
    stateHandler(productID);
  }

  // Search bar


  // List functions
  const markHelpful = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    console.log(name);
    if (name === 'helpful-question') {
      // console.log(target.getAttribute('value'));
      const id = target.getAttribute('value');
      axios
        .put(`/qa/questions/${id}/helpful`)
        .then((response) => {
          console.log('PUT GOT', response.data);
          stateHandler(productID);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (name === 'helpful-answer') {
      const id = target.getAttribute('value');
      axios
        .put(`/qa/answers/${id}/helpful`)
        .then((response) => {
          console.log('PUT GOT', response.data);
          stateHandler(productID);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const report = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    console.log(name);

    // if (name === 'report-question') {
    //   requestHandler('PUT', '/qa/questions/:question_id/report');
    // } else if (name === 'report-answer') {
    //   requestHandler('PUT', '/qa/answers/:answer_id/report');
    // }
  };


  const addQuestion = () => {
    alert('Add you question here!');
  }

  const addAnswer = () => {
    event.preventDefault();
    alert('Add answer here!');
  };


  // Actions
  const showMoreQuestions = () => {
    let newLimit = qLimit;
    newLimit += 2;
    setQLimit(newLimit);
    // if questions.length < newLimit, hide more question button
    if (questions.length < newLimit) {
      document.getElementById('more-questions-btn').style.display = 'none';
    }
  };

  if (questions) {
    return (

      <div className="questions-div">
        <h2>QUESTIONS</h2>

        { questions.map((q, i) => {
          if ( i < qLimit) {
            return (
              <Question
                key={q.question_id}
                id={q.question_id}
                body={q.question_body}
                date={q.question_date}
                name={q.asker_name}
                helpfulness={q.question_helpfulness}
                reported={q.reported}
                answers={q.answers}
                helpfulHandler={markHelpful}
                reportHandler={report}
                answerHandler={addAnswer}
                />
              )
            }
          })
        }

        <button id="more-questions-btn" name="more-questions"
          onClick={showMoreQuestions}>MORE ANSWERED QUESTIONS</button>
        <button onClick={updateState}>ADD A QUESTION +</button>
      </div>
    )
  } else {
    return (
      <div>NO QUESTIONS!</div>
    );
  }

}

export default Questions;