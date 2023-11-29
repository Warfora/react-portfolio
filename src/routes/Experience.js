import React from 'react'
import "./Project.css"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg4 from "../components/Heroimg5";
import {Link} from 'react-router-dom'

import Projects2 from "../components/experience2";
import ScrollToTop from 'react-scroll-to-top';

const Project = () => {
  return (
    <div>
      <ScrollToTop smooth top="20"/>
      <Navbar/>
      <Heroimg4 heading="EXPERIENCE." text="My work experience"/>
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