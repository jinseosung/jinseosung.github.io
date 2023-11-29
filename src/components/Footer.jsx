import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <div>JINSEO SUNG</div>
          <span>© {year}, Réalisé par Jinseo Sung</span>
        </div>
        <ul className="footer__links">
          <Link to="https://github.com/jinseosung" target="_blank">
            <li className="footer__link">
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </Link>
          <Link to="https://www.linkedin.com/in/jinseo-sung/" target="_black">
            <li className="footer__link">
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
