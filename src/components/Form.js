import "./FormStyles.css"

import React from 'react'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

  const form = useRef();
  const inputs = useRef();
  const inputs1 = useRef();
  const inputs2 = useRef();
  const inputs3 = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rj3l5jo', 'template_f0591am', form.current, '6NxC1ve2bEoMuROli')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      inputs.current.value = "";
      inputs1.current.value = "";
      inputs2.current.value = "";
      inputs3.current.value = "";
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input ref={inputs} type="text" name="user_name" />
          <label>Email</label>
          <input ref={inputs1} type="email" name="user_email" />
          <label>Subject</label>
          <input ref={inputs2} type="text" name="user_subject"/>
          <label>Message</label>
          <textarea ref={inputs3} rows ="6" placeholder="Type your message here" name="message" />
          <input className="btn" type="submit" value="Submit" />
          <br/><br/>
       </form>
    </div>
  )
}

export default Form