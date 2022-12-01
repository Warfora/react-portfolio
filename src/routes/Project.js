import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg4 from "../components/Heroimg4";
//import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg4 heading="PROJECTS." text="My most recent works"/>
      
      <Footer/>
    </div>
  )
}

export default Project;