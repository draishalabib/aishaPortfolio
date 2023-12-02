// import React, { useState, createContext } from "react";
// import ReactSwitch from "react-switch";
import "./index.css";

/*<---   importing all pictures  ----- > */
import MyCv from "./images/header.jpg";
import Button from "./images/mycv.jpg";
import pp from "./images/Aspirin.png";
import Ck from "./images/a.jpg";
import Hh from "./images/entertain.JPG";
import J from "./images/game.jpg";
import h1 from "./images/c.png";
import js from "./images/js1.jpg";
import w from "./images/b.png";
import r from "./images/re2.png";
import cc from "./images/c.png";

/*<---   importing parents components          
----- > */
import Header from "./Components/HeaderComponents/Header";
import Resume from "./Components/ResumComponent/Resume";
import MySkill from "./Components/SkillComponent/MySkill";
import About from "./Components/AboutComponent/About";
import Contact from "./Components/ContactComponent/Contact";
import Project from "./Components/ProjectComponent/Project";

import Footer from "./Components/FooterComponent/Footer";

/*<--- details which is used in navebar section  
----- > */
const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "About",
    link: "about",
  },
  {
    id: 3,
    title: "Resume",
    link: "resume",
  },
  {
    id: 4,
    title: "Skill",
    link: "skill",
  },
  {
    id: 5,
    title: "Project",
    link: "project",
  },
  {
    id: 6,
    title: "Contact",
    link: "contact",
  },
];

/*<--- details which is used in skill section   
----- > */
const detail = [
  {
    id: 1,
    percentage: "100",
    title: "HTML",
    project: h1,
  },
  {
    id: 2,
    percentage: "98",
    title: " CSS➡",
    project: cc,
  },
  {
    id: 3,
    percentage: "90",
    title: "BStrap",
    project: w,
  },
  {
    id: 4,
    percentage: "85",
    title: "jScript",
    project: r,
  },
  {
    id: 5,
    image: J,
    percentage: "80",
    title: "React",
    project: js,
  },
];
/*<--- details which is used in project section   
----- > */
const deta = [
  {
    id: 1,
    name: "html",
    image: MyCv,
    title: "My CV",
    adress: "https://github.com",
  },
  {
    id: 2,
    name: "javaScript",
    image: Button,
    title: "Button Game",
    adress: "https://github.com",
  },
  {
    id: 3,
    name: "react",
    image: pp,
    title: "Pharmacy App",
    adress: "https://github.com",
  },
];

/*<--- details which is used in about section   
----- > */
const aboutme = [
  {
    id: 1,
    image: Ck,
  },

  {
    id: 2,
    image: Hh,
  },
];
// export const ThemeContext = createContext(null);
function App() {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  // setTheme((change) => (change === "dark" ? "light" : "dark"));
  // };
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div id="light">
      {/* <div className="switch"> */}
      {/* <label>{theme === "light" ? "Light Mood" : "Dark Mood"}</label> */}
      {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> */}
      {/* </div> */}
      <Header Links={navLinks} />
      <About about={aboutme} />
      <Resume />
      <MySkill item={detail} />
      <Project deta={deta} />
      <Contact />
      <Footer />
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;
