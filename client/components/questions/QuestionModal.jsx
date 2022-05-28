import React, { useState } from 'react';
import './QuestionModals.css'

function QuestionModal ({id, productName, show, hide, submitHandler}) {
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
    const fieldNames = ['Question Field', 'Nickname', 'Email'];
    let blankWarnings = [false, false, false];
    const state = [newQuestion, nickname, email];
    let blankString = '';

    for (let i in state) {
      if (state[i].length === 0) {
        blankWarnings[i] = true;
        blankString += `${fieldNames[i]}, `
      } else {
        blankWarnings[i] = false;
      }
    }

    if (blankString) {
      alert(`Please fill in: ${blankString}`);
    } else {
      console.log('data not blank');
      const data = {
        body: newQuestion,
        name: nickname,
        email: email,
        product_id: id
      };
      submitHandler(data);
    }

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
    <div hidden={!show}>
      <div className='modal-content'>

        <div className="modal-header">
          <h4>Add Your Question!</h4>
          <h5>About the {productName}</h5>
          <a className="modal-close onclick" onClick={hide}>X</a>
        </div>

        <form id="modal-form" onSubmit={submitForm}>
          <h6>Your Question</h6>
          <textarea maxLength={1000} name="question-input" value={newQuestion} rows="4" cols="40" placeholder="" onChange={changeHandler}></textarea>
          <h6>What is your nickname?</h6>
          <input maxLength={60} name="nickname-input" value={nickname} type="text" placeholder="Example: jackson11!" onChange={changeHandler}/>
          <p>For privacy reasons, do not use your full name or email</p>
          <h6>Your Email</h6>
          <input maxLength={60} name="email-input" value={email} type="text" placeholder="Example: jackson@email.com" onChange={changeHandler}/>
          <p>For authentication reasons, you will not be emailed</p>
          <button type="submit">SUBMIT QUESTION</button>
        </form>

      </div>
    </div>
  );
};

export default QuestionModal;