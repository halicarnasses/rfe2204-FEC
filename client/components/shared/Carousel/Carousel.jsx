import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarouselItem from "./CarouselItem.jsx";
import "./Carousel.css";

const Carousel = ({ slides, className }) => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    if(slides) {
      setImages(slides);
      setCurrentImage(slides[current]);
    }
  }, [slides, current]);

  const length = slides ? slides.length : 0;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const updateCurrentImage = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    console.log(name)
    setCurrent(name);
  };

  return (
    <div className={className}>

      <div className="carousel-slide-content">

        <FaChevronLeft
          className="carousel-left-arrow"
          onClick={prevSlide}
        />

        {
          currentImage ? <img className="carousel-image" src={currentImage.url} /> : null
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
            return (
              <img
                key={index}
                src={slide.thumbnail_url}
                className="carousel-indicator"
                name={index}
                onClick={updateCurrentImage}/>
            )
          }) : null
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
