import React from 'react';
import ReactDOM from 'react-dom';
function Modal(props) {
  if (!props.isOpen) {
    return <h1>Hello</h1>;
  }
  return ReactDOM.createPortal(<div>{props.imag}</div>, document.body);
}
export default Modal;
