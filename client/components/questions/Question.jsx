import React, { useState } from 'react';
import Answer from './Answer.jsx';

function Question({body, date, name, helpfulness, reported, answers}) {

  const [answerLimit, setALimit] = useState(2);
  const [allAnswers, setAllAnswers] = useState(false);
  const [answerKeys, setAnswerKeys] = useState(Object.keys(answers));
  console.log(answerKeys);

  const markHelpful = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    console.log(name);
  };

  const reportAnswer = () => {
    event.preventDefault();
    console.log('REPORT ANSWER');
  };

  const addAnswer = () => {
    event.preventDefault();
    alert('Add answer here!');
  };

  const showAll = () => {

  };

  return (
    <div  className="list-item">

      <div className="item-question">
        <p className="question-body">Q: {body}</p>
        <p className="question-info">
          Helpful?
          <a href="" onClick={markHelpful} name="helpful-question" className="onclick">Yes</a>
          {helpfulness} |
          <a href="" onClick={addAnswer} name="add-answer" className="onclick">Add Answer</a>
        </p>
      </div>

      <div className="item-answer">
        <div>
          <p>A: </p>
        </div>
        <div>
          {
            answerKeys.map((key) => (
              <Answer
                key={key}
                answer={answers[key]}
                helpfulHandler={markHelpful}
                reportHandler={reportAnswer}
              />
            ))
          }
        </div>
      </div>

    </div>
  );

}

export default Question;