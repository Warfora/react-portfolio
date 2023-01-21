import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import Form from '../components/Form';
import "../components/contactsStyles.css";

/*
function CreateLink(props) {

  let anchor = document.createElement('a');
  let link = document.createTextNode(props.word);
  anchor.appendChild(link);
  anchor.href = "https://www.linkedin.com/in/katarina-semjonova-b05a57230/";
  document.body.appendChild(anchor);

}
*/

const Contact = () => {

  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACTS." text="Let's chat."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
