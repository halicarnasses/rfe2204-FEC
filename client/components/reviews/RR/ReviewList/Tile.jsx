/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from './Image.jsx';
import Star from './Star.jsx';
// import Helpfullness from './HelpfullFeedback.jsx';

const TileContainer = styled.div`
`;

const ReviewDate = styled.div`
`;
const Summary = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: blue
  `;
const ReviewBody = styled.div`
`;
const Text = styled.div`
`;
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
`;
const Recommend = styled.div`
`;
const UsernameandPurchased = styled.div`
`;
const Response = styled.div`
`;
const Helpfullness = styled.div`
`;

function Tile({ item }) {
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
    const value = e.target.name;
    if (value === 'yes') {
      // update data
    } else if (value === 'no') {
    }
    setHelpful(false);
  }
  return (

    <TileContainer>
      <Star rating={item.rating} />

      <ReviewDate>
        <span>{`${m} ${d}, ${y}`}</span>
      </ReviewDate>

      <Summary>{ summary }</Summary>
      <ReviewBody>
        <Text>
          {body}
          {rest.length > 0 && <button type="button" onClick={extendBody}> show more </button>}
        </Text>
        {
          images.length > 0 && (
          <ImageContainer>
            {images.length > 0 ? images.map(image => <Image image={image} />) : null}
          </ImageContainer>
          )
        }
      </ReviewBody>

      <Recommend>
        {item.recommend ? <p>&#10004; I recommend this product</p> : null}
      </Recommend>

      <UsernameandPurchased>
        <p>{ item.reviewer_name }</p>
      </UsernameandPurchased>

      {item.response && <Response>{ item.response }</Response> }
      {
        helpful && (
          <Helpfullness>
            <p>was this review helpful?</p>
            <span><button name="yes" type="button" onClick={destroyHelpful}>Yes</button></span>
            <span><button name="no" type="button" onClick={destroyHelpful}>No</button></span>
          </Helpfullness>
        )
      }
    </TileContainer>
  );
}
export default Tile;
