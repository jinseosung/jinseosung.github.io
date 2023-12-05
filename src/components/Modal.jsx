import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Carousel from "./Carousel";

export default function Modal({
  isOpen,
  setIsOpen,
  projects,
  projectIndex,
  setProjectIndex,
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const project = projects[projectIndex];
  const nodeRef = useRef(null);

  const handleButtonClick = (e) => {
    const className = e.target.className;
    setImageIndex(0);

    if (className === "modal__prev") {
      setProjectIndex(
        projectIndex === 0 ? projects.length - 1 : projectIndex - 1
      );
    } else if (className === "modal__next") {
      setProjectIndex(
        projectIndex + 1 === projects.length ? 0 : projectIndex + 1
      );
    }
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div ref={nodeRef} className="modal">
        <div className="modal__wrapper">
          <div className="modal__top">
            <h4 className="modal__title">{project.title}</h4>
            <FontAwesomeIcon
              onClick={() => {
                setIsOpen(!isOpen);
                setImageIndex(0);
              }}
              className="modal__icon"
              icon={faX}
            />
          </div>
          <div className="modal__main">
            <Carousel
              className="modal__carousel"
              project={project}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
            />
            <div className="modal__description">
              <div className="modal__icons">
                <Link to={project.url.github} target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link to={project.url.site} target="_blank">
                  <FontAwesomeIcon icon={faCode} />
                </Link>
              </div>
              <p>{project.description}</p>
              <ul className="modal__skills">
                {project.skills.map((skill, index) => (
                  <li key={index} className="modal__skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="modal__bottom">
            <div className="modal__prev" onClick={handleButtonClick}>
              {
                projects[
                  projectIndex === 0 ? projects.length - 1 : projectIndex - 1
                ].title
              }
            </div>
            <div className="modal__next" onClick={handleButtonClick}>
              {
                projects[
                  projectIndex + 1 === projects.length ? 0 : projectIndex + 1
                ].title
              }
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
