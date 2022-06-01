import React, { useState } from 'react';

function Modal ({hidden, closeHandler, props}) {

  const [inputValue, setInputValue] = useState('');

  const changeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setInputValue(value);
  }

  return (
    <div hidden={hidden} className="modal">
      <h1>MODAL!!</h1>
      <h4>{inputValue}</h4>
      <input type="text" maxLength={100} onChange={changeHandler} value={inputValue} />
      <button onClick={closeHandler}>CLOSE MODAL</button>
    </div>
  );
};

export default Modal;