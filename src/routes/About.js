import React from 'react'
import "./Project.css"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg3 from "../components/Heroimg3";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 heading="ABOUT" text="Don't mind the cat :)"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About