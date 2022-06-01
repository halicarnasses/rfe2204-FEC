
import React from 'react';
import Carousel from '../shared/Carousel/Carousel.jsx';

function ImageGallery({slides}) {
  console.log(slides);

  return (
    <Carousel slides={slides} className={'carousel-div'}/>
  )

}

export default ImageGallery;
