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
}

export default StyleSelector