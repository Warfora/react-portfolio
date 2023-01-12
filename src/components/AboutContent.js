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
            <p>I'm a software developer student from OSAO and soon to be high school graduate from Oulu.
               I have been working a bit on game development and web development. 
               Aside from that I'm interested in using Python for various projects. 
               3D modeling and graphics design are also a part of my interest.
            </p>
            <p>Technologies I've worked with: 
                <br/>C#, Unity, Visual Studio
                <br/>React JS, HTML, css
                <br/>Python, Anaconda, Pygame
                <br/>Github, Netlify, Trello
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
