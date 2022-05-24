import React, { useState } from 'react';

function Question({qBody, qDate, qName, qHelpfulness, qReported, qAnswers}) {

  let answersArr = [];
  for (let answer in qAnswers) {
    answersArr.push(qAnswers[answer]);
  }

  const [body, setBody] = useState(qBody);
  const [date, setDate] = useState(qDate);
  const [name, setAsker] = useState(qName);
  const [helpfulness, setHelpfulness] = useState(qHelpfulness);
  const [reported, setReported] = useState(qReported);
  const [answers, setAnswers] = useState(answersArr);

  const updateState = (event) => {
    const target = event.target;
    const name = target.name;
    console.log(name);
  }

  // const reportAnswer = (event) => {
  //   const target = event.target;
  //   const name = target.name;
  //   console.log(name);
  // }


  // Need funcs:
  // questionHelpful
  // answerHelpful
  // reportAnswer
  // addAnswerModal

  const markHelpful = (event) => {
    const target = event.target;
    const id = target.id;

    // Set limit to one click per user
    // Add PUT request to update database

    if (id === 'helpful-question') {
      let newHelpfulness = helpfulness;
      newHelpfulness ++;
      setHelpfulness(newHelpfulness);
    } else if (id === 'helpful-answer') {
    }
  }

  const reportAnswer = () => {
    console.log('REPORT ANSWER');
  }

  const addAnswer = () => {
    alert('Add answer here!');
  }


  return (
    <div  className="list-item">

      <div className="item-question">
        <h5 className="question-body">Q: {body}</h5>
        <div className="question-info">
          <h6>Helpful?</h6>
          <h6 onClick={markHelpful} id="helpful-question">Yes {helpfulness}</h6>
          <h6>|</h6>
          <h6 onClick={addAnswer} name="add-answer">Add Answer</h6>
        </div>
      </div>

      <div className="item-answer">
        <h5 className="answer-body">A: {answers[0].body}</h5>
        <div className="answer-info">
          <h6>{answers[0].answerer_name}</h6>
          <h6>{answers[0].date}</h6>
          <h6>|</h6>
          <h6>Helpful?</h6>
          <h6 onClick={markHelpful} id="helpful-answer">Yes {answers[0].helpfulness}</h6>
          <h6>|</h6>
          <h6 onClick={reportAnswer}>Report</h6>
        </div>
      </div>

    </div>
  );

}


export default Question;