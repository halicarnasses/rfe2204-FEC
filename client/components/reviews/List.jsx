import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tile from './Tile.jsx';

// import data from '/Users/kedirzeinu/Documents/project2/rfe2204-FEC/mock.js';
// Get data using one of the three methods
// helpfull ness, ...
// when componenet mounts, take state from

// const myData = data.results;
function List({ pId }) {
  pId = pId || 37311
  const [list, setList] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [page, setCount] = useState(1);
  const [feedTile, setFeedTile] = useState([]);
  const [restList, setRestList] = useState([]);

  const count = 100;
  useEffect(() => {
    const options = {
      method: 'get',
      url: `/reviews/?page=${page}&count=${count}&sort=${sort}&product_id=${pId}`,
    };
    axios(options)
      .then(data => {
        setList(data.data.results);
        setFeedTile(data.data.results.slice(0, 2));
        setRestList(data.data.results.slice(2));
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  function handleNextList(e) {
    e.preventDefault();
    setFeedTile(feedTile.concat(restList.slice(0, 2)));
    setRestList(restList.slice(2));
  }

  return (<div>
    <ul>
      {
        feedTile.map(item => {
          return <Tile key={item.review_id} item={item}/>
        })
      }
    </ul>
    <button type="button" onClick={handleNextList}>show more</button>
  </div>)
}
export default List;
