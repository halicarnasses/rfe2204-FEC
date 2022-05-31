import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from "./questions/Question.jsx"
import QuestionModal from "./questions/QuestionModal.jsx"
import QuestionSearch from "./questions/QuestionSearch.jsx"

import './css/questions/Questions.css';

function Questions({id, product, questionsData, stateHandler}) {

  const [productID, setProductID] = useState(id);
  const [questions, setQuestions] = useState([]);
  const [qLimit, setQLimit] = useState(2);
  const [currentProduct, setCurrentProduct] = useState(product);
  const [productName, setProductName] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const [questionHidden, setQuestionHidden] = useState(true);

  useEffect(() => {
    if (questionsData) {
      setQuestions(questionsData);
    }

    if (product) {
      setProductName(product.name);
    }
  }, [questionsData, product]);

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
      .post(`/qa/questions/${data.question_id}/answers`, data)
      .then((response) => ( updateState() ))
      .catch((error) => ( console.log(error) ));
  };

  const showQuestionModal = (event) => {
    event.preventDefault();
    setQuestionHidden(false);
  };

  const hideQuestionModal = (event) => {
    event.preventDefault();
    setQuestionHidden(true);
  };

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

  // Set the query to whatever is typed in search bar.
  const onChangeHandler = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    if (value && value.length >= 3) {
      let results = [];
      const regex = new RegExp(value, 'g');
      for (let q of questions) {
        const body = q.question_body.toLowerCase();
        let matchArr = [...body.matchAll(regex)];
        if (matchArr.length > 0) {
          results.push(q);
        }
      }
      if (results.length > 0) {
        setQuestions(results);
      }
    } else {
      setQuestions(questionsData);
    }
  };


  return (
    <div className="questions-div">
      {/* {console.log('questions render', questionsData)} */}

      <h2>QUESTIONS</h2>
      <QuestionModal id={productID} productName={productName} hidden={questionHidden} hide={hideQuestionModal} submitHandler={addQuestion}/>

      {/* Search Bar */}
      <div  className="question-search">
      <input
        type="search"
        onChange={onChangeHandler}
        placeholder="Have a question? Search for answers..." />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="questions-list">
        { questions ? questions.map((q, i) => {
          // console.log(q);
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
          }) : <h6>no questions yet</h6>
        }
      </div>

      <button id="more-questions-btn" name="more-questions"
        hidden={questions.length <= 2 ? true : false}
        onClick={showMoreQuestions}>MORE ANSWERED QUESTIONS</button>
      <button onClick={showQuestionModal}>ADD A QUESTION +</button>

    </div>
  )

}

export default Questions;