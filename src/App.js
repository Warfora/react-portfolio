import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"

import{ Route, Routes} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Portfolio :)</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Portfolio" />
    </Helmet>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </>
  );
}

export default App;
