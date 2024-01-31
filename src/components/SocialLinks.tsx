import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type SocialLinksProps = {
  links: { url: string; icon: IconProp }[];
};

const SocialLinks: FunctionComponent<SocialLinksProps> = ({ links }) => {
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
};

export default SocialLinks;
