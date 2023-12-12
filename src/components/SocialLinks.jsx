import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLinks({ links }) {
  return (
    <ul className="social__links">
      {links.map((link, index) => (
        <Link to={link.url} target="_blank" key={index}>
          <li className="social__link">
            <FontAwesomeIcon icon={link.icon} />
          </li>
        </Link>
      ))}
    </ul>
  );
}
