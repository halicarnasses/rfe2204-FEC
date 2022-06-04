import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from "./questions/Question.jsx";
import QuestionModal from "./questions/QuestionModal.jsx";
import { GoSearch } from 'react-icons/go';


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

    const id = target.getAttribute('value');
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
    axios
      .post('/qa/questions', data)
      .then((response) => ( updateState() ))
      .catch((error) => ( console.log(error) ));
  };

  const addAnswer = (data) => {
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
      // testing                              // somethingSOmthing.sdomsdf@adsgo3333masdgomads.com
      const regex = new RegExp(value, 'g'); // /[a-zA-Z].[a-zA-Z]@[a-zA-Z0-9].[com, edu, org]/
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

      <QuestionModal id={productID} productName={productName} hidden={questionHidden} hide={hideQuestionModal} submitHandler={addQuestion}/>

      {/* Search Bar */}
      <div className="question-search">
        <input
          type="search"
          onChange={onChangeHandler}
          placeholder="Have a question? Search for answers..." />
          <GoSearch size={20}/>
      </div>

      <div className="questions-list">
        { questions ? questions.map((q, i) => {
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
          }) : null
        }
      </div>

      <div className="questions-actions">
        <button
          className="questions-more-btn onclick"
          hidden={questions.length <= 2 ? true : false}
          onClick={showMoreQuestions}>MORE ANSWERED QUESTIONS</button>
        <button
          className="questions-add-btn onclick"
          onClick={showQuestionModal}>ADD A QUESTION +</button>
      </div>
    </div>
  )

}

export default Questions;