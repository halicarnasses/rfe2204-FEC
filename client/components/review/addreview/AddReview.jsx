import React, {useState, useEffect} from 'react';
import StarsList from '../Stars.jsx';
import Characterstics from './Charcterstics.jsx';
import Photos from './Photos.jsx'
import Body from './Body.jsx';

function AddReview(props) {
  // obj collects all input data, and is sent to handleAddReview
  let obj = {};
  obj.product_id  = props.id;
  obj.characteristics = {};
  const [data, updateData] = useState(obj);
  // end fo validation states
  const [invalid, setInvalid] = useState('');
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
  Object.keys(props.chars).forEach(key => {
    obj['characteristics'][props.chars[key]['id']] = 0;
  });
  const availableChars = Object.keys(props.chars);
  let mapping = {};
  for (let key in props.chars) {
    mapping[key] = props.chars[key]['id'];
  }
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
    updatRatingMeaning(resultOfStar[clickedStar]);
  }

  function handleSummarySubmit(e) {
    let prevData = data;
    prevData['summary'] = e.target.value;
    updateData(prevData);
    updateSummary(e.target.value);

  }
  function handleEmailSubmit(e) {
    // I think this is an error
    let prevData = data;
    prevData['email'] = e.target.value;
    updateData(prevData);
    updateEmail(e.target.value)
  }
  function handleCharChoice(char, choice) {
    charChoices[char] = choice;
    let prevData = data;
    prevData['characteristics'][mapping[char]] = Number(choice);
    updateData(prevData);
  }
  function handleNameInput(e) {
    let prevData = data;
    prevData['name'] = e.target.value;
    updateData(prevData);
    updateNickName(e.target.value)
  }
  function handleRecommendationChange(e) {
    let prevData = data;
    const input = e.target.value === 'true' ? true : false;
    prevData['recommend'] = input;
    updateData(prevData);
    updateRecommendation(e.target.value);
  }
  function handleBodySubmt(body) {
    let prevData = data;
    prevData['body'] = body;
    updateData(prevData);
    setBody(body);
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    setInvalid('');
    if (data.body === undefined || data.body.length < 50) {
      setInvalid('Please fill body upto 50 chars');
      return;
    }
    if (data.rating === 0) {
      setInvalid('Please rate this product');
      return;
    }
    if (data.recommend === null) {
      setInvalid('please recommend this product')
      return;
    }
    if (data.name === undefined || data.name.length < 2) {
      setInvalid('please fill your name')
      return;
    }
    if (data.email === undefined || data.email.length < 0) {
      setInvalid('please fill your email')
      return;
    }
    if (data.email.indexOf('@') === -1|| data.email.indexOf('.com') === -1) {
      setInvalid('please give your email correct format')
      return;
    }
    props.handleSubmit(data);
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

      {
        invalid && (
        <div id="invalidinput">
          {invalid}
        </div>
        )
      }
      <button onClick={handleReviewSubmit} >
        submit review
      </button>
    </form>
  )
}
export default AddReview;
