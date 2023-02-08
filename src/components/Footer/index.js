import React from 'react'
import {FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaSnapchat} from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { colors } from '../globals/colors'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = 'hero' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {-500}>Kenny Zhao</SocialLogo>
                        <WebsiteRights>Kenny Zhao © {new Date().getFullYear()} </WebsiteRights>
                        
                        <SocialIcons>

                        <SocialIconLinkInsta href = 'https://www.instagram.com/kennyzhao_/' target = '_blank' aria-label="Instagram"  rel="noreferrer">
                            <FaInstagram />
                        </SocialIconLinkInsta>

                        <SocialIconLinkLink href = 'https://www.linkedin.com/in/kenny-zhao-283b73213/' target = '_blank' aria-label="Linkedin"  rel="noreferrer">
                            <FaLinkedin />
                        </SocialIconLinkLink>

                        <SocialIconLinkGit href = 'https://github.com/kennyzhao-code' target = '_blank' aria-label="Github" rel="noreferrer">
                            <FaGithub />
                        </SocialIconLinkGit>

                        <SocialIconLinkDis href = 'https://twitter.com/KennyZhao20' target = '_blank' aria-label="Twitter"  rel="noreferrer">
                            <FaTwitter />
                        </SocialIconLinkDis>

                        <SocialIconLinkSnap href = 'https://t.snapchat.com/EAyH5MmN' target = '_blank' aria-label="Snapchat"  rel="noreferrer">
                            <FaSnapchat />
                        </SocialIconLinkSnap>
                    
                        </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

export const FooterContainer = styled.footer`
    background-color: ${colors.backfill};
`

export const FooterWrap = styled.div`
    padding: 48px 24px; 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto; 
    border-top: solid 1px ${colors.mainPurple};
`

export const SocialMedia = styled.section`
    max-width: 1000px; 
    width: 100%; 
`

export const SocialMediaWrap = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    max-width: 1100px;
    margin: 40px auto 0 auto; 

    @media screen and (max-width: 820px)
    {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    font-family: 'OktaNeueLight', sans-serif;
    color: ${colors.mainPurple};
    justify-self: start; 
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem; 
    display: flex; 
    align-items: center; 
    margin-bottom: 16px; 
    font-weight: bold; 

    &:hover {
        color: ${colors.secondaryPurple};
        transition: 0.5s ease;
    }

`

export const WebsiteRights = styled.small`
    font-family: 'OktaNeueLight', sans-serif;
    color: ${colors.mainPurple};
    font-size: 1rem;
    margin-bottom: 16px; 

`

export const SocialIcons = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 120px; 
    margin-bottom: 30px;
    margin-right: 70px;

`

//icons 
export const SocialIconLinkInsta = styled.a`
    color: #f08080;
    font-size: 30px; 

    &:hover {
        scale: 1.1;
        transition: 0.3s ease;
    }
`

export const SocialIconLinkLink = styled.a`
    color: #71a5de;
    font-size: 30px;
    margin-left: 10px; 

    &:hover {
        scale: 1.1;
        transition: 0.3s ease;
    }
`

export const SocialIconLinkGit = styled.a`
    color: #9381ff;
    font-size: 30px; 
    margin-left: 10px; 

    
    &:hover {
        scale: 1.1;
        transition: 0.3s ease;
    }
`

export const SocialIconLinkDis = styled.a`
    color: 	#1DA1F2;
    font-size: 30px; 
    margin-left: 10px; 


    &:hover {
        scale: 1.1;
        transition: 0.3s ease;
    }
`

export const SocialIconLinkSnap = styled.a`
    color: #FEF24E;
    font-size: 30px; 
    margin-left: 10px; 

    &:hover {
        scale: 1.1;
        transition: 0.3s ease;
    }
`

