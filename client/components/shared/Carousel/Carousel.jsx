import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarouselItem from "./CarouselItem.jsx";
import "./Carousel.css";

<<<<<<< HEAD
const Carousel = ({ slides }) => {
  console.log(slides);
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current + 1);
=======
const Carousel = ({ slides, className }) => {

  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    setImages(slides);
  }, [slides]);

  const length = slides ? slides.length : 0;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
>>>>>>> f67d3baf0d536154fca5cb7554e4590dfcef3363
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
<<<<<<< HEAD
    console.log(current + 1);
  };

  return (
    <div className="carousel-div">

      <FaChevronLeft
        className="carousel-left-arrow"
        onClick={prevSlide}
      />

      { slides.map((slide, index) => {
        return (
          <div key={index}>
            {/* <h2>TEST</h2> */}
            { index === current ? <CarouselItem image={slide.image} /> : <></>}
          </div>
        );
      })}

      <FaChevronRight
        className="carousel-right-arrow"
        onClick={nextSlide}
      />
=======
  };

  return (
    <div className={className}>

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
>>>>>>> f67d3baf0d536154fca5cb7554e4590dfcef3363
    </div>
  );

};

export default Carousel;
