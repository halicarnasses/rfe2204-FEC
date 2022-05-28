import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from "./questions/Question.jsx"
import QuestionModal from "./questions/QuestionModal.jsx"
import QuestionSearch from "./questions/QuestionSearch.jsx"

import './questions/Questions.css';

function Questions({id, product, questionsData, stateHandler}) {
  console.log('questions first', questionsData);
  const [productID, setProductID] = useState(id);
  const [questions, setQuestions] = useState(questionsData);
  const [qLimit, setQLimit] = useState(2);
  const [questionModal, setQuestionModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(product);
  const [productName, setProductName] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([])

  console.log(questions? true : false, questions);

  useEffect(() => {
    console.log('questions mount');
    // if (questions && questions.length <= 2 ) {
    //   document.getElementById('more-questions-btn').classList.toggle('questions-hide-button');
    // }
    // if (product) {
    //   setCurrentProduct(product);
    //   setProductName(product.name);
    // }
    // if (filteredQuestions && filteredQuestions.length > 0) {
    //   console.log('update list with fitlered');
    // }
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
      .post(`/qa/questions/${data.question_id}/answers`, data)
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

  const searchQuestions = (query) => {
    console.log('Searching for', query.length, query);
    let results = [];
    const regex = new RegExp(query, 'g');

    for (let q of questions) {
      const body = q.question_body;
      let matchArr = [...body.matchAll(regex)];
      if (matchArr.length > 0) {
        results.push(q);
      }
    }
    console.log(results);
    setFilteredQuestions(results);

    // if (filteredQuestions.length > 0) {
    //   console.log('found questions');
    //   console.log(filteredQuestions);
    //   // setQuestions(filteredQuestions);
    // }
    // console.log(questions);

  };

  return (
    <div className="questions-div">

      <h2>QUESTIONS</h2>
      <QuestionModal id={productID} productName={productName} show={questionModal} hide={hideQuestionModal} submitHandler={addQuestion}/>
      <QuestionSearch searchHandler={searchQuestions}/>
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
        onClick={showMoreQuestions}>MORE ANSWERED QUESTIONS</button>
      <button onClick={showQuestionModal}>ADD A QUESTION +</button>

    </div>
  )

}

export default Questions;