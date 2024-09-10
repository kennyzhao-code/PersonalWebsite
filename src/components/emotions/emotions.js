/* Imports */
import "aos/dist/aos.css";
import Aos from "aos";
import React, { useEffect } from 'react';
import styled from "styled-components";
import {colors} from "../../components/globals/colors";
import './emotions.css';
import '../globals/font.css';

/* Main */
const Emotions = ({lightBg, id}) => {
    
    //controls fade in animation time 
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 
    
    return (
        <>
            <EmotionsContainer name ="emotions" lightBg = {lightBg} id = {id}>
            
                <EmotionsWrapper data-aos-once='true' data-aos="fade-up">
                        <EmotionsRow>
                            
                            <EmotionsBlock>
                                <EmotionSecondBlock>
                                <EmotionText>Mood?</EmotionText>
                                    <div class="face">
                                        <div class="eye"></div>
                                        <div class="eye right"></div>
                                        <div class="mouth happy"></div>
                                    </div>
                                    </EmotionSecondBlock>

                                {/*<div class="shadow scale"></div>*/}

                            </EmotionsBlock>
                            

                            <EmotionsBlock>
                                <EmotionSecondBlock>
                                    <EmotionText>Sleep?</EmotionText>
                                    <div class="faceMeh">
                                            <div class="eye"></div>
                                            <div class="eye right"></div>
                                            <div class="mouth meh"></div>
                                        </div>
                                </EmotionSecondBlock>
                            </EmotionsBlock>

                            <EmotionsBlock>
                                <EmotionSecondBlock>
                                    <EmotionText>Workload?</EmotionText>
                                        <div class="faceSad">
                                            <div class="eye"></div>
                                            <div class="eye right"></div>
                                            <div class="mouth sad"></div>
                                        </div>
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
//main container 
const EmotionsContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    height: 50px;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;

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
    bottom: 15rem;
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


