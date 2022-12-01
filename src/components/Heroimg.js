import "./HeroimgStyles.css";

import React from 'react'

import Introimg from "../assets/table.jpg"

import {Link} from "react-router-dom";

import TypeWriterEffect from "react-typewriter-effect";

const Heroimg = () => {
  return (
    <div className= "hero"> 
        <div className="mask">
            <img className = "intro-igm" src={Introimg} alt ="Introimg"/>
        </div>
        <div className ="content">
            <p>hehee tää toimii</p>

            <h1>
              <span>
                <TypeWriterEffect 
                textStyle={{
                  fontFamily:"Red Hat Display",
                  color: "#F3D56",
                  fontWeight: 500,
                  fontSize: "1.5em",
                }}
                startDelay={500}
                cursorColor="#3F3D56"
                multiText={["Software Developer", "Graphics Designer"]}
                multiTextDelay={500}
                typeSpeed={120}
                multiTextLoop/>
              </span>
            </h1>

            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/about" className="btn btn-light">About Me</Link>
            </div> 

        </div>
    </div>
  )
}

export default Heroimg