import React from 'react';
import AddReview from './review/addreview/AddReview.jsx';

function Reviews({ id, reviews, reviewsMeta, stateHandler }) {
  // Add Review
  if (reviews === undefined || reviewsMeta === undefined || id === undefined) {
    return null;
  }
  function handleAddReview(data) {
    console.log(data);
  }
  const chars = reviewsMeta.characteristics;
  return (
    <div>
      {
        chars && <AddReview handleSubmit={handleAddReview} id={id} chars={chars} />
      }
    </div>
  )
}
export default Reviews;