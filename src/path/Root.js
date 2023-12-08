import { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../pages/Main";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const Root = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <About />
      <Project width={width} />
      <Contact />
      <Footer />
    </>
  );
};

export default Root;
