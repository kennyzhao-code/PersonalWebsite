import "aos/dist/aos.css"
import Aos from "aos"
import React, { useEffect } from 'react'
import {AboutMeIconsLinkInsta, AboutMeIconsLinkLink, AboutMeIconsLinkDis, AboutMeIconsLinkGit, AboutMeIcons, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Subtitle, ImgWrap, Img, Subtitle2} from './InfoElements'
import aboutMePic from '../../images/aboutMe.svg'
import {FaInstagram, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'

const InfoSection = ({lightBg, id, imgStart, topLine, darkText, description, alt, description2}) => {
    
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 
    
    return (
        <>
            <InfoContainer name ="aboutMe" lightBg = {lightBg} id = {id}>

                <TopLine data-aos-once='true' data-aos="fade-up">{topLine}</TopLine>

                <InfoWrapper>
                    
                    <InfoRow imgStart={imgStart}>

                        <Column1>
                            <TextWrapper>                        

                                <Subtitle data-aos-once='true' data-aos="fade-up" darkText={darkText}>{description}</Subtitle>
                                <Subtitle2 data-aos-once='true' data-aos="fade-up" darkText={darkText}>{description2}</Subtitle2>
                                    <AboutMeIcons data-aos-once='true' data-aos="fade-up">

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
                                
                                    </AboutMeIcons>

                            </TextWrapper>
                        </Column1>
                        
                        <Column2>
                            <ImgWrap>
                            <Img data-aos-once='true' data-aos="fade-up" src={aboutMePic} alt={alt}/>
                            </ImgWrap>
                        </Column2>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection


