import { useState, useRef, useEffect } from "react";
import portrait from "../assets/portrait.png";
import Button from "../components/Button";
import Title from "../components/Title";
import CV from "../assets/CV_SUNG_Jinseo.pdf";

const About = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const refs = useRef<HTMLElement[]>([]);

  const getStyleForId = (id: number) => ({
    opacity: visibleElements.includes(id) ? 1 : 0,
    transform: visibleElements.includes(id)
      ? `translateY(0)`
      : `translateY(50%)`,
  });

  const skillsObj = {
    frontends: ["HTML", "SCSS", "Javascript", "React", "Typescript", "Nextjs"],
    backends: ["Nodejs", "Express", "API REST", "MongoDB", "Firebase"],
    outils: ["VSCode", "Git", "Figma"],
  };

  const renderSkills = (list: string[], type: string) => (
    <li className="about__skill">
      {list.map((el, index) => (
        <span key={index}>
          {el}
          <span className={`about__tag ${type}`}>{type}</span>
        </span>
      ))}
    </li>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = parseInt(
              (entry.target as HTMLElement).dataset.id!
            );
            setVisibleElements((prevVisibleElements) =>
              prevVisibleElements.includes(elementId)
                ? prevVisibleElements
                : [...prevVisibleElements, elementId]
            );
          }
        });
      },
      { threshold: 0.3 }
    );
    refs.current.forEach((ref) => {
      observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="about">
      <div className="about__wrapper">
        <div className="about__container">
          <div className="about__left">
            <Title prop={`À propos`} />
            <div
              ref={(el) => (refs.current[0] = el as HTMLDivElement)}
              className="about__description"
              data-id="0"
              style={getStyleForId(0)}
            >
              <p>
                Je suis développeuse front-end passionnée par la tech et la
                création de petites applications web.
              </p>
              <p>
                Après plusieurs années d'expérience dans le domaine du tourisme,
                j'ai décidé de me lancer en autodidacte dans le développement
                web pour résoudre les problèmes rencontrés moi-même au cours de
                mes expériences précédentes.
              </p>
              <p>
                Actuellement en recherche active d'opportunités pour mettre en
                pratique mes compétences, je continue à être en apprentissage de
                nouvelles technologies, notamment TypeScript et Next.js.
              </p>
            </div>
            <ul
              ref={(el) => {
                refs.current[1] = el as HTMLUListElement;
              }}
              className="about__skills"
              data-id="1"
              style={getStyleForId(1)}
            >
              {renderSkills(skillsObj.frontends, "frontend")}
              {renderSkills(skillsObj.backends, "backend")}
              {renderSkills(skillsObj.outils, "outil")}
            </ul>
          </div>
          <div className="about__img-container">
            <img src={portrait} alt="Portrait" />
          </div>
        </div>
        <Button
          className="about__btn"
          href={CV}
          children={`Télécharger mon CV`}
        />
      </div>
    </div>
  );
};

export default About;
