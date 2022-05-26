import React, { useState } from 'react';
import Answer from './Answer.jsx';

function Question({body, date, name, helpfulness, reported, answers, requestHandler}) {

  const [answerLimit, setALimit] = useState(2);
  const [allAnswers, setAllAnswers] = useState(false);
  const [answerKeys, setAnswerKeys] = useState(Object.keys(answers));

  const markHelpful = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;

    if (name === 'helpful-question') {
      requestHandler('PUT', '/qa/questions/:question_id/helpful');
    } else if (name === 'helpful-answer') {
      requestHandler('PUT', '/qa/questions/:answer_id/helpful');
    }
  };

  const report = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;

    if (name === 'report-question') {
      requestHandler('PUT', '/qa/questions/:question_id/report');
    } else if (name === 'report-answer') {
      requestHandler('PUT', '/qa/answers/:answer_id/report');
    }
  };

  const addAnswer = () => {
    event.preventDefault();
    alert('Add answer here!');
  };

  const showMoreAnswers = () => {
    const newLimit = answerKeys.length;
    setALimit(newLimit);
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
            answerKeys.map((key, i) => {
              if (i < answerLimit) {
                return (
                  <Answer
                    key={key}
                    answer={answers[key]}
                    helpfulHandler={markHelpful}
                    reportHandler={report}
                  />
                )
              }
            })
          }
        </div>
      </div>

      <button id="more-answers-btn" name="more-answers"
          onClick={showMoreAnswers}>Load More Answers</button>

    </div>
  );

}

export default Question;