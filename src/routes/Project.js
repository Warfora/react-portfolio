import React from 'react'
import "./Project.css"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg4 from "../components/Heroimg4";
import ImageSlider from "../components/ImageSlider";

import { SliderData } from '../components/SliderData'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg4 heading="PROJECTS." text="My most recent works"/>
      <ImageSlider slides={SliderData}/>
      <Footer/>
    </div>
  )
}

export default Project;