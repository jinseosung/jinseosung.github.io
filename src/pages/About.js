import portrait from "../assets/portrait.png";
import Button from "../components/Button";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="about">
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
              <li className="about__skill">
                <span>
                  HTML<span className="about__front">frontend</span>
                </span>
                <span>
                  SCSS<span className="about__front">frontend</span>
                </span>
                <span>
                  Javascript<span className="about__front">frontend</span>
                </span>
                <span>
                  React<span className="about__front">frontend</span>
                </span>
              </li>
              <li className="about__skill">
                <span className="hel">
                  NodeJs<span className="about__back">backend</span>
                </span>
                <span>
                  Express<span className="about__back">backend</span>
                </span>
                <span>
                  API REST<span className="about__back">backend</span>
                </span>
                <span>
                  MongoDB<span className="about__back">backend</span>
                </span>
                <span>
                  Firebase<span className="about__back">backend</span>
                </span>
              </li>
              <li className="about__skill">
                <span>
                  VSCode<span className="about__tool">outil</span>
                </span>
                <span>
                  Git<span className="about__tool">outil</span>
                </span>
                <span>
                  Figma<span className="about__tool">outil</span>
                </span>
              </li>
            </ul>
          </div>
          <img src={portrait} alt="Portrait" />
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
