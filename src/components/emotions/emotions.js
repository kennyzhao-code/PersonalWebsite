// all imports 
import "aos/dist/aos.css"
import Aos from "aos"
import React, { useEffect } from 'react'
import styled from "styled-components"
import {colors} from "../../components/globals/colors"
import './emotions.css'

const Emotions = ({lightBg, id}) => {
    
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 
    
    return (
        <>
            <EmotionsContainer name ="emotions" lightBg = {lightBg} id = {id}>
            
                <EmotionsWrapper>
                        <EmotionsRow>
                            
                            <EmotionsBlock>
                                <EmotionSecondBlock>
                                <EmotionText>Current Status:</EmotionText>
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
                                    <EmotionText>Current Workload:</EmotionText>
                                    <div class="faceMeh">
                                            <div class="eye"></div>
                                            <div class="eye right"></div>
                                            <div class="mouth meh"></div>
                                        </div>
                                </EmotionSecondBlock>
                            </EmotionsBlock>

                            <EmotionsBlock>
                                <EmotionSecondBlock>
                                    <EmotionText>Current Bicthes:</EmotionText>
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
    )
}

export default Emotions


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
const EmotionsContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    height: 300px;

    @media screen and (max-width: 768px){
        padding: 100px 0; 
    }
`

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
`

//main row
const EmotionsRow = styled.div`
    display: grid;
    margin-right: 3rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 6rem;
    align-items: center;
    width: 100%;
    

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

//styling for emotions
const EmotionsBlock = styled.div`
    width: 450px;
    height: 210px;
    border-radius: 15px;
    border: 3px solid ${colors.mainPurple};
    align-items: center;
    display: flex;
    justify-content: center;
    
`
const EmotionSecondBlock = styled.div`
    display: flex;
    border: 3px solid ${colors.mainPurple};
    justify-content: center;
    position: absolute;
    width: 350px;
    
`

//text 
const EmotionText = styled.p`
    font-size: 1.5rem;
    color: ${colors.mainPurple};
    position: absolute;
    left: 0;
   
`


