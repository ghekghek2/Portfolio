
import React from "react";
import Navbar from "./components/navbar/Navbar.js";
import Home from "./components/home/Home.js"
import About from "./components/about/About"
import "./index.css"
function App() {
  return (
    <div className="App section">
  <Navbar/>
   <Home/>
<About/>
    </div>
  );
}

export default App;
