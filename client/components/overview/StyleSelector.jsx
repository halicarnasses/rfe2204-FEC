import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function StyleSelector(props) {
  // const [styleurl, setStyle] = useState(props.ProductStyle)

  return <>
    <div>---Style Selector---</div>
    <div>{props.styles.map((val, i) => {
      return <button onClick={(e) => {
        props.setCurrStyle(i)
      }} key={i}>{val.name.split(' ')[1] + ' ' + val.name.split(' ')[3]}</button>
    })}</div>
  </>
  //image stuff will be determined by the styles
}

export default StyleSelector