import React, { useState } from 'react';
import './QuestionModal.css'

function AnswerModal ({show, hide}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

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