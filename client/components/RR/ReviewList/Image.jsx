import React, { useState, useEffect } from 'react';
import Modal from './Modal.jsx';
import styled from 'styled-components';

const Img = styled.img`
  heigh: 100px;
  width: 100px;
  border-radius: 15px;

`;

function Image({ image }) {
  const imag = <img src={`${image.url}`} alt="Hello" />;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Img
        src={`${image.url}`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      />
    </div>
  );
}
export default Image;
