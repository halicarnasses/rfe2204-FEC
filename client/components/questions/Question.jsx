import React, { useState } from 'react';

function Question({qBody, qDate, qName, qHelpfulness, qReported, qAnswers}) {

  // We need to track and update answer helpfulness
  const qAnswerHelpfulness = {};
  for (let a in qAnswers) {
    // qAnswerHelp.push(qAnswers[a].helpfulness);
    qAnswerHelpfulness[a] = qAnswers[a].helpfulness;
  }
  console.log(qAnswerHelpfulness);

  const [body, setBody] = useState(qBody);
  const [date, setDate] = useState(qDate);
  const [name, setAsker] = useState(qName);
  const [helpfulness, setHelpfulness] = useState(qHelpfulness);
  const [reported, setReported] = useState(qReported);

  const [answers, setAnswers] = useState(qAnswers);
  const [answerKeys, setAnswerKeys] = useState(Object.keys(qAnswers));
  const [answerHelpfulness, setAnswerHelpfulness] = useState(qAnswerHelpfulness);
  const [answerLimit, setAnswerLimit] = useState(2);

  // const updateState = (event) => {
  //   const target = event.target;
  //   const name = target.name;
  //   console.log(name);
  // }

  const markHelpful = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;

    // Set limit to one click per user
    // Add PUT request to update database
    if (name === 'helpful-question') {
      let newHelpfulness = helpfulness;
      newHelpfulness ++;
      setHelpfulness(newHelpfulness);
    } else if (name === 'helpful-answer') {
      const id = target.id;
      let newHelp = answerHelpfulness;
      newHelp[id]++;
      setAnswerHelpfulness(newHelp);
    }
  }

  const reportAnswer = () => {
    event.preventDefault();
    console.log('REPORT ANSWER');
  }

  const addAnswer = () => {
    event.preventDefault();
    alert('Add answer here!');
  }

  return (
    <div  className="list-item">

      <div className="item-question">
        <p className="question-body">Q: {body}</p>
        <p className="question-info">
          Helpful?
          <a href="" onClick={markHelpful} name="helpful-question" className="onclick">Yes</a> {helpfulness} |
          <a href="" onClick={addAnswer} name="add-answer" className="onclick">Add Answer</a>
        </p>
      </div>

      <div className="item-answer">
        <div>
          <p>A: </p>
        </div>
        <div>
          {answerKeys.map((key, i) => {
            console.log(key);
            if (i < answerLimit) {
              return (
                <div key={key}>
                  <p className="answer-body">{answers[key].body}</p>
                  <div>
                    <p>
                      by {answers[key].answerer_name}, {answers[key].date} |
                      Helpful?
                      <a id={answers[key].id} href="" onClick={markHelpful} name="helpful-answer" className="onclick">Yes</a> {answerHelpfulness[key]}
                    </p>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>

    </div>
  );

}

export default Question;