import { useState, useRef, useEffect } from "react";
import Title from "../components/Title";
import projects from "../datas/project.json";
import Modal from "../components/Modal";

const Project = ({ width, isOpen, setIsOpen }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ x: undefined, y: undefined });
  const [projectIndex, setProjectIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);

  const handleMouseClick = (index) => {
    setIsOpen(!isOpen);
    setProjectIndex(index);
  };

  const handleMouseMove = (e) => {
    if (width < 991) return;
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (id) => {
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.id);
            setVisibleProjects((prevVisibleProjects) =>
              prevVisibleProjects.includes(projectId)
                ? prevVisibleProjects
                : [...prevVisibleProjects, projectId]
            );
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    projectRefs.current.forEach((project) => {
      observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="project" className="project">
      <div className="project__wrapper">
        <Title prop={`Projets`} />
        <ul className="projects">
          {projects.map((project, index) =>
            width > 991 ? (
              <li
                key={project.id}
                id={project.id}
                className="project"
                onClick={() => {
                  handleMouseClick(index);
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => {
                  handleMouseEnter(project.id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave();
                }}
                ref={(el) => (projectRefs.current[index] = el)}
                style={{
                  opacity: visibleProjects.includes(project.id) ? 1 : 0,
                  transition: `opacity 500ms ease-in`,
                }}
              >
                <h3 className="project__title">{project.title}</h3>
                <p className="project__skill">{project.skills.join(", ")}</p>
                <img
                  className="project__img"
                  src={project.hoverImg}
                  alt={project.title}
                  style={{
                    left: `${position.x - 200}px`,
                    top: `${position.y - 150}px`,
                    opacity: `${hoveredProject === project.id ? 1 : 0}`,
                  }}
                />
              </li>
            ) : (
              <li
                key={project.id}
                className="project"
                onClick={() => {
                  handleMouseClick(index);
                }}
                onMouseEnter={() => {
                  handleMouseEnter(project.id);
                }}
              >
                <div className="project__img-container">
                  <img
                    className="project__img-sm"
                    src={project.hoverImg}
                    alt={project.title}
                  />
                </div>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__skill">{project.skills.join(", ")}</p>
              </li>
            )
          )}
        </ul>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        projects={projects}
        projectIndex={projectIndex}
        setProjectIndex={setProjectIndex}
      />
    </div>
  );
};

export default Project;
