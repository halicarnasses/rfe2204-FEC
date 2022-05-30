import React, {useState, useEffect} from 'react';
import StarsList from '../Stars.jsx';

function AddReview({ productId, characterstics }) {
  const [rating, updateRating] = useState(0);

  function handleClick(clickedStar) {
    console.log('rating', rating)
    updateRating(clickedStar);
    console.log('rating AfetL ', rating)
  }
  console.log('Alternate universe')
  return (
    <div>
      <StarsList rating={3.8} handleClick={handleClick}/>
    </div>
  )
}
export default AddReview;
