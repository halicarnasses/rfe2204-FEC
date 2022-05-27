import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

function Helpfullness() {
  const [showHelpful, setShowHelpful] = useState(true);
  function destroy (e) {
    e.preventDefault();

  }
  return (
    <Container>
      <p>Was this review helpful?</p>
      <span><a onClick={destroy} href="put to number of helpfull">yes</a></span>
      <span><a onClick={destroy} href="put to number of helpfull">no</a></span>
    </Container>
  );
}
export default Helpfullness;
