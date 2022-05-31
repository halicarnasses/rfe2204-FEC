import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './css/ImageGallery.css'

function ImageGallery(props) {

  const [mainImg, setMain] = useState("")
  const [currNav, setCurrNav] = useState(0)
  const [navView, setNavView] = useState([0,3])

  useEffect(() => {
    setMain(props.currStyle[0].thumbnail_url)
    setNavView([0,3])
  }, [props])

  return <div className="carousel">
    <div className="carousel__nav">
    {navView[0] !== 0 ? <button className="arrowbutton" onClick={() => {
      setNavView([navView[0] - 1, navView[1] - 1])
    }}><i className="arrow left"></i></button> : <button className="arrowbutton" style={{"cursor":"default"}}><i style={{border:"solid transparent",
      "borderWidth": "0 3px 3px 0",
      display: "inline-block",
      padding: "3px"}} className="arrow left" ></i></button>}
      {props.currStyle.map((val, i) => {
        console.log('whats currStyle: ' + props.currStyle)
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
    {navView[1] !== props.currStyle.length - 1 ? <button className="arrowbutton" onClick={() => {
      setNavView([navView[0] + 1, navView[1] + 1])
    }}><i className="arrow right"></i></button> : <button className="arrowbutton" style={{"cursor":"default"}}><i style={{border:"solid transparent",
    "borderWidth": "0 3px 3px 0",
    display: "inline-block",
    padding: "3px"}} className="arrow right" ></i></button>}
    </div>

    <div className="carousel__main">
      {currNav !== 0 ? <button className="arrowbutton" onClick={() => {
        if (currNav - 1 > 0) {
          console.log('clicked!', currNav - 1)

          setMain(props.currStyle[currNav - 1].thumbnail_url)
          setCurrNav(currNav - 1)
          if (currNav - 1 < navView[0]) {
            setNavView([navView[0] - 1, navView[1] - 1])
          }
        }
      }}>
        <i className="arrow left"></i>
      </button> : <button className="arrowbutton" style={{"cursor":"default"}}><i style={{border:"solid transparent",
      "borderWidth": "0 3px 3px 0",
      display: "inline-block",
      padding: "3px"}} className="arrow left" ></i></button>}
      {/* <button className="arrowbutton" onClick={() => {
        if (currNav - 1 > 0) {
          console.log('clicked!', currNav - 1)

          setMain(props.currStyle[currNav - 1].thumbnail_url)
          setCurrNav(currNav - 1)
          if (currNav - 1 < navView[0]) {
            setNavView([navView[0] - 1, navView[1] - 1])
          }
        }
      }}>
        <i className="arrow left"></i>
      </button> */}
      <div>

        <img className="main__image" src={mainImg}></img>
        <button className="fullscreen__button" onClick={()=>{
          props.setFullscreen({
            currStyle: props.currStyle,
            mainImg: mainImg,
            currNav: currNav,
            navView: navView,
          })
        }}><p className="pclass"><span className="full-screen"></span></p></button>
      </div>

        {currNav !== props.currStyle.length - 1 ? <button className="arrowbutton" onClick={() => {
        if (currNav + 1 < props.currStyle.length) {
          console.log('clicked!', currNav + 1)

          setMain(props.currStyle[currNav + 1].thumbnail_url)
          setCurrNav(currNav + 1)
          if (currNav + 1 > navView[1]) {
            setNavView([navView[0] + 1, navView[1] + 1])
          }
        }
      }}>
        <i className="arrow right"></i>
      </button> : <button className="arrowbutton" style={{"cursor":"default"}}><i style={{border:"solid transparent",
      "borderWidth": "0 3px 3px 0",
      display: "inline-block",
      padding: "3px"}} className="arrow left" ></i></button>}
      {/* <button className="arrowbutton" onClick={() => {
        if (currNav + 1 < props.currStyle.length) {
          console.log('clicked!', currNav + 1)

          setMain(props.currStyle[currNav + 1].thumbnail_url)
          setCurrNav(currNav + 1)
          if (currNav + 1 > navView[1]) {
            setNavView([navView[0] + 1, navView[1] + 1])
          }
        }
      }}>
        <i className="arrow right"></i>
      </button> */}
    </div>
  </div>
}

export default ImageGallery