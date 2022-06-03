import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from './review/addreview/AddReview.jsx';
import ReviewList from './review/reviewlist/ReviewList.jsx';
import Rating from './review/rating/Rating.jsx';
import ModalMain from './review/ModalMain.jsx';
import Sorting from './review/Sorting.jsx';
import ProducBd from './review/productbreakdown/ProductBd.jsx';
import Search from './review/keywordsearch/Search.jsx';
import filterBySearch from './review/filter.js'
import './css/reviews/Reviews.css'

function Reviews({ id, reviews, reviewsMeta, stateHandler }) {

  if (reviews === undefined || reviewsMeta === undefined || id === undefined) {
    return null;
  }
  const [data, setData] = useState({});
  const list = reviews.results;
  const [filtedL, setFilterdL] = useState(reviews.results);
  const [feedList, setFeedList] = useState(reviews.results);
  const [toggledStar, updateToggledStar] = useState({1: false, 2: false, 3: false, 4: false, 5: false});
  const [starIsToggle, updateStarIsToggled] = useState(false);
  const [page, setPage] = useState(1);
  const [sortOptions, setSortoptions] = useState('relevant');

  function handleAddReview(data) {
    console.log(data)
    axios.post('/reviews', data)
      .then(res => console.log('YaYYYYYYYY'))
      .catch(err => console.error('Wait'))
  }

  function handleNextPage() {
    // console.log('The correct page: ', page)
    // setPage(page + 1);
  }

  // Search
  function handleSearch(input){
    if (input.length < 3) {
      setFilterdL(list);
      return;
    }
    const newList = filterBySearch(input, list);
    setFilterdL(newList);
  }
  // End of Search

  function handleSortChange(value) {
    setSortoptions(value);
  }
  const markedHelpful = (value, reviewId) => {
    if (value) {
      axios
          .put(`/reviews/${value}/helpful`)
          .then((response) => {
            stateHandler()
          })
          .catch((error) => ( console.log(error) ));
    }
  };

  function handleFilter(star) {

    updateToggledStar(() => {
      const prevValue = toggledStar;
      prevValue[star] = !prevValue[star];
      return prevValue;
    });
  }
  const chars = reviewsMeta.characteristics;
  const ratings = reviewsMeta.ratings;
  return (
    <div id="reviews-div" className="reviews-div">
      {
        chars && (
          <div className="reviewsContainer">
            <div className="LeftPage">
              <div className="ratingcontainer">
                <Rating handleFilter={handleFilter} id={id} ratings={ratings} />
              </div>
              <div className="productIdContainer">
                <ProducBd chars={chars} />
              </div>
            </div>
            <div>
              <Search handleSearch={handleSearch} />
              <Sorting handleSortChange={handleSortChange} currentOption={sortOptions} />
              <div className="revieListAndAddReviewContainer">
                <ReviewList markedHelpful={markedHelpful} handleNextPage={handleNextPage} reviews={filtedL} />
                <ModalMain handleSubmit={handleAddReview} id={id} chars={chars} />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
export default Reviews;
