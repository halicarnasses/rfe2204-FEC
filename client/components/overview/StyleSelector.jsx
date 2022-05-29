import React from 'react'

function StyleSelector({styleHandler, style, styles}) {

  const chunk = (array, size) => {
    return array.reduce((chunks, item, i) => {
      if (i % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  }

  const styleRows = chunk( styles? styles : [], 4);

  return (
    <div className="overview-style-selector">

      <div className="selector-header">
        <h5>STYLE > {style.name} </h5>
      </div>

      <div className="selector-body">
        {
          styleRows ? styleRows.map((row, i) => {
            return (
              <div key={i} className="selector-row">{
                row.map((col) => {
                  return (
                    <img
                      key={col.style_id}
                      className="selector-thumb"
                      src={col.photos[0].thumbnail_url}></img>
                  )
                })
              }</div>
            )
          }) : 0
        }
      </div>
    </div>
  )
}

export default StyleSelector