import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from "./questions/Question.jsx"
import QuestionModal from "./questions/QuestionModal.jsx"

import './questions/Questions.css';

function Questions({id, product, questionsData, stateHandler}) {

  const [productID, setProductID] = useState(id);
  const [questions, setQuestions] = useState([]);
  const [qLimit, setQLimit] = useState(2);
  const [questionModal, setQuestionModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(product);
  const [productName, setProductName] = useState('');

  useEffect(() => {
    if (questions && questions.length <= 2 ) {
      document.getElementById('more-questions-btn').classList.toggle('questions-hide-button');
    }
    if (product) {
      setCurrentProduct(product);
      setProductName(product.name);
    }

    setQuestions(questionsData);
    // setPName(product.name);
  }, [questionsData, product, questions]);

  // updates global state
  // change this name
  const updateState = () => {
    stateHandler(productID, 1, 100);
  }

  // Search bar
  // List functions
  const markHelpful = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;

    const id = target.getAttribute('value');
    if (name === 'helpful-question') {
      axios
        .put(`/qa/questions/${id}/helpful`)
        .then((response) => ( updateState() ))
        .catch((error) => ( console.log(error) ));
    } else if (name === 'helpful-answer') {
      axios
        .put(`/qa/answers/${id}/helpful`)
        .then((response) => ( updateState() ))
        .catch((error) => ( console.log(error) ));
    }
  };

  const report = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    console.log(name);

    const id = target.getAttribute('value');
    console.log('REPORTING', id);
    if (name === 'report-question') {
      axios
        .put(`/qa/questions/${id}/report`)
        .then((response) => ( updateState() ))
        .catch((error) => ( console.log(error) ));
    } else if (name === 'report-answer') {
      axios
        .put(`/qa/answers/${id}/report`)
        .then((response) => ( updateState() ))
        .catch((error) => ( console.log(error) ));
    }

  };

  const addQuestion = (data) => {
    console.log("ADD Q: ", data);
    axios
      .post('/qa/questions', data)
      .then((response) => ( updateState() ))
      .catch((error) => ( console.log(error) ));
  };

  const addAnswer = (data) => {
    console.log("ADD A: ", data);
    axios
      .post(`/qa/questions/${data.id}/answers`, data)
      .then((response) => ( updateState() ))
      .catch((error) => ( console.log(error) ));
  };

  const showQuestionModal = (event) => {
    event.preventDefault();
    setQuestionModal(true);
  };

  const hideQuestionModal = (event) => {
    event.preventDefault();
    setQuestionModal(false);
  };

  // Actions
  const showMoreQuestions = (event) => {
    const target = event.target;
    let newLimit = qLimit;
    newLimit += 2;
    setQLimit(newLimit);
    // if questions.length < newLimit, hide more question button
    if (questions.length <= newLimit) {
      target.classList.toggle('questions-hide-button');
    }
  };

  if (questions) {
    return (
      <div className="questions-div">

        <h2>QUESTIONS</h2>
        <QuestionModal id={productID} productName={productName} show={questionModal} hide={hideQuestionModal} submitHandler={addQuestion}/>

        <div className="questions-list">
          { questions.map((q, i) => {
            if (i < qLimit) {
              return (
                <Question
                  key={q.question_id}
                  productName={productName}
                  id={q.question_id}
                  body={q.question_body}
                  date={q.question_date}
                  name={q.asker_name}
                  helpfulness={q.question_helpfulness}
                  reported={q.reported}
                  answers={q.answers}
                  helpfulHandler={markHelpful}
                  reportHandler={report}
                  submitHandler={addAnswer}
                  />
                )
              }
            })
          }
        </div>

        <button id="more-questions-btn" name="more-questions"
          onClick={showMoreQuestions}>MORE ANSWERED QUESTIONS</button>
        <button onClick={showQuestionModal}>ADD A QUESTION +</button>

      </div>
    )
  } else {
    return (
      <div>NO QUESTIONS!</div>
    );
  }

}

export default Questions;