import React from 'react';

function Bar({ total, handleFilter, bar, index, id, label}) {
  const portion = Math.floor((Number(bar) / total) * 100);
  const idIndex = id + index;
  const svgId = `${idIndex}bar`;

  return (
    <div className="singleBar">
      <svg onClick={() => handleFilter(index)} name={index} id={svgId} width='95%' height='13px'>
        <g className="singleBarRectangles">
          <rect fill='gray' width="100%" height='25'></rect>;
          <rect fill='green' width={`${portion}%`} height='25'></rect>
        </g>
        {label && (
          <>
            <g className='markers'>
              <rect fill='red' x={`${portion}%`} y='10%' width='6' height='35'></rect>
            </g>
          </>
      )}
    </svg>
    </div>
  )
}
export default Bar;
