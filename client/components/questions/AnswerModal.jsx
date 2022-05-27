import React, { useState } from 'react';
import './QuestionModals.css'

function AnswerModal ({questionID, productName, questionBody, show, hide, submitHandler}) {
  console.log('answershow', show);
  // const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const [newAnswer, setNewAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    console.log('Verify Data!', newAnswer, nickname, email);
    // Use regex similar to:
    // newQuestion === [a-xA-Z0-9.!?''""]+
    // nickname === [a-xA-Z0-9]+
    // email === [a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,3}
    const data = {
      body: newAnswer,
      name: nickname,
      email: email,
      question_id: questionID
    };

    submitHandler(data);
  };

  const changeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    let inputString = '';
    switch(name) {
      case 'answer-input':
        inputString  = target.value;
        setNewAnswer(inputString);
        break;
      case 'nickname-input':
        inputString  = target.value;
        setNickname(inputString);
        break;
      case 'email-input':
        inputString  = target.value;
        setEmail(inputString);
        break;
    }
  }

  return (
    <div hidden={!show}>
      <div className='modal-content'>

        <div className="modal-header">
          <h4>Submit Your Answer</h4>
          <h5>"{productName}: {questionBody}"</h5>
          <a className="modal-close onclick" onClick={hide}>X</a>
        </div>

        <form id="modal-form" onSubmit={submitForm}>
          <h6>Your Answers</h6>
          <textarea maxLength={1000} name="answer-input" value={newAnswer} rows="4" cols="40" placeholder="Your Answer" onChange={changeHandler}></textarea>
          <h6>What is your nickname?</h6>
          <input maxLength={60} name="nickname-input" value={nickname} type="text" placeholder="Example: jack543!" onChange={changeHandler}/>
          <p>For privacy reasons, do not use your full name or email address</p>
          <h6>Your Email</h6>
          <input maxLength={60} name="email-input" value={email} type="text" placeholder="Example: jack@email.com" onChange={changeHandler}/>
          <p>For authentication reasons, you will not be emailed</p>
          <button type="submit">SUBMIT ANSWER</button>
        </form>

      </div>
    </div>
  );
};

export default AnswerModal;