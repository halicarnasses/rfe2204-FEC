import React, { useState } from 'react';
import Answer from './Answer.jsx';

function Question({id, body, date, name, helpfulness, reported, answers, helpfulHandler, reportHandler, modalHandler}) {

  const [answerLimit, setAnswerLimit] = useState(2);
  const [answerKeys, setAnswerKeys] = useState(Object.keys(answers));

  const showMoreAnswers = (event) => {
    const target = event.target;
    target.classList.toggle('questions-hide-button')
    console.log(target.classList);
    setAnswerLimit(answerKeys.length);
  };

  return (
    <div  className="list-item">
      <div className="item-question">
        <p className="question-body">Q: {body}</p>
        <p className="question-info">
          Helpful?
          <a value={id} href="" onClick={helpfulHandler} name="helpful-question" className="onclick">Yes</a>
          {helpfulness} |
          <a href="" onClick={modalHandler} name="add-answer" className="onclick">Add Answer</a>
        </p>
      </div>

      <div className="item-answer">
        <div>
          <p>A: </p>
        </div>
        <div>
          {
            answerKeys.map((key, i) => {
              if (i < answerLimit) {
                return (
                  <Answer
                    key={key}
                    answer={answers[key]}
                    helpfulHandler={helpfulHandler}
                    reportHandler={reportHandler}
                  />
                )
              }
            })
          }
        </div>
      </div>

      <button className="more-answers-btn" name="more-answers"
          onClick={showMoreAnswers}>Load More Answers
      </button>

    </div>
  );

}

export default Question;