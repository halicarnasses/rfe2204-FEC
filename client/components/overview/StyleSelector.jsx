import React from 'react'
import {FaCheck} from 'react-icons/fa';

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

                  let checkDiv = <></>
                  console.log(col.style_id, style.style_id);
                  if ( col.style_id === style.style_id) {
                    checkDiv = <FaCheck className="thumb-checkmark" size={25}/>
                  }

                  return (
                    <div key={col.style_id} className="thumb-div">
                      <img
                        className="selector-thumb"
                        name={col.style_id}
                        onClick={styleHandler}
                        src={col.photos[0].thumbnail_url}>
                      </img>
                      { checkDiv }
                    </div>
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