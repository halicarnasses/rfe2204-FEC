import React from 'react';
import ReactDOM from 'react-dom';
function Modal(props) {
  if (!props.isOpen) {
    console.log('Yup')
    return <h1>Hello</h1>;
  }
  console.log('Nop')
  return ReactDOM.createPortal(<div>{props.imag}</div>, document.body);
}
export default Modal;
