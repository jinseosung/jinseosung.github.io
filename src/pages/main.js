import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { annotate, annotationGroup } from "rough-notation";
import Shapes from "../components/Shapes";

const Main = () => {
  const sp1 = useRef(null);
  const sp2 = useRef(null);
  const sp3 = useRef(null);

  useEffect(() => {
    const a1 = annotate(sp1.current, {
      type: "highlight",
      color: "#8685EF",
    });
    const a2 = annotate(sp2.current, {
      type: "underline",
      color: "#FF00FF",
      padding: 1,
    });
    const a3 = annotate(sp3.current, {
      type: "box",
      color: "#FF00FF",
      padding: 2,
    });

    const ag = annotationGroup([a1, a2, a3]);
    ag.show();
  }, []);

  return (
    <section id="main" className="main">
      <div className="main__wrapper">
        <Shapes />
        <h1 className="main__title">
          Bonjour !
          <br />
          Je suis Jinseo Sung
          <br />
          <span ref={sp1}>développeuse web</span>
        </h1>
        <span className="main__description">
          <span ref={sp2}>Passionnée par la </span>
          <span ref={sp3}>création web</span> 🚀
          <br />
          J'espère pouvoir développer toutes les belles choses. ✨
        </span>
        <ul className="main__links">
          <Link to="https://github.com/jinseosung" target="_blank">
            <li className="main__link">
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </Link>
          <Link to="https://www.linkedin.com/in/jinseo-sung/" target="_black">
            <li className="main__link">
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </Link>
          <Link to="mailto:jinseosung15@gmail.com" target="_black">
            <li className="main__link">
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
          </Link>
        </ul>
      </div>
      <Link></Link>
    </section>
  );
};

export default Main;
