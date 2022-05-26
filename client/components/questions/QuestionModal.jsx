import React, { useState } from 'react';
import './QuestionModal.css'

function QuestionModal ({show, hide, submitHandler}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const [newQuestion, setNewQuestoin] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className={showHideClassName}>
      <div className='modal-content'>
        <h1>Add Your Question!</h1>
        <button onClick={hide}>Close</button>

        <form onSubmit={submitForm}>
          {/*

          Your Question: large text window allows up to 1000 chars
          What Is Your Nickname: Text input up to 60 chars Placeholder= "Example: jackson11!"
            Below line reads= "For privacy reasons, do not use your full name or email address"
          Your Email: text input up to 60 chars
            Below reads = "For authentication reasons, you will not be emailed"
          Submit Question Button
            When clicked, forms inputs are validated
            If not correct, form does not submit
            If not correct, message appears saying: You must enter the following
            Error occurs if:
              Fields are blank
              email is not in correct format */}

          <input type="text" placeholder="Your Question"></input>
          <input type="text" placeholder="Your Nickname"></input>
          <input type="text" placeholder="Your Email"></input>
          <button type="submit">SUBMIT QUESTION</button>
        </form>

      </div>
    </div>
  );
};

export default QuestionModal;