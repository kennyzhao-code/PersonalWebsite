import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import {colors} from '../globals/colors';
import FontStyles from '../Fonts/fontStyles';

//fix emailjs
const ContactUs = ({lightBg, id, topLine, darkText, description}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_0vs4pmo', 
        'template_r5x6iag', 
        form.current, 
        'cLQasyeWZPPPe4Gbu')

      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset(); 

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <>
  <FontStyles />
    <MainDiv id = {id} lightBg = {lightBg}>
      <ContactFormDiv>
        <ContactFormBox>

            <ContactFormSection>

                <ContactTitle>{topLine}</ContactTitle>
                <ContactDescription>Feel free to send us an email or message us at any of our social media platforms!</ContactDescription>

            </ContactFormSection>

            <ContactFormSection>

                <StyledContactForm>
                    <form ref={form} onSubmit={sendEmail}>

                        <label>Name
                            <input type="text" name="user_name" />
                        </label>

                        <label>Email
                            <input type="email" name="user_email" />
                        </label>

          
                        <label>Message
                            <textarea name="message" />
                        </label>

                        <label>
                            <input type="submit" value="Send" />
                        </label>


                    </form>
                </StyledContactForm>

            </ContactFormSection>


    </ContactFormBox>

</ContactFormDiv>
</MainDiv>
</>
  );
};

export default ContactUs

// main div
const MainDiv = styled.div`
    justify-content: center;
    flex-direction: column;
    display: flex;
    height: 1200px;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    @media screen and (max-width: 768px) {
        height: 1500px;
    }
    @media screen and (max-width: 480px) {
        height: 1400px;
    }
`

const ContactFormSection = styled.div`
    height: 100%;
    border: 1px solid white;
`


const ContactFormDiv = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
  `

const ContactFormBox = styled.div`
    padding: 5rem;
    background: ${colors.mainBlue};
    align-items: center;
    border-radius: 20px;
    width: 1510px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;


`
const ContactTitle = styled.h1`
    font-size: 3rem;
    font-family: 'OktaNeueBold', sans-serif;
    font-weight: 700;
    position: relative;
    color: white;  
`

const ContactDescription = styled.p`
    color: white;
    font-size: 1.8rem;
    margin-top: 2rem;
    position: relative;
    font-weight: 700;    
    `
    



const StyledContactForm = styled.div`
  width: 40vw;
  display: flex;
  font-family: 'OktaNeueLight', sans-serif;
  font-weight: bold;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 690px;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 2px solid white;
      background: ${colors.secondaryBlue};

      &:focus {
        border: 2px solid ${colors.mainRed};
      }
    }
    textarea {
      min-width: 690px;
      max-width: 690px;
      max-height: 300px;
      min-height: 200px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 2px solid white;
      background: ${colors.secondaryBlue};
      &:focus {
        border: 2px solid ${colors.mainRed};
      }
    }

    label {
        color: white;
        font-size: 1.2rem;
        font-weight: 700;
    }


    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      width: 125px;
      height: 45px;
      color: ${colors.mainBlue};
      border: none;
      font-weight: 700;
      font-size: 1.3rem;
      border-radius: 10px;
      background: white;
   

      &:hover {
        
      }
    }
  }
`
