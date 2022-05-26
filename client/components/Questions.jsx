import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionSearch from './questions/QuestionSearch.jsx';
import Question from "./questions/Question.jsx"
// import questionData from './questions/questions-sample.js'
import './questions/Questions.css';

function Questions({id, questionsData, stateHandler}) {

  const [productID, setProductID] = useState(id);
  const [questions, setQuestions] = useState(questionsData);
  const [qLimit, setQLimit] = useState(2);

  useEffect(() => {
    setQuestions(questionsData);
  }, [questionsData]);

  // Search
  const searchHandler = (filter) => {
    // Update question list based on filter.
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

  const addQuestion = () => {
    alert('Add you question here!');
  }

  const updateState = () => {
    stateHandler(37317);
  }

  if (questions) {
    return (

      <div className="questions-div">
        <h2>QUESTIONS</h2>
        {/* <QuestionSearch /> */}

        { questions.map((q, i) => {
          if ( i < qLimit) {
            return (
              <Question
                key={q.question_id}
                body={q.question_body}
                date={q.question_date}
                name={q.asker_name}
                helpfulness={q.question_helpfulness}
                reported={q.reported}
                answers={q.answers}/>
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