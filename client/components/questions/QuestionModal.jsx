import React, { useState } from 'react';
import { GoX } from 'react-icons/go';

function QuestionModal ({id, productName,hidden, hide, submitHandler}) {
  const [newQuestion, setNewQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
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
      const data = {
        body: newQuestion,
        name: nickname,
        email: email,
        product_id: id
      };
      submitHandler(data);
      hide(event);
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
    <div hidden={hidden}>
      <div className='questions-modal'>

        {/* <i className="fa-solid fa-x onclick" onClick={hide}></i> */}
        <GoX className={"onclick"} onClick={hide} size={40}/>

        <div className="questions-modal-header">
          <h4>Add Your Question!</h4>
          <h5>About the {productName}</h5>
        </div>

        <form className="questions-modal-form" onSubmit={submitForm}>
          <h5>Your Question</h5>
          <textarea maxLength={1000} name="question-input" value={newQuestion} rows="4" cols="40" placeholder="" onChange={changeHandler}></textarea>
          <h5>What is your nickname?</h5>
          <input maxLength={60} name="nickname-input" value={nickname} type="text" placeholder="Example: jackson11!" onChange={changeHandler}/>
          <p>For privacy reasons, do not use your full name or email</p>
          <h5>Your Email</h5>
          <input maxLength={60} name="email-input" value={email} type="text" placeholder="Example: jackson@email.com" onChange={changeHandler}/>
          <p>For authentication reasons, you will not be emailed</p>
          <button type="submit" className="onclick">SUBMIT QUESTION</button>
        </form>

      </div>
    </div>
  );
};

export default QuestionModal;