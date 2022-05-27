import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

const Img = styled.img`
  heigh: 100px;
  width: 100px;
  border-radius: 15px;

`;

function Image({ image }) {
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
