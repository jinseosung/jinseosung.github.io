import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const footerLinks = [
    { url: "https://github.com/jinseosung", icon: faGithub },
    { url: "https://www.linkedin.com/in/jinseo-sung/", icon: faLinkedin },
  ];
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <div>JINSEO SUNG</div>
          <span>© {year}, Réalisé par Jinseo Sung</span>
        </div>
        <SocialLinks links={footerLinks} />
      </div>
    </div>
  );
}
