import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarouselItem from "./CarouselItem.jsx";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  console.log('Carousel', slides);

  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    setImages(slides);
  }, [slides]);

  const length = slides ? slides.length : 0;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="carousel-div">

      <div className="carousel-slide-content">
        <FaChevronLeft
          className="carousel-left-arrow"
          onClick={prevSlide}
        />

        {
          images ? images.map((slide, index) => {
            return (
              <div key={index}>
                { index === current ? <CarouselItem image={slide.thumbnail_url} /> : <></>}
              </div>
            );
          }) : 0
        }

        <FaChevronRight
          className="carousel-right-arrow"
          onClick={nextSlide}
        />
      </div>

      <div className="carousel-indicator-div">

        <FaChevronLeft
          className="indicator-left-arrow"
          onClick={prevSlide}
        />
        {
          images ? images.map((slide, index) => {
            return <img key={index} src={slide.thumbnail_url} className="carousel-indicator" />
          }) : 0
        }
        <FaChevronRight
          className="indicator-right-arrow"
          onClick={nextSlide}
        />

      </div>
    </div>
  );

};

export default Carousel;
