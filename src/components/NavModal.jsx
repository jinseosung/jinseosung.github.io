import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function NavModal({ isOpen, handleButtonClick }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="header"
      unmountOnExit
    >
      <div ref={nodeRef} className="header__nav-sm">
        <Button onClick={handleButtonClick} className="header__icon">
          <FontAwesomeIcon icon={faXmark} />
        </Button>
        <nav className="header__nav">
          <ul className="header__lists">
            <a
              onClick={handleButtonClick}
              className="header__list"
              href="#main"
            >
              <li>Home</li>
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
            </a>
            <a
              onClick={handleButtonClick}
              className="header__list"
              href="#about"
            >
              <li>A propos</li>
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
            </a>
            <a
              onClick={handleButtonClick}
              className="header__list"
              href="#project"
            >
              <li>Projets</li>
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
            </a>
            <a
              onClick={handleButtonClick}
              className="header__list"
              href="#contact"
            >
              <li>Contact</li>
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
            </a>
          </ul>
        </nav>
      </div>
    </CSSTransition>
  );
}
