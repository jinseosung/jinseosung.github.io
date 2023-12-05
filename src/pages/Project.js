import { useState } from "react";
import Title from "../components/Title";
import projects from "../datas/project.json";
import Modal from "../components/Modal";

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  const handleMouseClick = (index) => {
    setIsOpen(!isOpen);
    setProjectIndex(index);
  };

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (id) => {
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div id="project" className="project">
      <div className="project__wrapper">
        <Title prop={`Projets`} />
        <ul className="projects">
          {projects.map((project, index) => (
            <li
              key={project.id}
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
            >
              <h3 className="project__title">{project.title}</h3>
              <p className="project__skill">{project.skills.join(", ")}</p>
              <img
                src={project.hoverImg}
                alt={project.title}
                style={{
                  width: "370px",
                  position: "fixed",
                  left: `${position.x - 200}px`,
                  top: `${position.y - 150}px`,
                  pointerEvents: "none",
                  zIndex: 1,
                  opacity: `${hoveredProject === project.id ? 1 : 0}`,
                  transition: `left 200ms linear, top 200ms linear, opacity 200ms`,
                }}
              />
            </li>
          ))}
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
