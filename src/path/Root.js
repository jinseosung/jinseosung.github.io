import { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../pages/Main";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const Root = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const detectKeyDown = (e) => {
    if (!isOpen && !navIsOpen) return;

    if (e.key === "Escape" || e.key === "Esc") {
      isOpen && setIsOpen(!isOpen);
      navIsOpen && setNavIsOpen(!navIsOpen);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", detectKeyDown);
  });

  return (
    <>
      <Header navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <Main />
      <About />
      <Project width={width} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Contact />
      <Footer />
    </>
  );
};

export default Root;
