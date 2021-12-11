import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLinkInsta, SocialIconLinkLink, SocialIconLinkDis, SocialIconLinkGit} from './FooterElements'
import {FaInstagram, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>

                <FooterLinksContainer>
                    <FooterLinksWrapper>

                        <FooterLinkItems>
                                <FooterLink to = 'hero' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {-500}>Home</FooterLink>
                                <FooterLink to = 'aboutMe' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {50}>About Me</FooterLink>
                                <FooterLink to = 'experiences' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {-200}>Experiences</FooterLink>
                                <FooterLink to = 'skillsHobbies' smooth = 'linear' duration = {500} spy = {true} exact ='true'>Skills/Hobbies</FooterLink>
                                <FooterLink to = 'projects' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {50}>Projects</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = 'hero' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {-500}>Kenny Zhao</SocialLogo>
                        <WebsiteRights>Kenny Zhao © {new Date().getFullYear()} </WebsiteRights>
                        
                        <SocialIcons>

                        <SocialIconLinkInsta href = 'https://www.instagram.com/kennyzhao_/' target = '_blank' aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLinkInsta>

                        <SocialIconLinkLink href = 'https://www.linkedin.com/in/kenny-zhao-283b73213/' target = '_blank' aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLinkLink>

                        <SocialIconLinkGit href = 'https://github.com/kennyzhao-code' target = '_blank' aria-label="Github">
                            <FaGithub />
                        </SocialIconLinkGit>

                        <SocialIconLinkDis href = 'https://twitter.com/KennyZhao20' target = '_blank' aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLinkDis>
                    
                        </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
