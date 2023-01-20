import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form';
import "../components/contactsStyles.css";

const Contact = () => {

  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACTS." text="Let's chat."/>
      <div className="about">
        <div><h1>Links</h1>
        <p>Or contact me directly.</p></div>
      </div>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact