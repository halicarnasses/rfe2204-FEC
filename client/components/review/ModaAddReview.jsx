import React, { useState } from 'react';
import AddReview from './addreview/AddReview.jsx';
import './Modal.css';

function ModalAddReview ({handleSubmit, id, chars, hidden, closeHandler, props}) {
  const [inputValue, setInputValue] = useState('');
  const changeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setInputValue(value);
  }

  return (
    <div hidden={hidden} className="modal">
      <button onClick={closeHandler} id="closemodal">X</button>
      <h1>Add Review</h1>
      <AddReview handleSubmit={handleSubmit} id={id} chars={chars} />
    </div>
  );
};

export default ModalAddReview;
// handleSubmit={handleSubmit} id={id} chars={chars} hidden={modalHidden} closeHandler={hideModal}