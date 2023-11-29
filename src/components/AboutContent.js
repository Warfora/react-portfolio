import "./AboutContentStyles.css"

import React from 'react'
import {Link} from 'react-router-dom'
import me1 from "../assets/me1.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <br></br>
            <p>I'm a software developer student from OSAO and young code enthusiast from Oulu. Soon will be starting engineering studies in university of applied sciences OAMK. 
            <br/>Recently been working on test automation with Python at Nokia. Still deciding which IT career direction I'm going to pursue.
            </p>

            <p>Technologies I've worked with: 
                <br/>Python, Github, Anaconda
                <br/>Jenkins, Bash, Groovy
                <br/>React, Node.js, JavaScript
                <br/>C#, Unity, Visual Studio
                <br/>Blender, Rhino 7, Photoshop
            </p>
            <br></br>
            <Link to="/contact">
                <button className="btn">
                    Contact
                </button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-container bottom">
                    <img src={me1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
