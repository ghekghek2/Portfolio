
import React from "react";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home.js"
import About from "./components/about/About"
import Skill from "./components/skill/Skill.js";
import Project from "./components/project/Project.js"
import "./index.css"
function App() {
  return (
    <div className="App section">
  <Navbar/>
   <Home/>
<About/>
<Skill/>
<Project/>
    </div>
  );
}

export default App;
