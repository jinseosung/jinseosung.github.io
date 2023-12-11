import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavModal from "./NavModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrolled = scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="header">
      <Link className="header__link" to="/">
        JINSEO SUNG
      </Link>
      <nav className="header__nav">
        <ul className="header__lists">
          <li
            onClick={handleButtonClick}
            className={`header__list list-menu ${isScrolled && "scrolled"}`}
          >
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
