import React, {useState, useEffect} from 'react';

function Body({ handleBodySubmt }) {
  const [counter, updateCounter] = useState(0);
  const [charLeft, updatCharLeft] = useState(50);

  const message = `Minimum required characters left: [${charLeft}]`;

  // console.log('<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>')
  function handleInputBodyChange(e) {

    e.preventDefault();
    console.log('Hello Body')
    const input = e.target.value;
    if (input.length > 50) return null;
    updatCharLeft(50 - input.length)
  }
  function handleSubmit(e) {
    handleBodySubmt(e.target.value);
  }

  return (
    <div>
        <h3>Whats your opinion about the product</h3>
          <input onChange={handleInputBodyChange} onSubmit={handleSubmit} required minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" name="reviewbody" id="reviewbody" />
          <p>{message}</p>
      </div>
  )
}
export default Body;
