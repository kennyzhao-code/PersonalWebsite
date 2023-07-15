// all imports 
import React from 'react';
import styled from "styled-components";
import {colors} from "../../components/globals/colors";
import {Link} from 'gatsby';
import './404.css';
import '../globals/font.css';
import { GrHomeRounded } from "react-icons/gr";


const Four0Four = ({lightBg, id}) => {

    return (
        
    <FourContainer lightBg = {lightBg} id = {id}>
            
      <TextContainer>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </TextContainer>


      <FaceContainer>
        <div class="faceSad404">
          <div class="eye404"></div>
          <div class="eye right404"></div>
          <div class="mouth sad404"></div>
        </div>
        <div class="shadow404 scale404"></div>
      </FaceContainer>



      <ButtonWrapper to = '/'>
        Back To Home <Icon/>
      </ButtonWrapper>

    </FourContainer>  
    );
};

export default Four0Four;

// all styling 
//main container 
const FourContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
  height: 100vh;
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
    color: #897CBF;
    text-align: center;
    margin: auto;
    position: relative;
    font-size: 7rem;
    transition: 0.375s;
    }

   p{
    color: #897CBF;
    text-align: center;
    margin: auto;
    position: relative;
    font-size: 2rem;
    transition: 0.375s;

  }

  @media screen and (max-width: 900px) {
    h1{
      transition: 0.375s;
      font-size: 5rem;
    }

    p{
      transition: 0.375s;
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    h1{
      transition: 0.375s;
      font-size: 4rem;
    }

    p{
      transition: 0.375s;
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1{
      transition: 0.375s;
      font-size: 3rem;
    }

    p{
      transition: 0.375s;
      font-size: 0.9rem;
    }
  }
`

const FaceContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled(Link)`
    position: relative; 
    height: 70px;
    width: 400px;
    justify-content: center;
    align-items: center;
    border-radius: 15px; 
    display: flex;
    margin-top: 12rem;
    text-decoration: none;
    color: ${colors.secondaryPurple};
    font-size: 1.5rem;
    border: 2px solid ${colors.mainPurple};
    transition: 0.375s;

    &:hover{
        cursor: pointer;
        transition: 0.375s;
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px){
      transition: 0.375s;
      height: 60px;
      width: 350px;
      font-size: 1.3rem;
      margin-top: 9rem;
    }

    @media screen and (max-width: 480px){
      transform: scale(1);
    }

`;

const Icon = styled(GrHomeRounded)`
  margin-left: 1rem;
  color: ${colors.secondaryPurple};
`

