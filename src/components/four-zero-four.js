// all imports 
import React from 'react';
import styled from "styled-components";
import {Link} from 'gatsby';


const Four0Four = () => {

    return (
        
    <FourContainer>
            
      <TextContainer>
        <h1>404: not found</h1>
        <p>you just hit a route that doesn&#39;t exist... the sadness.</p>
      </TextContainer>

      <ButtonWrapper to = '/'>
        back to home
      </ButtonWrapper>

    </FourContainer>  
    );
};

export default Four0Four;

// all styling 
//main container 
const FourContainer = styled.div`
  background: #F8FCFF;
  height: 100dvh;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
`;


const TextContainer = styled.div`
  flex-direction: column;
  align-items: center;

  h1{
    color: black;
    text-align: center;
    margin: auto;
    position: relative;
    font-size: clamp(3rem, 7vw, 7rem);
    }

   p{
    color: black;
    text-align: center;
    margin: auto;
    position: relative;
    font-size: clamp(1rem, 3vw, 2rem);

  }

`;

const ButtonWrapper = styled(Link)`
    position: relative; 
    justify-content: center;
    align-items: center;
    display: flex;
    text-decoration: none;
    font-size: clamp(1rem, 2vw, 1.5rem);
    transition: 0.375s;
    margin-top: 1.5rem;

    &:hover{
        cursor: pointer;
        transition: 0.375s;
        transform: scale(1.1);
    }

`;
