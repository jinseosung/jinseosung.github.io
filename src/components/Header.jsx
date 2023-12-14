import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavModal from "./NavModal";
import Button from "./Button";

export default function Header({ navIsOpen, setNavIsOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleButtonClick = () => {
    setNavIsOpen(!navIsOpen);
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
        <Button
          onClick={handleButtonClick}
          className={`header__menu ${isScrolled && "scrolled"}`}
          children={`Menu`}
        />
        <ul className="header__lists">
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
      <NavModal navIsOpen={navIsOpen} handleButtonClick={handleButtonClick} />
    </div>
  );
}
