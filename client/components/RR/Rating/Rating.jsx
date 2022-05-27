import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Bar from './Bar.jsx';

const Container = styled.div`
  display: grid;
  grid-template-rows: 100% 100% 100% 100% 100%;
`;

function Rating({ product_id }) {
  const productId = product_id || 37311;
  const [stars, updateStars] = useState([]);
  useEffect(() => {
    const options = {
      method: 'get',
      url: `/reviews/meta/?product_id=${productId}`,
    };
    axios(options)
      .then(({ data: { ratings } }) => {
        updateStars(Object.values(ratings));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {
        stars.length > 0 && (
        <Container>
          {
            stars.map((raingForStar, index) => <Bar rating={raingForStar} />)
          }
        </Container>
        )
      }
    </div>
  );
}
export default Rating;
