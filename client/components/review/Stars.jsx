import React from 'react';
import StarMaker from './StarMaker.jsx';

function StarsList({ compId, rating, handleClick}) {

  const fullStar = Math.floor(rating);
  const empty = 5 - fullStar + 1;
  const fullPortion = `100%`;
  const zeroPortion = `0%`;
  const filledPortion = `${Math.floor((rating - fullStar) * 100)}%`;
  return (
    <div>
      {
        [...new Array(5)].map((star, i) => {
          const index = i + 1;
          const portion = i < fullStar ? fullPortion : i === fullStar ? filledPortion : zeroPortion;
          const id = i < fullStar ? 'full' : i === fullStar ? 'offset' : 'empty';
          return <StarMaker positionOfStar={i + 1} handleClick={handleClick} index={`${compId}${id}${index}`} portion={portion} key={i} />
        })
      }
    </div>
  )
}
export default StarsList;
