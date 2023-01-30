// all imports 
import "aos/dist/aos.css"
import Aos from "aos"
import React, { useEffect } from 'react'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import './image.css'

//import {FaInstagram, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'

const InfoSection = ({lightBg, id, imgStart, topLine, darkText, description, alt, description2}) => {
    
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 
    
    return (
        <>
            <InfoContainer name ="aboutMe" lightBg = {lightBg} id = {id}>

            
                <InfoWrapper>
                    
                    <InfoRow imgStart={imgStart}>

                        <Column1>
                            
                            <TextWrapper>                     
                                
                                <TopLine data-aos-once='true' data-aos="fade-up">{topLine}</TopLine>

                                <Subtitle data-aos-once='true' data-aos="fade-up" darkText={darkText}>{description}</Subtitle>
                                <Subtitle2 data-aos-once='true' data-aos="fade-up" darkText={darkText}>{description2}</Subtitle2>
                                    

                            </TextWrapper>
                        </Column1>
                        
                        <Column2>
                            <ImgWrap data-aos-once='true' data-aos="fade-up">
                            <StaticImage
                                className = 'Myself'
                                src= '../../images/myself.png'
                                alt="me"
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                layout="fixed"
                                quality= {100}
                                width={650}
               
                                />
                            </ImgWrap>
                        </Column2>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection


/**<AboutMeIcons data-aos-once='true' data-aos="fade-up">

                                    <AboutMeIconsLinkInsta href = 'https://www.instagram.com/kennyzhao_/' target = '_blank' aria-label="Instagram">
                                        <FaInstagram />
                                    </AboutMeIconsLinkInsta>

                                    <AboutMeIconsLinkLink href = 'https://www.linkedin.com/in/kenny-zhao-283b73213/' target = '_blank' aria-label="Linkedin">
                                        <FaLinkedin/>
                                    </AboutMeIconsLinkLink>

                                    <AboutMeIconsLinkGit href = 'https://github.com/kennyzhao-code' target = '_blank' aria-label="Github">
                                        <FaGithub />
                                    </AboutMeIconsLinkGit>

                                    <AboutMeIconsLinkDis href = 'https://twitter.com/KennyZhao20' target = '_blank' aria-label="Twitter">
                                        <FaTwitter/>
                                    </AboutMeIconsLinkDis>
                                
                                    </AboutMeIcons> */


// all styling 


//main container 
const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};

    @media screen and (max-width: 768px){
        padding: 100px 0; 
    }
`

//main wrapper
const InfoWrapper = styled.div`
    display: grid; 
    z-index: 1; 
    height: 900px; 
    width: 100%; 
    margin-right: auto; 
    margin-left: auto; 
    padding: 0 24px; 
    justify-content: center; 
    position: relative;
    bottom: 7rem;
    border: 1px solid black;
`

//main row
const InfoRow = styled.div`
    display: grid;
    margin-left: 50px;
    grid-auto-columns: minmax(auto, 1fr); 
    grid-column-gap: 100px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )}; 
    border: 1px solid black;
    width: 100%;

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

//column 1
const Column1 = styled.div`
    margin-bottom: 15px; 
    padding: 0 15px; 
    grid-area: col1; 

    
`

//column 2
const Column2 = styled.div`
    margin-bottom: 15px; 
    padding: 0 15px; 
    grid-area: col2; 
`

//text wrapper
const TextWrapper = styled.div`
    padding-top: 50px; 
    padding-bottom: 0; 

    @media screen and (max-width: 480px){
        position: relative;
        right: 1rem;
    }
`

export const TopLine = styled.p`
    color: #897CBF; 
    font-size: 80px; 
    position: relative;
    line-height: 16px; 
    font-weight: 700; 
    letter-spacing: 1.4px; 
    font-style: italic;

    @media screen and (max-width: 768px){
        top: 0;
    }

`


const Subtitle = styled.p`
    width: 800px; 
    margin-bottom: 35px;
    margin-top: 80px; 
    margin-left: 10px;
    font-size: 30px; 
    line-height: 35px; 
    color: ${({darkText}) => (darkText ? 'white' : ' #897CBF')}; 
`

const Subtitle2 = styled.p`
    width: 800px; 
    margin-bottom: 35px;
    margin-top: 24px; 
    margin-left: 10px;
    font-size: 30px; 
    line-height: 35px; 
    color: ${({darkText}) => (darkText ? 'white' : ' #897CBF')}; 
`


const ImgWrap = styled.div`
    max-width: 600px; 
    height: 350px;
    border: #897CBF;
    border-radius: 10px;
    background: #897CBF;
    display: flex;
    justify-content: center;
    align-items: center;

`

const AboutMeIcons = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 240px; 
    margin-bottom: 30px;
`

//icons 

const AboutMeIconsLinkInsta = styled.a`
    color: #f08080;
    font-size: 30px; 

    &:hover {
        color: #ffc7ad;
    }
`
const AboutMeIconsLinkLink = styled.a`
    color: #71a5de;
    font-size: 30px; 

    &:hover {
        color: #bee1e6;
    }
`
const AboutMeIconsLinkGit = styled.a`
    color: #9381ff;
    font-size: 30px; 
    
    &:hover {
        color: #bdb2ff;
    }
`
const AboutMeIconsLinkDis = styled.a`
    color: #84dcc6;
    font-size: 30px; 

    &:hover {
        color: #a5ffd6;
    }
`


