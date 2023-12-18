import portrait from "../assets/portrait.png";
import Button from "../components/Button";
import Title from "../components/Title";

const About = () => {
  const skillsObj = {
    frontends: ["HTML", "SCSS", "Javascript", "React"],
    backends: ["NodeJs", "Express", "API REST", "MongoDB", "Firebase"],
    outils: ["VSCode", "Git", "Figma"],
  };

  const renderSkills = (list, type) => (
    <li className="about__skill">
      {list.map((el, index) => (
        <span key={index}>
          {el}
          <span className={`about__tag ${type}`}>{type}</span>
        </span>
      ))}
    </li>
  );

  return (
    <div id="about" className="about">
      <div className="about__wrapper">
        <div className="about__container">
          <div className="about__left">
            <Title prop={`À propos`} />
            <p>
              Je suis développeuse front-end passionnée par la tech et la
              création de petites applications web.
            </p>
            <p>
              Après plusieurs années d'expérience dans le domaine du tourisme,
              j'ai décidé de me lancer en autodidacte dans le développement web
              pour résoudre les problèmes rencontrés moi-même au cours de mes
              expériences précédentes.
            </p>
            <p>
              Actuellement en recherche active d'opportunités pour mettre en
              pratique mes compétences, je continue à être en apprentissage de
              nouvelles technologies, notamment TypeScript et Next.js.
            </p>
            <ul className="about__skills">
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
          to={`#`}
          children={`Télécharger mon CV`}
        />
      </div>
    </div>
  );
};

export default About;
