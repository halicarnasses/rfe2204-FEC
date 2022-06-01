import React, { useState, useEffect } from 'react';

function Image({ image }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick (e) {
    // on click, send it to modal
  }
  const imag = <img onClick={handleClick} id={image.id} height="60px" width="60px" src={`${image.url}`} alt="Hello" />;
  return imag;
}
export default Image;