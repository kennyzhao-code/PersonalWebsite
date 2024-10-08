/* Imports */
import "aos/dist/aos.css";
import Aos from "aos";
import React, { useEffect } from 'react';
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import './image.css';
import '../globals/font.css';
import { colors } from '../globals/colors';
import resume from '../../images/resume.pdf';

/* Main */
const InfoSection = ({lightBg, id, col1Start, topLine, darkText, description, description2}) => {
    
    //controls fade in animation time 
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 
    
    return (
        <>
            <InfoContainer name ="aboutMe" lightBg = {lightBg} id = {id}>
                
                <InfoWrapper>
                    
                    <InfoRow data-aos-once='true' data-aos="fade-up" imgStart={col1Start}>

                        <Column1>
                            
                            <TextWrapper>

                               <Subtitle  darkText={darkText}>
                                
                               <TopLine >
                                    {topLine}

                                    <div class="notification-box">
                                        <span class="notification-count">1</span>
                                            <div class="notification-bell">
                                                <span class="bell-top"></span>
                                                <span class="bell-middle"></span>
                                                <span class="bell-bottom"></span>
                                                <span class="bell-rad"></span>
                                            </div>
                                    </div>
                                </TopLine>
                                {description} <span>You can click <a target = '_blank' rel="noreferrer" href={resume}>here</a> to see my resume!</span><br/><br/> {description2}</Subtitle>

                            </TextWrapper>
                        </Column1>
                        
                        <Column2 >
                            <ImgWrap>
                            <StaticImage
                                className = 'Myself'
                                src= '../../images/kenny.jpg'
                                alt="me"
                                placeholder="blurred"
                                formats={["auto", "webp"]}
                                quality= {100}
                                imgStyle = {{borderRadius: '10px'}}
               
                                />
                            </ImgWrap>
                        </Column2>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;

//all styling 
//main container 
const InfoContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    height: 780px;
    transition: 0.375s;

    @media screen and (max-width: 1700px){
        height: 750px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        height: 825px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        height: 1350px;
        transition: 0.375s;
    }

    @media screen and (max-width: 480px){
        height: 1040px;
        transition: 0.375s;
    }
`;

//main wrapper
const InfoWrapper = styled.div`
    display: grid; 
    z-index: 1; 
    height: 900px; 
    width: 100%; 
    padding: 0 24px; 
    margin-right: auto; 
    margin-left: auto;
    justify-content: center; 
    position: relative;
    bottom: 4rem;
    transition: 0.375s;
    /* border: 1px solid red; */

    @media screen and (max-width: 1100px){
        margin-left: 4rem;
        transition: 0.375s;

    }

    @media screen and (max-width: 480px){
        margin-left: 1rem;
        transition: 0.375s;
    }

    /* FIX */
    @media screen and (max-width: 440px){
        margin-left: 0rem;
        padding: 0 1px;
        transition: 0.375s;
    }

`;

//main row
const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr); 
    grid-column-gap: 2rem;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )}; 
    width: 100%;
    height: 100%;
    position: relative;
    transition: 0.375s;
    /* border: 1px solid black; */

    @media screen and (max-width: 1700px) {
        grid-column-gap: 0;
        transition: 0.375s;

    }

    @media screen and (max-width: 1100px) {
        transition: 0.375s;
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

//column 1
const Column1 = styled.div`
    margin-bottom: 1rem; 
    padding: 0 15px; 
    grid-area: col1; 
    transition: 0.375s;
    /* border: 1px solid blue; */
    
    @media screen and (max-width: 1700px){
        margin-top: 5rem;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        margin-top: 6rem;
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        height: 680px;
    }

    @media screen and (max-width: 480px){
        margin-top: 5rem;
        transition: 0.375s;
        height: 655px;
    }
`;

//column 2
const Column2 = styled.div`
    margin-top: 3.5rem;
    grid-area: col2; 
    padding: 0 15px; 
    position: relative;
    transition: 0.375s;
    /* border: 1px solid blue; */


    @media screen and (max-width: 1350px){
        transition: 0.375s;
        margin-top: 11rem;
    }

    @media screen and (max-width: 480px){
        margin-top: 0;
        transition: 0.375s;
        margin-top: 0rem;
    }
`;

//text wrapper
const TextWrapper = styled.div`
    padding-top: 4rem; 
    padding-bottom: 0; 
    transition: 0.375s;
    /* border: 1px solid red; */

    @media screen and (max-width: 480px){
        position: relative;
        right: 1rem;
        transition: 0.375s;
    }
`;

//title 
const TopLine = styled.p`
    color: #897CBF; 
    font-size: 65px; 
    position: relative;
    font-weight: 700;
    font-family: 'Raleway', sans-serif; 
    letter-spacing: 1.4px; 
    font-style: italic;
    display: flex;
    transition: 0.375s;
    margin-bottom: 3rem;
    margin-left: -0.9rem;

    @media screen and (max-width: 480px){
        transition: 0.375s;
        font-size: 45px;
        margin-bottom: 1.5rem; 
        margin-left: -0.6rem;

    }
`;

//subtitle
const Subtitle = styled.p`
    width: 700px; 
    margin-bottom: 2rem;
    font-size: 30px; 
    line-height: 40px; 
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    transition: 0.375s;
    color: ${({darkText}) => (darkText ? 'white' : ' #897CBF')};
    /* border: 1px solid red; */


    a{
        text-decoration: none;
        color: ${colors.secondaryPurple};
    }

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 600px;
        margin-left: 2.5rem;  
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 430px;  
        font-size: 25px;
    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 320px;  
        font-size: 20px;
        line-height: 30px;     
    }
`;

//image wrapper
const ImgWrap = styled.div`
    width: 680px; 
    height: 415px;
    border: #897CBF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.375s;

    &:hover {
        transition: 0.375s;
        scale: 1.05;
    }

    @media screen and (max-width: 480px){
        &:hover{
            scale: 1;
        }
    }
`;






