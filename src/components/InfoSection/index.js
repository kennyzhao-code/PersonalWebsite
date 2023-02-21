// all imports 
import "aos/dist/aos.css"
import Aos from "aos"
import React, { useEffect } from 'react'
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import './image.css'
import '../globals/font.css'


const InfoSection = ({lightBg, id, imgStart, topLine, darkText, description, description2}) => {
    
    //controls fade in animation time 
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 
    
    return (
        <>
            <InfoContainer name ="aboutMe" lightBg = {lightBg} id = {id}>
                
                <InfoWrapper>
                    
                    <InfoRow data-aos-once='true' data-aos="fade-up" imgStart={imgStart}>

                        <Column1>
                            
                            <TextWrapper>                     
                                
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

                                <Subtitle  darkText={darkText}>{description} <br/><br/> {description2}</Subtitle>
                                    

                            </TextWrapper>
                        </Column1>
                        
                        <Column2 >
                            <ImgWrap>
                            <StaticImage
                                className = 'Myself'
                                src= '../../images/myself.jpg'
                                alt="me"
                                placeholder="blurred"
                                formats={["auto", "webp", "avif"]}
                                quality= {100}
               
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
    height: 700px;
    transition: 0.375s;




    @media screen and (max-width: 1700px){
        height: 700px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        height: 850px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        height: 1450px;
        transition: 0.375s;
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
    transition: 0.375s;


    @media screen and (max-width: 1100px){
        margin-left: 4rem;
        transition: 0.375s;

    }

    @media screen and (max-width: 700px){
        margin-left: 0;
        right: 4.5rem;
        padding-right: 0;
        transition: 0.375s;
    }
`

//main row
const InfoRow = styled.div`
    display: grid;
    margin-left: 3rem;
    grid-auto-columns: minmax(auto, 1fr); 
    grid-column-gap: 0.7rem;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )}; 
    width: 100%;
    transition: 0.375s;


    @media screen and (max-width: 1700px) {
        grid-column-gap: 0;
        transition: 0.375s;

    }

    @media screen and (max-width: 1100px) {
        transition: 0.375s;
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

//column 1
const Column1 = styled.div`
    margin-bottom: 1rem; 
    padding: 0 15px; 
    grid-area: col1; 
    
    
    @media screen and (max-width: 1700px){
        margin-top: 5rem;
    }
    

    
`

//column 2
const Column2 = styled.div`
    margin-top: 5rem;
    grid-area: col2; 
    position: relative;
    right: 0.7rem;

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
    font-size: 65px; 
    position: relative;
    font-weight: 700;
    font-family: 'Raleway', sans-serif; 
    letter-spacing: 1.4px; 
    font-style: italic;
    display: flex;
`


const Subtitle = styled.p`
    width: 750px; 
    margin-bottom: 2rem;
    margin-left: 0.5rem;
    font-size: 30px; 
    line-height: 40px; 
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    transition: 0.375s;
    color: ${({darkText}) => (darkText ? 'white' : ' #897CBF')};


    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 600px;  
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 430px;  
    }


`



const ImgWrap = styled.div`
    width: 680px; 
    height: 415px;
    border: #897CBF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

`


/*const Subtitle2 = styled.p`
    width: 750px; 
    margin-bottom: 2rem;
    margin-top: 2rem; 
    margin-left:  0.5rem;
    font-size: 30px; 
    line-height: 40px; 
    font-family: 'OktaNeueLight', sans-serif;
    font-weight: bold;
    transition: 0.375s;
    color: ${({darkText}) => (darkText ? 'white' : ' #897CBF')};
    
    @media screen and (max-width: 1700px){
        transition: 0.375s;
        width: 600px;  
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        width: 430px;  
    }

  
`*/ 




