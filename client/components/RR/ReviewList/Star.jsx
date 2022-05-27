import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;
function Star({ rating }) {
  return (
    <Container>
      {
        [...Array(5)].map((star, i) => (
          rating > i ? <span className="star">&#9733;</span> : <span className="star">&#9734;</span>
        ))
      }
    </Container>
  );
}
export default Star;
