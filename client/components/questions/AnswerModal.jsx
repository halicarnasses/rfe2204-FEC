import React, { useState } from 'react';
import { GoX } from 'react-icons/go';

function AnswerModal ({questionID, productName, questionBody, hidden, hide, submitHandler}) {
  // const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const [newAnswer, setNewAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

    const fieldNames = ['Answer Field', 'Nickname', 'Email'];
    let blankWarnings = [false, false, false];
    const state = [newAnswer, nickname, email];
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
        body: newAnswer,
        name: nickname,
        email: email,
        question_id: questionID
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
    <div hidden={hidden}>
      <div className='questions-modal'>

        {/* <i className="fa-solid fa-x onclick" onClick={hide}></i> */}
        <GoX className={"onclick"} onClick={hide} size={40}/>

        <div className="questions-modal-header">
          <h4>Submit Your Answer</h4>
          <h5>"{productName}: {questionBody}"</h5>
        </div>

        <form className="questions-modal-form" onSubmit={submitForm}>
          <h5>Your Answers</h5>
          <textarea maxLength={1000} name="answer-input" value={newAnswer} rows="4" cols="40" placeholder="Your Answer" onChange={changeHandler}></textarea>
          <h5>What is your nickname?</h5>
          <input maxLength={60} name="nickname-input" value={nickname} type="text" placeholder="Example: jack543!" onChange={changeHandler}/>
          <p>For privacy reasons, do not use your full name or email address</p>
          <h5>Your Email</h5>
          <input maxLength={60} name="email-input" value={email} type="text" placeholder="Example: jack@email.com" onChange={changeHandler}/>
          <p>For authentication reasons, you will not be emailed</p>
          <button type="submit">SUBMIT ANSWER</button>
        </form>

      </div>
    </div>
  );
};

export default AnswerModal;