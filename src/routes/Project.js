import React from 'react'
import "./Project.css"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg4 from "../components/Heroimg4";
import ImageSlider from "../components/ImageSlider";
import {Link} from 'react-router-dom'

import { SliderData } from '../components/SliderData'
import ScrollToTop from 'react-scroll-to-top';

const Project = () => {
  return (
    <div>
      <ScrollToTop smooth top="20"/>
      <Navbar/>
      <Heroimg4 heading="PROJECTS." text="My most recent works"/>
      <ImageSlider slides={SliderData}/>
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

export default Project;