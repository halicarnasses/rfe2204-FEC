import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarouselItem from "./CarouselItem.jsx";
import "./Carousel.css";

const Carousel = ({ slides, className }) => {

  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    if (slides) {
      setImages(slides);
      setCurrentImage(slides[current]);
      setLength(slides.length);
    }
  }, [slides, current]);


  const nextSlide = () => {
    setCurrent(current === length - 1 ? length - 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };

  const updateCurrentImage = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    console.log(target);
    setCurrent(name);
  };

  return (
    <div className={className}>
      <div className="carousel-slide-content">

        { current > 0 ?
          <FaChevronLeft className="carousel-left-arrow" onClick={prevSlide} size={25}/>
          : null
        }

        {
          currentImage ? <img className="carousel-image" src={currentImage.url} /> : null
        }

        { current >= 0 && current != length -1?
        <FaChevronRight className="carousel-right-arrow" onClick={nextSlide} size={25}/>
          : null
        }

        <div className="carousel-indicator-div">
          <FaChevronLeft
            className="indicator-left-arrow"
            onClick={prevSlide}
          />
          {
            images ? images.map((slide, index) => {
              console.log(currentImage.thumbnail_url === slide.thumbnail_url ? 'thumb' : null)
              return (
                <img
                  key={index}
                  src={slide.thumbnail_url}
                  className={slide.thumbnail_url === currentImage.thumbnail_url ? "selected-thumbnail carousel-indicator" : "carousel-indicator"}
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
    </div>
  );

};

export default Carousel;
