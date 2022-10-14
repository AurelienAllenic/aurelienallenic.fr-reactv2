import React from 'react'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import {FormContainer, EntireForm, InputStyle, Textarea, SendButton} from "../../utils/styles/contact"

function Form() {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohqoijk', 'template_w9q6vir', form.current, 'dWzWUkYBQ9ERFSUxC')
         
    e.target.reset();
    alert('message envoyé')

  };
  return (
    <>
    <FormContainer className='4elements'>
        <EntireForm ref={form} onSubmit={sendEmail}>
            <InputStyle id='name' type="text" name='name' placeholder='Your full name'required />
            <InputStyle id='email' type="email" name='email' placeholder='Your Email'required />
            <Textarea id='textarea' name="message" placeholder='Your message' rows="7" required></Textarea>
            <SendButton type='submit' className='btn btn-primary'>Send Message</SendButton>
        </EntireForm>
    </FormContainer>
    </>
  )
}

export default Form