import React, { useState } from 'react';

function Question({props}) {
  console.log('q', props);
  const {answers, asker_name, question_body, question_date, question_helpfulness, question_id, reported} = props;

  console.log(answers);
  let answersArr = [];

  for (let answer in answers) {
    answersArr.push(answers[answer]);
  }

  const [qAnswers, setAnswers] = useState(answersArr);
  const [asker, setAsker] = useState(asker_name);
  const [qBody, setBody] = useState(question_body);
  const [qDate, setDate] = useState(question_date);
  const [qHelpfulness, setHelpfulness] = useState(question_helpfulness);
  const [qID, setID] = useState(question_id);
  const [qReported, setReported] = useState(reported);
  console.log(qAnswers);

  const updateState = (event) => {
    const target = event.target;
    const name = target.name;
    console.log(name);
  }

  const reportAnswer = (event) => {
    const target = event.target;
    const name = target.name;
    console.log(name);
  }

  return (
    <div  className="question-item">
      <h4>Question</h4>
      <div className="item-q">
        <h5>Q: {qBody}</h5>
        <h6>Helpful?</h6>
        <h6 onClick={updateState} name="yes">Yes {qHelpfulness}</h6>
        <h6>|</h6>
        <h6 onClick={updateState} name="add-answer">Add Answer</h6>
      </div>
      <div className="item-a">
        <h5>A: {qAnswers[0].body}</h5>
        <h6>{qAnswers[0].answerer_name}</h6>
        <h6>{qAnswers[0].date}</h6>
        <h6>|</h6>
        <h6>Helpful?</h6>
        <h6 onClick={updateState}>Yes {qAnswers[0].helpfulness}</h6>
        <h6>|</h6>
        <h6 onClick={reportAnswer}>Report</h6>
      </div>
    </div>
  );

}


export default Question;