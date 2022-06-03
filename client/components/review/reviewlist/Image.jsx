import React, { useState, useEffect } from 'react';

function Image({ image }) {
  const imageUrl = image.url;
  console.log('URL: ', imageUrl);
  const [isOpen, setIsOpen] = useState(false);
  function handleClick (e) {
    // on click, send it to modal
    // setIsOpen(true)
  }
  return <img onClick={handleClick} id={image.id} src={`${image.url}`}  />;
}
export default Image;