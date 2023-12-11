import { useState } from "react";
import { Link } from "react-router-dom";
import NavModal from "./NavModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <Link className="header__link" to="/">
        JINSEO SUNG
      </Link>
      <nav className="header__nav">
        <ul className="header__lists">
          <li onClick={handleButtonClick} className="header__list list-menu">
            Menu
          </li>
          <a className="header__list" href="#about">
            <li>A propos</li>
          </a>
          <a className="header__list" href="#project">
            <li>Projets</li>
          </a>
          <a className="header__list" href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
      <NavModal isOpen={isOpen} handleButtonClick={handleButtonClick} />
    </div>
  );
}
