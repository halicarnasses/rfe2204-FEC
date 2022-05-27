import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Rating({ product_id }) {
  const productId = product_id || 37311;
  const [stars, updateStars] = useState({});
  useEffect(() => {
    const options = {
      method: 'get',
      url: `/reviews/meta/?product_id=${productId}`,
    };
    axios(options)
      .then(({ data: { ratings } }) => {
        updateStars(ratings);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (<div>
    {}
  </div>)
}
export default Rating;
