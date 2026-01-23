/* Imports */
import "aos/dist/aos.css";
import Aos from "aos";
import React, { useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import {colors} from "../../components/globals/colors";
import '../globals/font.css';

/* Main */
const Emotions = () => {
    
    //controls fade in animation time 
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 
    
    return (
        <>
            <EmotionsContainer name ="emotions" id="emotions">
            
                <EmotionsWrapper data-aos-once='true' data-aos="fade-up">
                        <EmotionsRow>
                            
                            <EmotionsBlock>
                                <EmotionSecondBlock>
                                <EmotionText>Mood?</EmotionText>
                                    <Face happy>
                                        <Eye />
                                        <Eye right />
                                        <Mouth happy />
                                    </Face>
                                    </EmotionSecondBlock>

                                {/*<div class="shadow scale"></div>*/}

                            </EmotionsBlock>
                            

                            <EmotionsBlock>
                                <EmotionSecondBlock>
                                    <EmotionText>Sleep?</EmotionText>
                                    <Face meh>
                                            <Eye />
                                            <Eye right />
                                            <Mouth meh />
                                        </Face>
                                </EmotionSecondBlock>
                            </EmotionsBlock>

                            <EmotionsBlock>
                                <EmotionSecondBlock>
                                    <EmotionText>Workload?</EmotionText>
                                        <Face sad>
                                            <Eye />
                                            <Eye right />
                                            <Mouth sad />
                                        </Face>
                                </EmotionSecondBlock>
                            </EmotionsBlock>
                 
                        </EmotionsRow>
                </EmotionsWrapper>

            </EmotionsContainer>
        </>
    );
};

export default Emotions;

/* Styles */
// Animations
const bounceAnimation = keyframes`
    50% {
       transform: translateY(-10px);
    }
`;

// Faces
const Face = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background: ${({happy, meh, sad}) => 
        happy ? '#6CBB6C' : 
        meh ? '#D5D274' : 
        sad ? '#D66A6A' : '#6CBB6C'};
    border-radius: 50%;
    z-index: 2;
    animation: ${bounceAnimation} 1s ease-in infinite;
    right: 0;
    transition: 0.375s;

    &:hover {
        transition: 0.375s;
        transform: scale(1.1);
    }

    @media screen and (max-width: 480px) {
        &:hover{
            transform: scale(1);
        }
    }
`;

const Eye = styled.div`
    position: absolute;
    width: 7px;
    height: 7px;
    background: white;
    border-radius: 50%;
    top: 40%;
    left: ${({right}) => right ? '55%' : '35%'};
`;

const Mouth = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    
    /* Happy Mouth */
    ${({happy}) => happy && `
        top: 48%;
        left: 44%;
        border-radius: 50%;
        border: 2px solid;
        border-color: transparent white white transparent;
        transform: rotate(45deg);
    `}

    /* Meh Mouth */
    ${({meh}) => meh && `
        border: 1px solid;
        border-color: white;
        border-radius: 0px;
        height: 1px;
        width: 12px;
        left: 43%;
        top: 51%;
    `}

    /* Sad Mouth */
    ${({sad}) => sad && `
        border-radius: 50%;
        border: 2px solid;
        border-color: transparent white white transparent;
        transform: rotate(225deg);
        top: 52%;
        left: 44.5%;
    `}
`;

//main container 
const EmotionsContainer = styled.div`
    color: #fff;
    background: #F8FCFF;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    border: 1px solid ${colors.mainPurple};

    @media screen and (max-width: 1100px){
        height: 500px;
    }
`;

//main wrapper
const EmotionsWrapper = styled.div`
    display: grid; 
    z-index: 1; 
    width: 100%; 
    margin-right: auto; 
    margin-left: auto; 
    padding: 0 24px; 
    justify-content: center; 
    position: relative;
`;

//main row
const EmotionsRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4.5rem;
    align-items: center;
    width: 100%;
    transition: 0.375s; 
    

    @media screen and (max-width: 1100px) {
        grid-row-gap: 4rem;
        grid-template-columns: 1fr;
        transition: 0.375s;
    }

    @media screen and (max-width: 480px) {
        transition: 0.375s;
    }
`;

//styling for emotions
const EmotionsBlock = styled.div`
    width: 450px;
    height: 175px;
    border-radius: 15px;
    border: 3px solid ${colors.mainPurple};
    align-items: center;
    display: flex;
    justify-content: center;
    transition: 0.375s;

    @media screen and (max-width: 1700px) {
        transition: 0.375s;
        width: 355px; 
    }

    @media screen and (max-width: 1350px) {
        transition: 0.375s;
        width: 305px; 
    }
    
`;

//inner emotion div 
const EmotionSecondBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 280px;
    height: 50px;    
`;

//text 
const EmotionText = styled.p`
    font-size: 1.7rem;
    color: ${colors.mainPurple};
    position: absolute;
    left: 0;
    padding-left: 1rem;
    top: 0.5rem; 
`;


