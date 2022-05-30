import React from 'react';

function StarMaker({ index, portion, handleClick }) {
  // console.log("Hello", handleClick)
  const grad = `url(#${index})`;
  const starId = `${index}star`;
  const theV = index;
  // console.log(grad)
  return (
    <svg onClick={() => handleClick(theV)} stroke="#ff9c5b" width="37px" height="37px" id="StarId">
      <defs>
        <linearGradient id={index}>
          <stop stopColor="gold" offset={portion} />
          <stop stopColor="grey" />
        </linearGradient>
      </defs>
      <path
        fill={grad}
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
        l11.547-1.2L16.026,0.6L20.388,10.918z"
      />
    </svg>
  );
}
export default StarMaker;