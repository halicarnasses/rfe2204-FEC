import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from './review/addreview/AddReview.jsx';
import ReviewList from './review/reviewlist/ReviewList.jsx';
import Rating from './review/rating/Rating.jsx';
import ModalMain from './review/ModalMain.jsx';
import Sorting from './review/Sorting.jsx';
import ProducBd from './review/productbreakdown/ProductBd.jsx';
import Search from './review/keywordsearch/Search.jsx';
import filterBySearch from './filter.js'
import './review/Review.css'

function Reviews({ id, reviews, reviewsMeta, stateHandler }) {
  // Add Review
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
    console.log('DATA: ', data)
    setData(data);
  }
  function handleNextPage() {
    // console.log('The correct page: ', page)
    // setPage(page + 1);
  }

  // Search
  function handleSearch(input){
    if (input.length < 3) {
      console.log(input, list, filtedL)
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
    console.log('Hello,id: ', reviewId, value)
    if (value) {
      axios
          .put(`/reviews/${value}/helpful`)
          .then((response) => {
            stateHandler()
          })
          .catch((error) => ( console.log(error) ));
    }
  };
  // useEffect(() => {
  //   console.log('Filtered: ', filtedL)
  //   setFeedList(filtedL);
  //   // axios
  //   //       .get(`/reviews/?page=${page}&count=100&product_id=${id}&sort=${sortOptions}`)
  //   //       .then(({data}) => {
  //   //         console.log('new data: ', data)
  //   //         stateHandler();
  //   //       })
  //   //       .catch((err) => console.error('Nope: ', err))
  // }, [filtedL]);

  function handleFilter(star) {

    updateToggledStar(() => {
      const prevValue = toggledStar;
      prevValue[star] = !prevValue[star];
      return prevValue;
    });
    console.log(toggledStar);
  }
  const chars = reviewsMeta.characteristics;
  const ratings = reviewsMeta.ratings;
  return (
    <div>
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
