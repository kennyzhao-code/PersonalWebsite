import React from "react"
import styled from "styled-components"
import {Link} from 'gatsby'
//import Layout from "../components/layout"
import Seo from "../components/seo"

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
  width: 100vw;
  height: 100vh;


  h1{
    color: white;
  }


  p{
    color: white;
  }
`

const ButtonWrapper = styled.div`
    position: relative; 
    height: 40px;
    width: 175px;
    //justify-self: center;
    //margin: auto;
    top: 1rem;
    border-radius: 40px; 
    background-color: #98f5e1;
    display: block;
    z-index: 5;

    &:hover{
        background-color: #b9fbc0;
        cursor: pointer;
        color: black;
        transition: 1s ease;
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
`