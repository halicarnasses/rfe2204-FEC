import React, { useState } from 'react';
import ModalAddReview from "./ModaAddReview.jsx";
import "./Modal.css";

function ModalMain ({handleSubmit, id, chars}) {
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
      <ModalAddReview  handleSubmit={handleSubmit} id={id} chars={chars} hidden={modalHidden} closeHandler={hideModal} props={props} />
      <button onClick={showModal}>Add Review</button>
    </div>
  );
}
export default ModalMain;
