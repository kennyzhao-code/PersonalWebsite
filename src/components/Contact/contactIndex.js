import React, { useRef, useEffect} from 'react';
import Aos from "aos";
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import {colors} from '../globals/colors';
import '../globals/font.css';

//fix emailjs
const ContactUs = ({lightBg, id, topLine, description, quote}) => {

    //controls fade in animation time 
    useEffect(() => {
      Aos.init({duration: 1000}); 
    }, []); 

  
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
    <MainDiv name = "contact" id = {id} lightBg = {lightBg}>
      <ContactFormDiv data-aos-once='true' data-aos="fade-up">
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
    align-items: center;
    display: flex;
    height: 800px;
    transition: 0.375s;

    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    
    @media screen and (max-width: 1700px) {
        height: 850px;
        transition: 0.375s;
    }
    @media screen and (max-width: 1350px) {
        height: 800px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px) {
      height: 1200px;
      transition: 0.375s;
  }

  
`;

const ContactFormSection = styled.div`
    height: 100%;
    transition: 0.375s;

    @media screen and (max-width: 1100px) {
        width: 380px;
        transition: 0.375s;
        position: relative;
        right: 30px;
    }

    @media screen and (max-width: 480px) {
      width: 320px;
      transition: 0.375s;
      right: 55px;
  }
`;

const ContactFormSectionForm = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    width: 500px;

    @media screen and (max-width: 1100px) {
      width: 380px;
      transition: 0.375s;
      position: relative;
      right: 30px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    transition: 0.375s;
    right: 55px;
}
`;

const ContactFormDiv = styled.div`
    display: flex;
    justify-content: center;
    transition: 0.375s;
    width: 1510px;

    @media screen and (max-width: 1700px) {
      width: 1200px;
      transition: 0.375s;
    }

    @media screen and (max-width: 1350px) {
      width: 1050px;
      transition: 0.375s;
    }

    @media screen and (max-width: 1100px) {
      width: 480px;
      transition: 0.375s;
    }

    @media screen and (max-width: 480px) {
      width: 320px;
      transition: 0.375s;
    }
  `;

const ContactFormBox = styled.div`
    padding: 5rem;
    background: ${colors.mainBlue};
    align-items: center;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    transition: 0.375s;

    &:hover {
      transition: 0.375s;
      scale: 1.01;
    }


    @media screen and (max-width: 1100px) {
      grid-template-columns: 1fr;
      transition: 0.375s;
      width: 480px;
    }

    @media screen and (max-width: 480px) {
      width: 350px;

      &:hover{
            scale: 1;
    }
    }


`;
const ContactTitle = styled.h1`
    font-size: 4rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    position: relative;
    color: white;  
    transition: 0.375s;


    @media screen and (max-width: 1350px) {
      font-size: 3rem; 
      transition: 0.375s;
    }
`;

const ContactDescription = styled.p`
    font-family: 'Raleway', sans-serif;
    color: white;
    line-height: 1.5;
    font-size: 1.8rem;
    margin-top: 2rem;
    position: relative;
    font-weight: 400;   
    transition: 0.375s;

    
    @media screen and (max-width: 1350px) {
      font-size: 1.5rem; 
      transition: 0.375s;

    }

    @media screen and (max-width: 480px) {
      font-size: 1.3rem; 
      transition: 0.375s;

    }
    `;
const ContactQuote = styled.p`
    font-family: 'Raleway', sans-serif;
    color: white;
    font-size: 1.8rem;
    margin-top: 2rem;
    position: relative;
    font-weight: 400; 
    font-style: italic;  
    transition: 0.375s;

    
    @media screen and (max-width: 1350px) {
      font-size: 1.5rem; 
      transition: 0.375s;

    }
    `;


const StyledContactForm = styled.div`
  width: 800px;
  display: flex;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  position: relative;
  transition: 0.375s;
 
  @media screen and (max-width: 1700px) {
    width: 500px;
    transition: 0.375s;
  }

  

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    margin-top: 1rem;

    input {
      width: 690px;
      height: 35px;
      padding: 7px;
      outline: none;
      margin-top: 0.5rem;
      border-radius: 10px;
      border: 2px solid white;
      background: ${colors.secondaryBlue};
      transition: 0.375s;


      &:focus {
        border: 2px solid ${colors.mainPurple};
      }

      @media screen and (max-width: 1700px) {
        width: 500px;
        transition: 0.375s;

      }

      @media screen and (max-width: 1100px) {
        width: 380px;
        transition: 0.375s;

      }

      @media screen and (max-width: 480px) {
        width: 300px;
        transition: 0.375s;

      }

    }

    textarea {
      min-width: 690px;
      max-width: 690px;
      max-height: 300px;
      min-height: 200px;
      padding: 7px;
      margin-top: 0.5rem;
      outline: none;
      border-radius: 10px;
      border: 2px solid white;
      background: ${colors.secondaryBlue};
      transition: 0.375s;

      &:focus {
        border: 2px solid ${colors.mainPurple};
      }

      @media screen and (max-width: 1700px) {
        transition: 0.375s;
        min-width: 500px;
        max-width: 500px;
      }

      @media screen and (max-width: 1100px) {
        transition: 0.375s;
        min-width: 380px;
        max-width: 380px;
      }

      @media screen and (max-width: 480px) {
        min-width: 300px;
        max-width: 300px;
        transition: 0.375s;

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
`;
