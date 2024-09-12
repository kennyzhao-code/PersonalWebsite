/* Imports */
import React from 'react';
import {FaInstagram, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { colors } from '../globals/colors';
import '../globals/font.css';

/* Main */
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
    
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = 'hero' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {-500}>Kenny Zhao</SocialLogo>
                        <WebsiteRights>Kenny Zhao © {new Date().getFullYear()} 
                            <span>Designed in collaboration with <a href = 'https://www.instagram.com/jaydench4n/' target = '_blank' rel = 'noreferrer'>@JaydenChan</a> </span>
                        </WebsiteRights>
                        
                        
                        <SocialIcons>

                        <SocialIconLink color = "#f08080" href = 'https://www.instagram.com/kennyzhao_/' target = '_blank' aria-label="Instagram"  rel="noreferrer">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink color = "#0077B5" href = 'https://www.linkedin.com/in/kenny-zhao-283b73213/' target = '_blank' aria-label="Linkedin"  rel="noreferrer">
                            <FaLinkedin />
                        </SocialIconLink>

                        <SocialIconLink color = "#9381ff" href = 'https://github.com/kennyzhao-code' target = '_blank' aria-label="Github" rel="noreferrer">
                            <FaGithub />
                        </SocialIconLink>

                        <SocialIconLink color = "#1DA1F2" href = 'https://twitter.com/KennyZhao20' target = '_blank' aria-label="Twitter"  rel="noreferrer">
                            <FaTwitter />
                        </SocialIconLink>

                        </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
};

export default Footer;

/* Styles */
export const FooterContainer = styled.footer`
    background-color: ${colors.backfill};
`;

export const FooterWrap = styled.div`
    padding: 48px 24px; 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto; 
    border-top: solid 1px ${colors.mainPurple};
    transition: 0.375s;


    @media screen and (max-width: 1100px)
    {
        max-width: 800px;
        transition: 0.375s;

    }

    @media screen and (max-width: 820px)
    {
        max-width: 400px;
        transition: 0.375s;
    }

    @media screen and (max-width: 480px)
    {
        max-width: 300px;
        transition: 0.375s;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px; 
    width: 100%; 
`;

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
`;

export const SocialLogo = styled(Link)`
    font-family: 'Raleway', sans-serif;
    color: ${colors.mainPurple};
    justify-self: start; 
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem; 
    display: flex; 
    align-items: center; 
    margin-bottom: 16px; 
    font-weight: 400; 

    &:hover {
        color: ${colors.secondaryPurple};
        transition: 0.5s ease;
    }
`;

export const WebsiteRights = styled.small`
    font-family: 'Raleway', sans-serif;
    color: ${colors.mainPurple};
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 16px; 
    display: flex;
    flex-direction: column;
    text-align: center;
    
    span {
        font-size: 0.9rem;
        font-weight: 300;
        margin-top: 5px;
        color: ${colors.secondaryPurple};

        a {
            color: ${colors.secondaryPurple};
            text-decoration: none;
            font-weight: 400;
            transition: 0.5s ease;
        }
    }
`;

export const SocialIcons = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 170px; 
    gap: 1rem;
    margin-bottom: 1rem;
    /* border: 1px solid red; */

`
//icons 
export const SocialIconLink = styled.a`
  color: ${(props) => props.color || '#000'}; /* Default color is black if not provided */
  font-size: 30px;

  &:hover {
    scale: 1.1;
    transition: 0.3s ease;
  }
`;

