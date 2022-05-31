import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
// require('dotenv').config();
const axios = require('axios')
import './css/ImageGallery.css'


function Fullscreen(props) {

  const [mainImg, setMain] = useState(props.data.mainImg)
  const [currNav, setCurrNav] = useState(props.data.currNav)
  const [navView, setNavView] = useState(props.data.navView)

  return <div className="fullscreen">
    {/* add in a navbar and a main view */}
    <div className="carousel">
    <div className="carousel__nav__fullscreen">
    {navView[0] !== 0 ? <button className="arrowbutton" onClick={() => {
      setNavView([navView[0] - 1, navView[1] - 1])
    }}><i className="arrow left"></i></button> : <button className="arrowbutton" style={{"cursor":"default"}}><i style={{border:"solid transparent",
      "border-width": "0 3px 3px 0",
      display: "inline-block",
      padding: "3px"}} className="arrow left" ></i></button>}
      {props.data.currStyle.map((val, i) => {
        if (!(i <= navView[1]) || !(i >= navView[0])) {
          return
        }
        return <button className="nav__item" key={i} onClick={() => {
          setCurrNav(i)
          setMain(val.thumbnail_url)
        }}>
          <img src={val.thumbnail_url}></img>
        </button>
      })}
    {navView[1] !== props.data.currStyle.length - 1 ? <button className="arrowbutton" onClick={() => {
      setNavView([navView[0] + 1, navView[1] + 1])
    }}><i className="arrow right"></i></button> : <button className="arrowbutton" style={{"cursor":"default"}}><i style={{border:"solid transparent",
    "border-width": "0 3px 3px 0",
    display: "inline-block",
    padding: "3px"}} className="arrow right" ></i></button>}
    </div>

    <div className="carousel__main__fullscreen">

      <button className="arrowbutton">
        <i className="arrow left"></i>
      </button>

      <div>

      <img className="main__image" src={mainImg}></img>
      <button className="fullscreen__button__fullscreen" onClick={()=>{
        props.setFullscreen()
      }}><p><span className="full-screen"></span></p></button>

      </div>
      <button className="arrowbutton">
        <i className="arrow right"></i>
      </button>
    </div>
  </div>
  </div>
}

export default Fullscreen
