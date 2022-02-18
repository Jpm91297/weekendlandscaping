import React from "react";
import { ContactWrap } from "./ContactMeStyles";
import emailjs from 'emailjs-com'

const ContactMe = () => {

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_g5o1icl', 'template_ijhorez' , e.target , 'user_AtqFI3nvTWlplzNyaEPlg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
            e.target.reset();
    }

    return (
        <ContactWrap>
                <h1 id="contactme">Let's Talk</h1>
                <h3>Fill out the below form and we will be in touch.</h3>
                <form className="formContainer" onSubmit={sendEmail}>
                    <input type='text' placeholder='Name' name="name" />
                    <input type='text' placeholder='Email Address' name="email" />
                    <input type='text' placeholder='Phone #' name="phone" />
                    <input type='text' placeholder='Subject' name="subject" />
                    <textarea type='text' placeholder='Type Your Message' name="message" />
                    <input className="submit" type='submit' />
                </form>
        </ContactWrap>
    )
}

export default ContactMe;
