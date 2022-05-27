import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import AnswerModal from "./AnswerModal.jsx"

function Question({id, body, date, name, helpfulness, reported, answers, helpfulHandler, reportHandler, submitHandler}) {

  const [answerLimit, setAnswerLimit] = useState(2);
  const [answerKeys, setAnswerKeys] = useState([]);
  const [answerModal, setAnswerModal] = useState(false);

  useEffect(() => {
    setAnswerKeys(Object.keys(answers));
  }, []);

  const showMoreAnswers = (event) => {
    event.preventDefault();
    const target = event.target;
    target.classList.toggle('questions-hide-button')
    setAnswerLimit(answerKeys.length);
  };

  const showAnswerModal = (event) => {
    event.preventDefault();
    const target = event.target;
    const id = target.getAttribute('value');
    console.log('ADD ANSWER TO', id);
    setAnswerModal(true);
  };

  const hideAnswerModal = (event) => {
    event.preventDefault();
    setAnswerModal(false);
  };

  return (
    <div  className="list-item">
      <AnswerModal show={answerModal} hide={hideAnswerModal} submitHandler={submitHandler}/>

      <div className="item-question">
        <p className="question-body">Q: {body}</p>
        <p className="question-info">
          Helpful?
          <a value={id} href="" onClick={helpfulHandler} name="helpful-question" className="onclick">Yes</a>
          {helpfulness} |
          <a value={id} href="" onClick={showAnswerModal} name="add-answer" className="onclick">Add Answer</a>
        </p>
      </div>

      <div className="item-answer">
        <div>
          <p>A: </p>
        </div>
        <div>
          {
            answerKeys.map((key, i) => {
              console.log(key);
              if (i < answerLimit) {
                return (
                  <Answer
                    key={key}
                    question_id={id}
                    answer={answers[key]}
                    helpfulHandler={helpfulHandler}
                    reportHandler={reportHandler}
                  />
                )
              }
              if (i === answerLimit) {
                return (
                  <button className="more-answers-btn" name="more-answers"
                    onClick={showMoreAnswers}>Load More Answers
                  </button>
                )
              }
            })
          }
        </div>
      </div>

      {/* <button className="more-answers-btn" name="more-answers"
          onClick={showMoreAnswers}>Load More Answers
      </button> */}

    </div>
  );

}

export default Question;