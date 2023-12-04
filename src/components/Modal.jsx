import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Modal({ isOpen, setIsOpen }) {
  return (
    <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
      <div className="modal">
        <div className="modal__wrapper">
          <div className="modal__top">
            <h4 className="modal__title">Title</h4>
            <FontAwesomeIcon
              onClick={() => setIsOpen(!isOpen)}
              className="modal__icon"
              icon={faX}
            />
          </div>
          <div className="modal__main">
            <div className="modal__carousel"></div>
            <div className="modal__description">
              <div className="modal__icons">
                <Link to="#">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link to="#">
                  <FontAwesomeIcon icon={faCode} />
                </Link>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus quis sed ratione provident, sint tempora, alias
                accusantium animi in soluta delectus laboriosam, vel dolorem
                ullam nemo hic et minima sit!
              </p>
              <ul className="modal__skills">
                <li className="modal__skill">skill</li>
              </ul>
            </div>
          </div>
          <div className="modal__bottom">
            <div className="modal__prev">
              prev project
            </div>
            <div className="modal__next">
              next project
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
