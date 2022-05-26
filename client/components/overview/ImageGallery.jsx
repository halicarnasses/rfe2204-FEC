import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function ImageGallery(props) {
  return <div>
    ---Image Gallery---
    <div>
      {/* {JSON.stringify(props.currStyle)} */}
      {props.currStyle.map((val, i) => {
        console.log('whats currStyle: ' + props.currStyle)
        return <img key={i} src={val.thumbnail_url}></img>
      })}
      {/* {props.styles.map((val, i) => {
        console.log(val)
        return <div key={i}>
          <div>
            style: {val.name}
          </div>
          {val.photos.map((image, i) => {
            return <img key={i} src={image.thumbnail_url}></img>
          })}
        </div>
      })} */}
    </div>
  </div>
}

export default ImageGallery