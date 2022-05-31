import React, { useState } from 'react';
import Modal from "./Modal.jsx";
import "./Modal.css"
function ModalMain () {

  const [modalHidden, setModalHideen] = useState(true);
  const [props, setProps] = useState(props);

  const showModal = (event) => {
    event.preventDefault();
    setModalHideen(false);
  };

  const hideModal = (event) => {
    event.preventDefault();
    setModalHideen(true);
  }

  return (
    <div className="modal-container">
      <Modal hidden={modalHidden} closeHandler={hideModal} props={props} />
      <button onClick={showModal}>SHOW MODAL</button>
    </div>
  );
}

export default ModalMain;

