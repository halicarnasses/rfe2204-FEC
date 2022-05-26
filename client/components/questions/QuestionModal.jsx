import React, { useState } from 'react';
import './QuestionModal.css'

function QuestionModal ({show, hide}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <div className='modal-content'>
        <h1>Add Your Question!</h1>
        <button onClick={hide}>Close</button>
      </div>
    </div>
  );
};

export default QuestionModal;