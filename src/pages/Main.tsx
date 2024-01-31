import { useEffect, useRef } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { annotate, annotationGroup } from "rough-notation";
import Shapes from "../components/Shapes";
import SocialLinks from "../components/SocialLinks";

const Main = () => {
  const mainLinks = [
    { url: "https://github.com/jinseosung", icon: faGithub },
    { url: "https://www.linkedin.com/in/jinseo-sung/", icon: faLinkedin },
    { url: "mailto:jinseosung15@gmail.com", icon: faEnvelope },
  ];

  const sp1 = useRef<HTMLSpanElement>(null);
  const sp2 = useRef<HTMLSpanElement>(null);
  const sp3 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const a1 = annotate(sp1.current as HTMLSpanElement, {
        type: "highlight",
        color: "#8685EF",
      });
      const a2 = annotate(sp2.current as HTMLSpanElement, {
        type: "underline",
        color: "#FF00FF",
        padding: 1,
        animationDuration: 500,
        iterations: 1,
      });
      const a3 = annotate(sp3.current as HTMLSpanElement, {
        type: "box",
        color: "#FF00FF",
        padding: 2,
      });

      const ag = annotationGroup([a1, a2, a3]);
      ag.show();
    }, 700);
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
        <SocialLinks links={mainLinks} />
      </div>
    </section>
  );
};

export default Main;
