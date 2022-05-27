import React, { useState } from 'react';
import './QuestionModals.css'

function AnswerModal ({questionID, productName, questionBody, show, hide, submitHandler}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const [newAnswer, setNewAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    console.log('Verify Data!', newAnswer, nickname, email);
    // Use regex similar to:
    // newQuestion === /a-zA-Z?!./
    // nickname === /a-zA-Z0-9/
    // email === /[a-zA-Z0-9.]@a-zA-Z0-9].[com, edu, gov]/
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
      case 'question-input':
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
    <div className={showHideClassName}>
      <div className='modal-content'>

        <div className="modal-header">
          <h1>Submit Your Answer</h1>
          <h2>"{productName}: {questionBody}"</h2>
          <a className="modal-close onclick" onClick={hide}>X</a>
        </div>

        <form id="modal-form" onSubmit={submitForm}>
          <textarea name="question-input" value={newAnswer} rows="4" cols="40" placeholder="Your Answer" onChange={changeHandler}></textarea>
          <input name="nickname-input" value={nickname} type="text" placeholder="Your Nickname" onChange={changeHandler}/>
          <input name="email-input" value={email} type="text" placeholder="Your Email" onChange={changeHandler}/>
          <button type="submit">SUBMIT ANSWER</button>
        </form>

      </div>
    </div>
  );
};

export default AnswerModal;