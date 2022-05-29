import React, { useState } from 'react';
import Carousel from '../shared/Carousel.jsx';

function ImageGallery({images}) {
  // console.log(images);
  return (
    <div className="overview-gallery">
      <h3>GALLERY</h3>
      <Carousel slides={images ? images : []}/>
    </div>
  )

}

export default ImageGallery