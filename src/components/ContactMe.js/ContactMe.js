import React from "react";
import { ContactWrap } from "./ContactMeStyles";

const ContactMe = () => (
    <ContactWrap>
            <h1 id="contactme">Let's Talk</h1>
            <h3>Fill out the below form and we will be in touch.</h3>
            <form className="formContainer">
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Email Address' />
                <input type='text' placeholder='Phone #' />
                <input type='text' placeholder='Subject' />
                <textarea type='text' placeholder='Type Your Message' />
                <input className="submit" type='submit' />
            </form>
    </ContactWrap>
    
)

export default ContactMe;
