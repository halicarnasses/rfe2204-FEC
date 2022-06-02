import React from 'react';
import Carousel from '../shared/Carousel/Carousel.jsx';


function ImageGallery({fullscreen, slides}) {

  return (
    <Carousel slides={slides} />
  )

}

export default ImageGallery;



//className={fullscreen ? 'carousel-div carousel-fullscreen' : 'carousel-div'}