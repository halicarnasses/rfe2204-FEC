import React, { useState } from 'react';
import './QuestionModal.css'

function QuestionModal ({id, show, hide, submitHandler}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const [newQuestion, setNewQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    console.log('Verify Data!', newQuestion, nickname, email);
    // Use regex similar to:
    // newQuestion === /a-zA-Z?!./
    // nickname === /a-zA-Z0-9/
    // email === /[a-zA-Z0-9.]@a-zA-Z0-9].[com, edu, gov]/
    const data = {
      body: newQuestion,
      name: nickname,
      email: email,
      product_id: id
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
        setNewQuestion(inputString);
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
          <h1>Add Your Question!</h1>
          <a className="modal-close onclick" onClick={hide}>X</a>
        </div>

        <form id="modal-form" onSubmit={submitForm}>
          <textarea name="question-input" value={newQuestion} rows="4" cols="40" placeholder="Your Question" onChange={changeHandler}></textarea>
          <input name="nickname-input" value={nickname} type="text" placeholder="Your Nickname" onChange={changeHandler}/>
          <input name="email-input" value={email} type="text" placeholder="Your Email" onChange={changeHandler}/>
          <button type="submit">SUBMIT QUESTION</button>
        </form>

      </div>
    </div>
  );
};

export default QuestionModal;