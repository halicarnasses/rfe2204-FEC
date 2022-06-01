import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from './review/addreview/AddReview.jsx';
import ReviewList from './review/reviewlist/ReviewList.jsx';
import Rating from './review/rating/Rating.jsx';
import ModalMain from './review/ModalMain.jsx';
import './review/Review.css'

function Reviews({ id, reviews, reviewsMeta, stateHandler }) {
  // Add Review
  if (reviews === undefined || reviewsMeta === undefined || id === undefined) {
    return null;
  }
  // const [markedHelpful, updateMarkedHelpful] = useState(null);
  const [list, setList] = useState(reviews.results);
  console.log(list)
  const [toggledStar, updateToggledStar] = useState({});
  const [page, setPage] = useState(1);
  const [sortOptions, setSortoptions] = useState('relevant');

  function handleAddReview(data) {
    console.log(data);
  }

  function handleNextPage() {
    console.log('The correct page: ', page)
    setPage(page + 1);
  }
  const markedHelpful = (value, reviewId) => {
    console.log('Hello,id: ', reviewId, value)
    // console.log('THe whole thing: ', reviewId)
    if (value) {
      axios
          .put(`/reviews/${value}/helpful`)
          .then((response) => {
            stateHandler()
          })
          .catch((error) => ( console.log(error) ));
    }
  };


  const chars = reviewsMeta.characteristics;
  const ratings = reviewsMeta.ratings;
  return (
    <div>
      {
        chars && (
          <div className="reviewsContainer">
            <Rating id={id} ratings={ratings} />
            <div className="revieListAndAddReviewContainer">
              <ReviewList markedHelpful={markedHelpful} handleNextPage={handleNextPage} reviews={list} />
              <ModalMain handleSubmit={handleAddReview} id={id} chars={chars} />
            </div>
          </div>
        )
      }
    </div>
  )
}
export default Reviews;
{/* <AddReview handleSubmit={handleAddReview} id={id} chars={chars} /> */}
