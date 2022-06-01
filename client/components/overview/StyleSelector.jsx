<<<<<<< HEAD
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './css/StyleSelector.css'

function StyleSelector(props) {
  // const [styleurl, setStyle] = useState(props.ProductStyle)

  return <>
    <div>---Style Selector---</div>
    <div>{props.styles.map((val, i) => {
      return <button style={{
        "borderRadius" : "50%",
        "border" : `solid ${val.name.split(' ')[1] || "grey"}`,
        "backgroundColor" : `${val.name.split(' ')[3] || "grey"}`,
        "borderWidth" : "thick",
        "padding" : "7px",
        "margin" : "5px"
      }} onClick={(e) => {
        props.setCurrStyle(i)
      }} key={i}></button>
    })}</div>
  </>
  //image stuff will be determined by the styles
=======
import React from 'react'
import {FaCheck} from 'react-icons/fa';

function StyleSelector({styleHandler, style, results}) {

  const chunk = (array, size) => {
    let selectedStyle = {};
    let unselectedStyles = [];

    for (let i in array) {
      if (array[i].style_id !== style.style_id) {
        unselectedStyles.push(array[i])
      }
    }

    unselectedStyles.unshift(style);

    return unselectedStyles.reduce((chunks, item, i) => {
      if (i % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);

  }

  const styleRows = chunk( results? results : [], 4);

  const clickHandler = (event) => {
    const target = event.target;
    const name = target.name;
    // console.log(results);
    for ( let result of results) {
      // console.log(name, result.style_id)
      if (parseInt(name) === result.style_id) {
        styleHandler(result);
      }
    }
  };

  return (
    <div className="overview-style-selector">

      <div className="selector-header">
        <h5>STYLE > {style.name} </h5>
      </div>

      <div className="selector-body">
        {
          styleRows.length > 1 ? styleRows.map((row, i) => {

            return (
              <div key={i} className="selector-row">{
                row.map((col) => {

                  let checkDiv = <></>

                  if ( col.style_id === style.style_id) {
                    checkDiv = <FaCheck className="thumb-checkmark" size={25}/>
                  }

                  return (
                    <div key={col.style_id} className="thumb-div">
                      <img
                        className="selector-thumb"
                        name={col.style_id}
                        onClick={clickHandler}
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
>>>>>>> f67d3baf0d536154fca5cb7554e4590dfcef3363
}

export default StyleSelector