import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">JINSEO SUNG</Link>
      <nav className="header__nav">
        <ul className="header__lists">
            <li className="header__list">A propos</li>
            <li className="header__list">Projets</li>
            <li className="header__list">Contact</li>
        </ul>
      </nav>
    </div>
  );
}
