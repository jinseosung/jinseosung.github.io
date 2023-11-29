import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        JINSEO SUNG
      </Link>
      <nav className="header__nav">
        <ul className="header__lists">
          <a className="header__list" href="#about">
            <li className="header__list">A propos</li>
          </a>
          <a className="header__list" href="#project">
            <li className="header__list">Projets</li>
          </a>
          <a className="header__list" href="#contact">
            <li className="header__list">Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
