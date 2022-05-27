import React from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  width: 100%;
  height: 20%;
  background-color: gray;
`;
const Inner = styled.div`
  width: 50%;
  height: 20%;
  background-color: green;
`;

function Bar({ rating }) {
  return (
    <div>
      <Outer>
        <Inner>

        </Inner>
      </Outer>
    </div>
  );
}
export default Bar;
