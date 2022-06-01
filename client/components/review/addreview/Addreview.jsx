import React, {useState, useEffect} from 'react';
import StarsList from '../Stars.jsx';
import Characterstics from './Charcterstics.jsx';
import Photos from './Photos.jsx'
import Body from './Body.jsx';

function AddReview(props) {
  // obj collects all input data, and is sent to handleAddReview
  let obj = {};
  console.log('Hello');
  // end fo validation states

  const [rating, updateRating] = useState(0);
  const [ratingMeaning, updatRatingMeaning] = useState('none rated');
  const [photos, addPhoto] = useState(null);
  const [recommendation, updateRecommendation] = useState(null);
  const [email, updateEmail] = useState('');
  const [summary, updateSummary] = useState('');
  const [nickName, updateNickName] = useState('');

  const charChoices = {};
  Object.keys(props.chars).forEach((key) => {
    charChoices[key] = null;
  });
  const availableChars = Object.keys(props.chars);
  // star ------------  --------- --------  ------
  // rating meaning
  const resultOfStar = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  }

  function handleClick(clickedStar) {
    updateRating(clickedStar);
    updatRatingMeaning(resultOfStar[clickedStar]);
    obj['ratings'] = clickedStar;
  }

  function handleSummarySubmit(e) {
    // I think this is an error
    console.log(e.target.value)
    updateSummary(e.target.value)
  }
  function handleEmailSubmit(e) {
    // I think this is an error
    console.log(e.target.value)
    updateEmail(e.target.value)
  }
  function handleCharChoice(char, choice) {
    charChoices[char] = choice;
    console.log('Choice: ', charChoices);
  }
  function handleNameInput(e) {
    console.log(e.target.value);
  }
  function handleRecommendationChange(e) {
    console.log('Hello from ')
    const value = e.target.value;
    updateRecommendation(value);
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    // Check blanks
      // if element is blank (from the states)
      // set= for that thing
      // return null
    console.log(e)
  }

  return (
    <form>
      <div className="reviewnickname">
        <h3>Enter Name*</h3>
        <input onSubmit={handleNameInput} required minLength="2" maxLength="50" placeholder="Enter name" name="reviewername" id="reviewername" />
        <input type="submit" />
      </div>

      <div id="starrating">
        <h3>rate this product*</h3>
        <StarsList compId="review" rating={rating} handleClick={handleClick}/>
        <p id="ratemeaning">{ratingMeaning}</p>
      </div>

      <div className="email">
        <h3>Enter email</h3>
        <input onSubmit={handleEmailSubmit} type="email" required placeholder="Enter email" name="revieweremail" id="revieweremail" />
        <input type="submit" />
      </div>

      <div id="characterstic">
        <h3>rate the qualities of the product *</h3>
        {
          availableChars && availableChars.map((value, index) => <Characterstics key={index} value={value} handleCharChoice={handleCharChoice} />)
        }
      </div>

      <div>
        <p>Do you recommend this product*</p>
          <input type="radio" id="yesrecommend" name="recommendation" value={true} onClick={handleRecommendationChange} value={true} />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="norecommend" name="recommendation" value={false} onClick={handleRecommendationChange} value={false} />
          <label htmlFor="no">No</label>
      </div>

      <div>
        <Photos />
      </div>

      <div className="reviewsummaryentry">
        <input onSubmit={handleSummarySubmit} maxLength="60" placeholder="Briefly summarize" name="reviewsummary" id="reviewsummaery" />
        <input type="submit" />
      </div>

      <Body />

      <div>

      </div>
      <button onClick={handleReviewSubmit} >
        submit review
      </button>
    </form>
  )
}
export default AddReview;
