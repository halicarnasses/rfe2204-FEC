import React, {useState, useEffect} from 'react';
import StarsList from '../Stars.jsx';
import Characterstics from './Charcterstics.jsx';
import Photos from './Photos.jsx'
import Body from './Body.jsx';

function AddReview(props) {
  // obj collects all input data, and is sent to handleAddReview
  let obj = {};
  obj.id = props.id;
  obj.characteristics = {};
  const [data, updateData] = useState(obj);
  // end fo validation states
  const [body, setBody] = useState('');
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
    let prevData = data;
    prevData['rating'] = clickedStar;
    updateData(prevData);
    updateRating(clickedStar);

    console.log('rawData:', data)
    updatRatingMeaning(resultOfStar[clickedStar]);
  }

  function handleSummarySubmit(e) {
    let prevData = data;
    prevData['summary'] = e.target.value;
    updateData(prevData);
    console.log('rawData:', data)
    updateSummary(e.target.value);

  }
  function handleEmailSubmit(e) {
    // I think this is an error
    let prevData = data;
    prevData['email'] = e.target.value;
    updateData(prevData);
    console.log('rawData:', data)
    updateEmail(e.target.value)
  }
  function handleCharChoice(char, choice) {
    charChoices[char] = choice;
    let prevData = data;
    prevData['characteristics'][char] = choice;
    updateData(prevData);
    console.log('rawData:', data)
    console.log('Choice: ', charChoices);
  }
  function handleNameInput(e) {
    let prevData = data;
    prevData['name'] = e.target.value;
    updateData(prevData);
    console.log('rawData:', data)
    updateNickName(e.target.value)
  }
  function handleRecommendationChange(e) {
    let prevData = data;
    prevData['recommend'] = e.target.value;
    updateData(prevData);
    console.log('rawData:', data)
    updateRecommendation(e.target.value);
  }
  function handleBodySubmt(body) {
    let prevData = data;
    prevData['body'] = e.target.value;
    updateData(prevData);
    console.log('rawData:', data)
    setBody(body);
  }

  function handleReviewSubmit(e) {
    e.preventDefault();

    console.log('RAW OBJECT: ', obj)
    if (body.length === 0) {
      alert('body can not be empty');
      return;
    }
    if (rating === 0) {
      alert('rating cannot be empty');
      return;
    }
    if (recommendation === null) {
      alert('recommendations cannot empty');
      return;
    }
    if (email.length === 0) {
      alert('email cannot be empty');
      return;
    }
    if (nickName.length === 0) {
      alert('nickname cannot be empty');
      return;
    }
    for (let key in charChoices) {
      if (charChoices[key] === null) {
        alert('give ' + key + ' a rating')
        return;
      }
    }
    handleAddReview(data);
  }
  return (
    <form>
      <div className="reviewnickname">
        <h3>Enter Name*</h3>
        <input onChange={handleNameInput} required minLength="2" maxLength="50" placeholder="Enter name" name="reviewername" id="reviewername" />
      </div>

      <div id="starrating">
        <h3>rate this product*</h3>
        <StarsList compId="review" rating={rating} handleClick={handleClick} />
        <p id="ratemeaning">{ratingMeaning}</p>
      </div>

      <div className="email">
        <h3>Enter email</h3>
        <input onChange={handleEmailSubmit} type="email" required placeholder="Enter email" name="revieweremail" id="revieweremail" />
      </div>

      <div id="characterstic">
        <h3>rate the qualities of the product *</h3>
        {
          availableChars && availableChars.map((value, index) => <Characterstics key={index} value={value} handleCharChoice={handleCharChoice} />)
        }
      </div>

      <div>
        <p>Do you recommend this product*</p>
          <input type="radio" id="yesrecommend" name="recommendation" value={true} onChange={handleRecommendationChange} value={true} />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="norecommend" name="recommendation" value={false} onChange={handleRecommendationChange} value={false} />
          <label htmlFor="no">No</label>
      </div>

      <div>
        <Photos />
      </div>

      <div className="reviewsummaryentry">
        <input onChange={handleSummarySubmit} maxLength="60" placeholder="Briefly summarize" name="reviewsummary" id="reviewsummaery" />
      </div>

      <Body handleBodySubmt={handleBodySubmt} />

      <div>

      </div>
      <button onClick={handleReviewSubmit} >
        submit review
      </button>
    </form>
  )
}
export default AddReview;
