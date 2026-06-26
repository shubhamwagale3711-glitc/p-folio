import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div>
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "Home" && <Home />}
      {activeTab === "About" && <About />}
      {activeTab === "Education" && <Education />}
      {activeTab === "Skills" && <Skills />}
      {activeTab === "Contact" && <Contact />}
    </div>
  );
}

export default App;