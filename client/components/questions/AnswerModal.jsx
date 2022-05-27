import React, { useState } from 'react';
import './QuestionModals.css'

function AnswerModal ({id, show, hide, submitHandler}) {
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
      question_id: id
    };
    submitHandler(data);
  };

  return (
    <div className={showHideClassName}>
      <div className='modal-content'>
        <h1>Add Your Answer!</h1>
        <button onClick={hide}>Close</button>
      </div>
    </div>
  );
};

export default AnswerModal;