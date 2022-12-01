import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"

import{ Route, Routes} from "react-router-dom";
import BrowserRouter from 'react-router-dom/BrowserRouter'

function App() {
  return (
    <>
    <BrowserRouter>
      <BrowserRouter path="/" element={<Home />}/>
      <BrowserRouter path="/project" element={<Project />}/>
      <BrowserRouter path="/about" element={<About />}/>
      <BrowserRouter path="/contact" element={<Contact />}/>
    </BrowserRouter>
    </>
  );
}

export default App;
