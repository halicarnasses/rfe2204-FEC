import React, { useState } from 'react';

function Question({props}) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [helpfulAnswer, setHelpfulAnswer] = useState(false);
  const [helpfulQuestion, setHelpfulQuestion] = useState(false);
  const [reported, setReported] = useState(false);

  // Will be needed to add answer to question.
  const onChangeHandler = (event) => {
    const target = event.target;
    const value = target.value;
  };

  // To submit answer.
  const submitHandler = (event) => {
    event.preventDefault();
  };

  // DRY?
  const addAnswer = (event) => {
    alert('Write your answer here!');
  };


  const reportAnswer = (event) => {
    const target = event.target;
    const name = target.name;
    console.log(`REPORT ANSWER: ${answer}`);
    // setReported(!reported);
  };

  const markHelpful = (event) => {
    const target = event.target;
    const name = target.name;
    console.log(`MARK HELPFUL: ${name}`);
    // setHelpfulAnswer(!helpfulAnswer);
  };

  const enlargePhoto = (event) => {
    alert('Show photo fullscreen!');
  };


  return (
    <div  className="question-item">

      <h3>QUESTION: blah blah?</h3>
      <button name="helpful-question" onClick={markHelpful}>HELPFUL QUESTION</button>
      <button onClick={addAnswer}>ADD ANSWER</button>

      <h3>ANSWER: yada yada yada</h3>
      <h4>TIMESTAMP</h4>
      <button name="helpful-answer" onClick={markHelpful}>HELPFUL ANSWER</button>
      <button name="report-answer" onClick={reportAnswer}>REPORT ANSWER</button>
      <div>
        <h4>PHOTOS GO HERE</h4>
        <img
          className="answer-photo"
          src=""
          alt="image goes here"
          onClick={enlargePhoto}></img>
      </div>
    </div>
  );

}


export default Question;