import React from 'react'
import "./Project.css"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg4 from "../components/Heroimg4";
import {Link} from 'react-router-dom'

import Projects2 from "../components/Projects2";
import ScrollToTop from 'react-scroll-to-top';

const Project = () => {
  return (
    <div>
      <ScrollToTop smooth top="20"/>
      <Navbar/>
      <Heroimg4 heading="PROJECTS AND STUDIES." text="My most recent works and courses"/>
      <Projects2/>
      <br/><br/>
      <div className="linking">
      <Link to="/about">
                <button className="btn">
                    About me
                </button>
            </Link>
      </div>
      <Footer/>
    </div>
  )
}

/*<ImageSlider slides={SliderData}/>**/

export default Project;