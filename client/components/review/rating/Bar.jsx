import React from 'react';

function Bar({ total, bar, index, id}) {
  const portion = Math.floor((Number(bar) / total) * 100);
  const idIndex = id + index;
  const svgId = `${idIndex}bar`;
  console.log('Hello', svgId)
  return (
    <div className="singleBar">
      <span>{index}</span>
      <svg id={svgId} width='95%' height='13px'>
        <g className="singleBarRectangles">
          <rect fill='gray' width="100%" height='25'></rect>;
          <rect fill='green' width={`${portion}%`} height='25'></rect>
        </g>
    </svg>
    </div>
  )
}
export default Bar;
