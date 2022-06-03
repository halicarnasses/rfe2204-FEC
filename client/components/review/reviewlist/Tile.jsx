/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Image from './Image.jsx';
import StarsList from '../Stars.jsx';
import '../../css/reviews/Reviews.css';

function Tile({ item, markedHelpful }) {
  const rating = item.rating;
  const id = item.review_id;
  const compId = `${id}tile`;
  const [body, setBody] = useState(item.body.slice(0, 250));
  const [rest, setRest] = useState(item.body.slice(250));
  const [helpful, setHelpful] = useState(true);
  const date = new Date(item.date);
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const m = month[date.getMonth() - 1] || '';
  const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString() || '';
  const y = date.getFullYear().toString() || '';
  const images = item.photos;
  const summary = item.summary.length > 60 ? `${item.summary.slice(0, 60)}...` : item.summary;
  function extendBody(e) {
    e.preventDefault();
    setBody(body + rest);
    setRest('');
  }

  function destroyHelpful(e) {
    e.preventDefault();
    const value = e.target.value;
    const reviewId = e.target.name;
    markedHelpful(reviewId, value);
    setHelpful(false);
  }
  function handleStarClick() {
    return null;
  }
  return (

    <div id={id} className="tile">
      <div className="reviewdateandname">
        <p>
          {item.reviewer_name}
        </p>
        <span>{`${m} ${d}, ${y}`}</span>
      </div>
      <StarsList compId={compId} rating={rating} handleClick={handleStarClick} />

      <div className="reviewsummary">
        <h2>{summary}</h2>
      </div>

      <div className="reviewbody">
          {body}
          {rest.length > 0 && <button type="button" onClick={extendBody}> show more </button>}
        </div>

        {
          images.length > 0 && (
          <div className="reviewimages">
            {images.length > 0 ? images.map((image) => <Image image={image} key={image.id} />) : null}
          </div>
          )
        }

      <div className="reviewrecommend">
        {item.recommend ? <p>&#10004; I recommend this product</p> : null}
      </div>
      {item.response && <div id="reponseforreview">{ item.response }</div> }
      {
        helpful && (
          <div className="reviewhelpfull" id={`${id}helpfull`}>
            <p>was this review helpful?</p>
            <span><button value={true} name={id} type="button" onClick={destroyHelpful}>Yes</button></span>
            <span><button value={false} name={id} type="button" onClick={destroyHelpful}>No</button></span>
          </div>
        )
      }
    </div>
  );
}
export default Tile;