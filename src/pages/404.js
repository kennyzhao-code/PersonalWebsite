import React from "react"
import styled from "styled-components"
import {Link} from 'gatsby'
//import Layout from "../components/layout"
import Seo from "../components/SEO/seo"
import '../components/LayoutForWeb/layout.css'

const NotFoundPage = () => {
  
  return (
    <MasterDiv>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

      <ButtonWrapper>
        <Button href ='/'>Back To Home</Button>
      </ButtonWrapper>

    </MasterDiv>
  
  );
}

export default NotFoundPage


const MasterDiv = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  position: relative;
  left: 0;
  top: 0;


  h1{
    color: white;
    text-align: center;
    margin: auto;
    position: relative;
    top: 45%;

    
  }


  p{
    color: white;
    text-align: center;
    margin: auto;
    position: relative;
    top: 45%;

    @media screen and (max-width: 480px)
    {
      font-size: 15px; 
    }
  }
`

const ButtonWrapper = styled.div`
    position: relative; 
    height: 40px;
    width: 175px;
    justify-self: center;
    margin: auto;
    border-radius: 40px; 
    background-color: #98f5e1;
    display: block;
    z-index: 5;
    top: 50%;

    &:hover{
        background-color: #b9fbc0;
        cursor: pointer;
        color: black;
        transition: 1s ease;
    }

    @media screen and (max-width: 480px)
    {
      width: 150px;
    }
`

const Button = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;
    color: black;
    text-decoration: none;
    justify-content: center;
    text-align: center;
    margin-left: 1.6rem;
    position: relative;
    top: 0.3rem;

    &:hover{
        cursor: pointer;
        color: black;
    }

    @media screen and (max-width: 480px)
    {
      top: 0.45rem;
      margin-left: 1.4rem;
    }
`