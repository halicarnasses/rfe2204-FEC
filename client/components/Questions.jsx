import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from "./questions/Question.jsx"
import QuestionModal from "./questions/QuestionModal.jsx"
import AnswerModal from "./questions/AnswerModal.jsx"

import './questions/Questions.css';

function Questions({id, questionsData, stateHandler}) {
  const [productID, setProductID] = useState(id);
  const [questions, setQuestions] = useState(questionsData);
  const [qLimit, setQLimit] = useState(2);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showAnswerModal, setShowAnswerModal] = useState(false);

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
    const id = target.getAttribute('value');
    if (name === 'helpful-question') {
      axios
        .put(`/qa/questions/${id}/helpful`)
        .then((response) => {
          stateHandler(productID);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (name === 'helpful-answer') {
      axios
        .put(`/qa/answers/${id}/helpful`)
        .then((response) => {
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

    if (name === 'report-question') {
      axios
      .put(`/qa/questions/${id}/report`)
      .then((response) => {
        stateHandler(productID);
      })
      .catch((error) => {
        console.log(error);
      });
    } else if (name === 'report-answer') {
      axios
      .put(`/qa/answers/${id}/report`)
      .then((response) => {
        stateHandler(productID);
      })
      .catch((error) => {
        console.log(error);
      });
    }

  };


  const addQuestion = (event) => {
    event.preventDefault();
    setShowQuestionModal(true);
  }

  const hideQuestionModal = (event) => {
    event.preventDefault();
    setShowQuestionModal(false);
  }

  const addAnswer = (event) => {
    event.preventDefault();
    console.log('ADD ANSWER');
    setShowAnswerModal(true);
  }

  const hideAnswerModal = (event) => {
    event.preventDefault();
    setShowAnswerModal(false);
  }



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
        <QuestionModal show={showQuestionModal} hide={hideQuestionModal}/>
        <AnswerModal show={showAnswerModal} hide={hideAnswerModal}/>
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
                modalHandler={addAnswer}
                />
              )
            }
          })
        }

        <button id="more-questions-btn" name="more-questions"
          onClick={showMoreQuestions}>MORE ANSWERED QUESTIONS</button>
        <button onClick={addQuestion}>ADD A QUESTION +</button>
      </div>
    )
  } else {
    return (
      <div>NO QUESTIONS!</div>
    );
  }

}

export default Questions;