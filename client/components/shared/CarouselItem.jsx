import React, { useState } from "react";

function CarouselItem ({image}) {

  return (
      <img className="carousel-image" src={image} />
  )
};


export default CarouselItem;