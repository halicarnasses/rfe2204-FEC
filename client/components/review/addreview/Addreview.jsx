import React, {useState, useEffect} from 'react';
import StarsList from '../Stars.jsx';
import Characterstics from './Charcterstics.jsx';
import Photos from './Photos.jsx'
import Body from './Body.jsx';


function AddReview(props) {
  // obj collects all input data, and is sent to handleAddReview
  let obj = {};
  // validation states
  const [ratingStarError, updateRatingStarError] = useState('');
  const [revBodyError, updateRevBodyError] = useState('');
  const [emailError, updateEmailError] = useState('');
  const [nickNameError, updatenickNameError] = useState('');
  const [imagesError, updateImagesError] = useState('');
  const [recommendationError, updateRecommendationError] = useState('');
  const [charsError, updateCharsError] = useState('');

  // end fo validation states

  const [rating, updateRating] = useState(0);
  const [ratingMeaning, updatRatingMeaning] = useState('none rated');
  const [photos, addPhoto] = useState(null);
  const [recommendation, updateRecommendation] = useState(null);


  const charChoices = {};
  Object.keys(props.chars).forEach((key) => {
    charChoices[key] = null;
  });
  console.log('Hello: Halicernasuss');
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
  // end of star------------  --------- --------  ------

  // character  ----  ------  ------  ----

  // end of character ----- ------- ------

  function handleClick(clickedStar) {
    updateRating(clickedStar);
    updatRatingMeaning(resultOfStar[clickedStar]);
  }

  function handleCharChoice(char, choice) {
    charChoices[char] = choice;
    console.log(charChoices);
  }
  function handleRecommendationChange(e) {
    e.preventDefault();
    const value = e.target.value;
    updateRecommendation(value);
    console.log('Recommended: ', value)
  }

  function handleReviewSubmit(e) {

    e.preventDefault();
    // if (rating === 0) {
    //   return alert('please do the rating first');
    // }
    // if () {
    //   return alert('please do the rating first');
    // }
  }

  console.log('Not sure ', ratingMeaning);
  return (
    <form>

      <div id="starrating">
        <p>rate this product *</p>
        <StarsList rating={rating} handleClick={handleClick}/>
        <p id="ratemeaning">{ratingMeaning}</p>
      </div>

      <div id="characterstic">
        <h3>rate the qualities of the product *</h3>
        {
          availableChars && availableChars.map((value, index) => <Characterstics key={index} value={value} handleCharChoice={handleCharChoice} />)
        }
      </div>

      <div>
        <p>Do you recomment this product*</p>
          <input type="radio" id="yes" name="recommendation" onClick={handleRecommendationChange} value={true} />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="recommendation" onClick={handleRecommendationChange} value={false} />
          <label htmlFor="no">No</label>
      </div>

      <div>
        <Photos />
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
