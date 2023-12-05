import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

export default function Carousel({
  className,
  project,
  imageIndex,
  setImageIndex,
}) {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  const images = project.images;

  const handlePrevImg = () => {
    setInProp(true);
    imageIndex === 0
      ? setImageIndex(images.length - 1)
      : setImageIndex(imageIndex - 1);
  };

  const handleNextImg = () => {
    setInProp(true);
    images.length - 1 === imageIndex
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };

  const handleEntered = () => {
    setInProp(false);
  };

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel__image-container">
        <CSSTransition
          nodeRef={nodeRef}
          in={inProp}
          timeout={300}
          classNames="image"
          onEntered={handleEntered}
        >
          <img ref={nodeRef} src={images[imageIndex]} alt={project.title} />
        </CSSTransition>
      </div>
      {images.length !== 0 && (
        <>
          <FontAwesomeIcon
            onClick={handlePrevImg}
            className="carousel__icon icon-left"
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            onClick={handleNextImg}
            className="carousel__icon icon-right"
            icon={faChevronRight}
          />
        </>
      )}
    </div>
  );
}
