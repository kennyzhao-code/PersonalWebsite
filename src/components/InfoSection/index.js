// all imports 
import "aos/dist/aos.css"
import Aos from "aos"
import React, { useEffect } from 'react'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import './image.css'


const InfoSection = ({lightBg, id, imgStart, topLine, darkText, description, description2}) => {
    
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
                                
                                <TopLine data-aos-once='true' data-aos="fade-up">
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
    height: 500px;

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
`

//main row
const InfoRow = styled.div`
    display: grid;
    margin-left: 3rem;
    grid-auto-columns: minmax(auto, 1fr); 
    grid-column-gap: 3rem;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )}; 
    width: 100%;

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

//column 1
const Column1 = styled.div`
    margin-bottom: 1rem; 
    padding: 0 15px; 
    grid-area: col1; 

    
`

//column 2
const Column2 = styled.div`
    margin-top: 5rem;
    padding: 0 15px; 
    grid-area: col2; 
`

//text wrapper
const TextWrapper = styled.div`
    padding-top: 4rem; 
    padding-bottom: 0; 

    @media screen and (max-width: 480px){
        position: relative;
        right: 1rem;
    }
`

const TopLine = styled.p`
    color: #897CBF; 
    font-size: 80px; 
    position: relative;
    font-weight: 700; 
    letter-spacing: 1.4px; 
    font-style: italic;
    display: flex;

    @media screen and (max-width: 768px){
        top: 0;
    }

`


const Subtitle = styled.p`
    width: 800px; 
    margin-bottom: 2rem;
    margin-left: 0.5rem;
    font-size: 30px; 
    line-height: 40px; 
    color: ${({darkText}) => (darkText ? 'white' : ' #897CBF')}; 
`

const Subtitle2 = styled.p`
    width: 800px; 
    margin-bottom: 2rem;
    margin-top: 2rem; 
    margin-left:  0.5rem;
    font-size: 30px; 
    line-height: 40px; 
    color: ${({darkText}) => (darkText ? 'white' : ' #897CBF')}; 
`


const ImgWrap = styled.div`
    width: 680px; 
    height: 415px;
    border: #897CBF;
    border-radius: 10px;
    background: #897CBF;
    display: flex;
    justify-content: center;
    align-items: center;

`




