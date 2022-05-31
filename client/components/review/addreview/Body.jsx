import React, {useState, useEffect} from 'react';

function Body() {
  const [counter, updateCounter] = useState(0);
  const [message, updaMessage] = useState('Minimum required characters left: [50]');
  const [reviewBody, setReviewBody] = useState('');

  console.log('<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>')
  function handleInputBodyChange(e) {
    const input = e.target.value;
    updateCounter(input.length);
    const charLeft = input.length < 50 ? `Minimum required characters left: [${50 - input.length }]` : '';
    updaMessage(charLeft);
  }

  return (
    <div>
        <h3>Enter</h3>
          <input required onChange={handleInputBodyChange} required minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" name="reviewbody" id="reviewbody" />
          <input type="submit" />
          <p>{message}</p>
      </div>
  )
}
export default Body;
