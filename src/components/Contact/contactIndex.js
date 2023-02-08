import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import {colors} from '../globals/colors';
import FontStyles from '../Fonts/fontStyles';

//fix emailjs
const ContactUs = ({lightBg, id, topLine, description, quote}) => {
  
/*
//checking for empty entires 
  const checkForm = (form) => {
    if (form.user_name.value === "") {
      //alert("Please enter your name");
      form.user_name.focus();
      return false;
    }
    if (form.user_email.value === "") {
      //alert("Please enter your email");
      form.user_email.focus();
      return false;
    }
    if (form.message.value === "") {
      //alert("Please enter your message");
      form.message.focus();
      return false;
    }
    return true;
  }

  //make warning message disspear after a certain amount of time
  const [isAlertVisibleForm, setIsAlertVisibleForm] = useState(false);
    const handleButtonClickForm = () => {
        setIsAlertVisibleForm(true); 
    }

    setTimeout(() => {
        setIsAlertVisibleForm(false);}, 4000);
  
*/
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
                <ContactDescription>{description}</ContactDescription>
                <ContactQuote>{quote}</ContactQuote>

            </ContactFormSection>

            <ContactFormSectionForm>

                <StyledContactForm>
                    <form ref={form} onSubmit={sendEmail}>

                        <label>Name
                            <input type="text" name="user_name" required/>
                        </label>

                        <label style = {{marginTop: "1rem"}}>Email
                            <input type="email" name="user_email" required/>
                        </label>

          
                        <label style = {{marginTop: "1rem"}}>Message
                            <textarea name="message" required/>
                        </label>

                          <label>
                              <input type="submit" value="Send" />
                          </label>
                    </form>
                </StyledContactForm>

            </ContactFormSectionForm>


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
    height: 1000px;
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
`

const ContactFormSectionForm = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
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
    font-size: 4rem;
    font-family: 'OktaNeueBold', sans-serif;
    font-weight: 700;
    position: relative;
    color: white;  
`

const ContactDescription = styled.p`
  font-family: 'OktaNeueLight', sans-serif;
    color: white;
    font-size: 1.8rem;
    margin-top: 2rem;
    position: relative;
    font-weight: bold;    
    `
const ContactQuote = styled.p`
    font-family: 'OktaNeueLight', sans-serif;
    color: white;
    font-size: 1.8rem;
    margin-top: 2rem;
    position: relative;
    font-weight: bold; 
    font-style: italic;   
    `


const StyledContactForm = styled.div`
  width: 40vw;
  display: flex;
  font-family: 'OktaNeueLight', sans-serif;
  font-weight: bold;
  position: relative;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    margin-top: 1.5rem;

    input {
      width: 690px;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 10px;
      border: 2px solid white;
      background: ${colors.secondaryBlue};

      &:focus {
        border: 2px solid ${colors.mainPurple};
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
        border: 2px solid ${colors.mainPurple};
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
      position: absolute;
      right: 0;
   

      &:hover {
        scale: 1.05;
        transition: all 0.3s ease;
        color: ${colors.secondaryBlue};
      }
    }
  }
`
