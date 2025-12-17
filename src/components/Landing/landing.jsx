/* Imports */
import React from 'react';
import styled from "styled-components";
import resume from '../../images/resume.pdf';
import bgImage from '../../images/me.jpg';

import Typewriter from "./typewritter";
import Shuffle from "./shuffle";
import { FaInstagram, FaDiscord, FaStrava, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

/* Main */
const LandingSection = () => {
    
    return (
        <>
            <LandingContainer >
                <LandingTextContainer>
                    <LandingTitle>
                        Hi, my name is Kenny Zhao!
                    </LandingTitle>
                    <LandingBody>Nothing fancy to see here. Just a simple website about me. I'm a computer science student studying at McMaster University. 
                                 My biggest career goal is to work in the aerospace industry with interests in data engineering, machine learning and general software development.
                                 I have worked on various projects including VR/AR applications, machine learning models, satellite systems and much more. Additionally, besides my academic pursuits, 
                                 I find joy in playing sports (shredding the snow on my skis), creating music (jamming on my guitar), 
                                 playing video games (late night gaming sessions) and much more! 
                                <br/>
                                <br/>
                                As of now, I am currently studying my fourth year, previously worked at the <div style={{background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Canadian Space Agency </div>
                    </LandingBody>
                </LandingTextContainer>

                <a href={resume} target="_blank" rel="noopener noreferrer">
                    <ResumeContainer>
                        <Shuffle
                            text="RESUME"
                            shuffleDirection="right"
                            duration={0.5}
                            animationMode="evenodd"
                            shuffleTimes={2}
                            ease="power3.out"
                            stagger={0.05}
                            threshold={0.1}
                            triggerOnce={false}
                            triggerOnHover={true}
                            respectReducedMotion={true}
                            className="text-white-500"
                        />
                    </ResumeContainer>
                </a>

                <FooterContainer>
                        <div>
                           © {new Date().getFullYear()}, follow me on 
                                <Typewriter
                                text={[
                                    " Instagram",
                                    " Discord",
                                    " Strava",
                                    " X",
                                    " GitHub",
                                    " LinkedIn",
                                    " Devpost",
                                ]}
                                speed={80}
                                className="text-white-500"
                                // waitTime={1500}
                                // deleteSpeed={40}
                                cursorChar={"_"}
                                />
                            </div>
                        <FooterSocials>
                            <FaInstagram color = "#DD2A7B" size={25} onClick={() => window.open("https://www.instagram.com/kennyzhao_/","_blank")} style={{cursor: 'pointer'}} />
                            <FaDiscord color = "#5865F2" size={25} onClick={() => window.open("https://discord.com/users/278684602107953152","_blank")} style={{cursor: 'pointer'}} />
                            <FaStrava color = "#FC4C02" size={25} onClick={() => window.open("https://www.strava.com/athletes/66606475","_blank")} style={{cursor: 'pointer'}} />
                            <BsTwitterX color = "#FFFFFF" size={25} onClick={() => window.open("https://x.com/KennyZhao20","_blank")} style={{cursor: 'pointer'}} />
                            <FaGithub color = "#cf7cfc" size={25} onClick={() => window.open("https://github.com/kennyzhao-code","_blank")} style={{cursor: 'pointer'}} />
                            <FaLinkedin color = "#0072b1" size={25} onClick={() => window.open("https://www.linkedin.com/in/kennyy-zhao","_blank")} style={{cursor: 'pointer'}} />   
                            <SiDevpost color = "#57C1FF" size={25} onClick={() => window.open("https://devpost.com/kennyzhao-code","_blank")} style={{cursor: 'pointer'}} />
                        </FooterSocials>
                </FooterContainer>
            </LandingContainer>
        </>
    );
};

export default LandingSection;

// global container
const LandingContainer = styled.div`

    /* image url */
    background: 
        linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)),
        url(${bgImage});

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    /* ensure full screen on mobile/web */
    width: 100%;
    height: 100dvh;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
   
`;

// text container 
const LandingTextContainer = styled.div`
    justify-content: center;
    align-items: center;
    color: white;
    width: 55%;

    @media (max-width: 480px) {
        width: 90%;
    }

`; 

// main title
const LandingTitle = styled.h1`
    font-size: clamp(1rem, 4vw, 3rem);
    margin-left: 2rem;
    padding: 1rem;
    color: white; 
    
`;

// body text
const LandingBody = styled.p`
    font-size: clamp(0.8rem, 2vw, 1.5rem);
    margin: 2rem;   
    margin-top: 0;
    padding: 1rem;
    padding-top: 0;
    color: white;
`;

/* Resume styles */
const ResumeContainer = styled.div`
    cursor: pointer;
    color: white;
    display: flex;
    font-size: clamp(1rem, 3vw, 2rem);
`;

/* Footer styles */
const FooterContainer = styled.div`
    position: absolute;
    bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    color: white;
`;

const FooterSocials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    gap: 1rem;
    flex-direction: row;
`;  