import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaExpandArrowsAlt } from "react-icons/fa";
import "./Carousel.css";
import "./CarouselFullscreen.css";

const Carousel = ({ slides, className }) => {

  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState({});
  const [fullscreen, setFullscreen] = useState(false);

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
    setCurrent(name);
  };

  const makeFullscreen = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = event.name;
    setFullscreen(!fullscreen);
  };

  return (
    <div className={fullscreen ? 'carousel-div-fullscreen' : 'carousel-div'}>
      {/* <div className="crousel-slide-content"> */}

        { current > 0 ?
          <FaChevronLeft className="carousel-left-arrow onclick" onClick={prevSlide} size={35}/>
          : null
        }

        {
          currentImage ?
            <div className={fullscreen ? "carousel-content-fullscreen" : "carousel-content"}>
              <img
                hidden={false}
                className={fullscreen? "carousel-image-fullscreen" : "carousel-image"}
                src={currentImage.url} />
              <FaExpandArrowsAlt onClick={makeFullscreen} className="carousel-fullscreen-btn onclick" size={25}/>
            </div>
            : null
        }

        { current >= 0 && current != length -1?
          <FaChevronRight className="carousel-right-arrow onclick" onClick={nextSlide} size={35}/>
            : null
        }

      <div className="carousel-indicator-div">
        { current > 0 ?
          <FaChevronLeft className="indicator-left-arrow onclick" onClick={prevSlide} size={20}/>
          : null
        }
        {
          images ? images.map((slide, index) => {
            return (
              <img
                key={index}
                src={slide.thumbnail_url}
                className={slide.thumbnail_url === currentImage.thumbnail_url ? "selected-thumbnail carousel-indicator onclick" : "carousel-indicator onclick"}
                name={index}
                onClick={updateCurrentImage}/>
              )
            })
          : null
        }
        { current >= 0 && current != length - 1?
          <FaChevronRight className="indicator-right-arrow onclick" onClick={nextSlide} size={20}/>
          : null
        }
      </div>

    </div>
  );

};

export default Carousel;
