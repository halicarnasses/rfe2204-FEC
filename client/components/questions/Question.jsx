import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import AnswerModal from "./AnswerModal.jsx"

function Question({id, productName, body, date, name, helpfulness, reported, answers, helpfulHandler, reportHandler, submitHandler}) {

  let answersKeys = Object.keys(answers);

  const [answerLimit, setAnswerLimit] = useState(2);
  const [answerKeys, setAnswerKeys] = useState(answersKeys);
  const [answerHidden, setAnswerHidden] = useState(true);

   const showMoreAnswers = (event) => {
    event.preventDefault();
    const target = event.target;
    target.classList.toggle('questions-hide-button');
    setAnswerLimit(answerKeys.length);
  };

  const showAnswerModal = (event) => {
    event.preventDefault();
    const target = event.target;
    const id = target.getAttribute('value');
    console.log('ADD ANSWER TO', id);
    setAnswerHidden(false);
  };

  const hideAnswerModal = (event) => {
    event.preventDefault();
    setAnswerHidden(true);
  };
  return (
    <div  className="list-item">

      <AnswerModal
        questionID={id}
        productName={productName}
        questionBody={body}
        hidden={answerHidden}
        hide={hideAnswerModal}
        submitHandler={submitHandler}/>

      <div className="item-question">
        <p className="question-body">Q: {body}</p>
        <p className="question-actions">
          Helpful?
          <a href="" value={id} onClick={helpfulHandler} name="helpful-question" className="onclick">Yes</a>
          {helpfulness} |
          <a href="" value={id} onClick={showAnswerModal} name="add-answer" className="onclick">Add Answer</a>
        </p>
      </div>

      <div className="item-answer">

        <div>
          <p>A: </p>
        </div>

        <div className="answers-list">
          { answerKeys.map((key, i) => {
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
          <button hidden={answerKeys.length >= 2 ? false : true} className="more-answers-btn" name="more-answers"
              onClick={showMoreAnswers}>Load More Answers
          </button>
        </div>

      </div>

    </div>
  );

}

export default Question;