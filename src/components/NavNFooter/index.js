/* Imports */
import React from 'react';

import { FaInstagram, FaDiscord, FaStrava, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

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
                        <WebsiteRights>Kenny Zhao © {new Date().getFullYear()} 
                            <span>Designed in collaboration with <a href = 'https://www.instagram.com/jaydench4n/' target = '_blank' rel = 'noreferrer'>@JaydenChan</a> </span>
                        </WebsiteRights>
                        
                        
                        <SocialIcons>

                            <FaInstagram color = "#DD2A7B" size={24} onClick={() => window.open("https://www.instagram.com/kennyzhao_/","_blank")} style={{cursor: 'pointer'}} />
                            <FaDiscord color = "#5865F2" size={24} onClick={() => window.open("https://discord.com/users/278684602107953152","_blank")} style={{cursor: 'pointer'}} />
                            <FaStrava color = "#FC4C02" size={24} onClick={() => window.open("https://www.strava.com/athletes/66606475","_blank")} style={{cursor: 'pointer'}} />
                            <BsTwitterX color = "#000000" size={24} onClick={() => window.open("https://x.com/KennyZhao20","_blank")} style={{cursor: 'pointer'}} />
                            <FaGithub color = "#cf7cfc" size={24} onClick={() => window.open("https://github.com/kennyzhao-code","_blank")} style={{cursor: 'pointer'}} />
                            <FaLinkedin color = "#0072b1" size={24} onClick={() => window.open("https://www.linkedin.com/in/kennyy-zhao","_blank")} style={{cursor: 'pointer'}} />   
                            <SiDevpost color = "#57C1FF" size={24} onClick={() => window.open("https://devpost.com/kennyzhao-code","_blank")} style={{cursor: 'pointer'}} />
                        
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
    max-width: 1500px;
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
    width: 100%; 
`;

export const SocialMediaWrap = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    margin: 10px auto 0 auto; 
    
    @media screen and (max-width: 820px)
    {
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const WebsiteRights = styled.small`
    font-family: 'Raleway', sans-serif;
    color: ${colors.mainPurple};
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    text-align: left;
    
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
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
`
//icons 
export const SocialIconLink = styled.a`
  color: ${(props) => props.color || '#000'}; /* Default color is black if not provided */
  font-size: 24px;

  &:hover {
    scale: 1.1;
    transition: 0.3s ease;
  }
`;

