import "aos/dist/aos.css";
import Aos from "aos";
import React, { useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import '../globals/font.css';
import { colors } from '../globals/colors';
import resume from '../../images/resume.pdf';


/* Main */
const InfoSection = () => {
    
    //controls fade in animation time 
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 


    
    return (
        <>
            <InfoContainer name ="aboutMe" id="about">
                
                <InfoWrapper>
                    
                    <InfoRow data-aos-once='true' data-aos="fade-up">

                        <Column1>
                            
                            <TextWrapper>

                               <Subtitle>
                                
                               <TopLine >
                                    Who am I?

                                    <NotificationBox>
                                        <NotificationCount>1</NotificationCount>
                                            <NotificationBell>
                                                <BellTop></BellTop>
                                                <BellMiddle></BellMiddle>
                                                <BellBottom></BellBottom>
                                                <BellRad></BellRad>
                                            </NotificationBell>
                                    </NotificationBox>
                                </TopLine>
                                <DescriptionText>
                                    I am a currently pursuing a B.A.Sc. Degree in Computer Science minoring in Statistics at McMaster University, Ontario, Canada. My interests lie in aerospace engineering, data engineering, and general software development, all of which captivate me immensely. Additionally, besides my academic pursuits, I am an outgoing individual who finds joy in playing sports (shredding the snow on my skis), creating music (jamming on my guitar), playing video games (late night gaming sessions) and much more! <span>You can click <a target = '_blank' rel="noreferrer" href={resume}>here</a> to see my resume!</span>
                                </DescriptionText>

                               </Subtitle>

                            </TextWrapper>
                        </Column1>
                        
                        <Column2 >
                            <ImgWrap>
                            <StaticImage
                                className="transition-[0.375s] relative top-[5%] h-[400px] w-[640px] 
                                            max-[1700px]:w-[500px] max-[1700px]:h-[550px] max-[1700px]:right-[10%] max-[1700px]:top-[19%]
                                            max-[1350px]:top-0
                                            max-[1100px]:w-[400px] max-[1100px]:h-[450px] max-[1100px]:right-[15%]
                                            max-[480px]:w-[300px] max-[480px]:h-[350px] max-[480px]:right-[25%]"
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

//main wrapper
const InfoWrapper = styled.div`
    display: grid; 
    z-index: 1; 
    height: auto; 
    width: 100%; 
    padding: 0 24px; 
    margin-right: auto; 
    margin-left: auto;
    justify-content: center; 
    position: relative;
    transition: 0.375s;
    // border: 1px solid red;

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
    grid-template-areas: 'col1 col2'; 
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
        grid-template-areas: 'col1' 'col2';
    }
`;

//column 1
const Column1 = styled.div`
    margin-bottom: 3.5rem; 
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
    color: ${colors.navIntro}; 
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
    color: ${colors.navIntro};
    /* border: 1px solid red; */


    a{
        text-decoration: none;
        color: ${colors.navIntroDark};
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
    border: ${colors.navIntro};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DescriptionText = styled.div`
    margin-bottom: 2rem;
`;

// Animations
const bellAnimation = keyframes`
    0% { transform: rotate(0); }
    10% { transform: rotate(30deg); }
    20% { transform: rotate(0); }
    80% { transform: rotate(0); }
    90% { transform: rotate(-30deg); }
    100% { transform: rotate(0); }
`;

const radAnimation = keyframes`
    0% { transform: translateX(0); }
    10% { transform: translateX(6px); }
    20% { transform: translateX(0); }
    80% { transform: translateX(0); }
    90% { transform: translateX(-6px); }
    100% { transform: translateX(0); }
`;

const zoomAnimation = keyframes`
    0% { opacity: 0; transform: scale(0); }
    10% { opacity: 1; transform: scale(1); }
    50% { opacity: 1; }
    51% { opacity: 0; }
    100% { opacity: 0; }
`;

// Notification Styles
const NotificationBox = styled.div`
    position: relative;
    z-index: 99;
    width: 50px;
    height: 50px;
    text-align: center;
    left: 0.5rem;
    bottom: 1.5rem;
`;

const NotificationBell = styled.div`
    animation: ${bellAnimation} 1s 1s both infinite;
    
    & > * {
        display: block;
        margin: 0 auto;
        background-color: #D5D274;
    }
`;

const BellTop = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 3px 3px 0 0;
`;

const BellMiddle = styled.span`
    width: 25px;
    height: 25px;
    margin-top: -1px;
    border-radius: 12.5px 12.5px 0 0;
`;

const BellBottom = styled.span`
    position: relative;
    z-index: 0;
    width: 32px;
    height: 2px;
    
    &::before, &::after {
        content: '';
        position: absolute;
        top: -4px;
    }

    &::before {
        left: 1px;
        border-bottom: 4px solid #D5D274;
        border-right: 0 solid transparent;
        border-left: 4px solid transparent;
    }

    &::after {
        right: 1px;
        border-bottom: 4px solid #D5D274;
        border-right: 4px solid transparent;
        border-left: 0 solid transparent;
    }
`;

const BellRad = styled.span`
    width: 8px;
    height: 4px;
    margin-top: 2px;
    border-radius: 0 0 4px 4px;
    animation: ${radAnimation} 1s 2s both infinite;
`;

const NotificationCount = styled.span`
    position: absolute;
    z-index: 1;
    top: -6px;
    right: -6px;
    width: 30px;
    height: 30px;
    line-height: 27px;
    font-size: 18px;
    border-radius: 50%;
    background-color: #DE6666;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    animation: ${zoomAnimation} 3s 3s both infinite;
`;

//all styling 
//main container 
const InfoContainer = styled.div`
    background: #F8FCFF;
    height: auto;
    padding: 80px 0;
    transition: 0.375s;

    @media screen and (max-width: 1700px){
        padding: 90px 0;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        padding: 80px 0;
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        padding: 60px 0;
        transition: 0.375s;
    }

    @media screen and (max-width: 480px){
        padding: 40px 0;
        transition: 0.375s;
    }
`;








