/* Imports */
import React, { useState, useEffect } from 'react';
import Aos from "aos";
import styled from "styled-components";
import { colors } from "../globals/colors";
import { FaGithub } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import '../globals/font.css';

/* Main */
const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    //controls fade in animation time 
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const projects = [
        {
            title: "LavaLock",
            github: "https://github.com/anthonyhana04/LavaLock_DH_XII",
            devpost: "https://devpost.com/software/lavalock",
            desc: "Security Powered by Real-World Chaos. Made and winner at DeltaHacks XII Hackathon.",
            id: "01"
        },
        {
            title: "Celestial Classfier",
            github: "https://github.com/kennyzhao-code/Celestial-Classifier",
            desc: "Charting Exoplanet Habitability. Created as the final project for COMPSCI 4AL3: Applications of Machine Learning.",
            id: "02"
        },
        {
            title: "Nos Album",
            github: "https://github.com/UofTHacks-XI",
            devpost: "https://devpost.com/software/nos-album",
            desc: "Navigating Memories: A Spatial Journey Through Your Photo Story. Made during the UofTHacks XI Hackathon.",
            id: "03"
        },
        {
            title: "a conversation...",
            github: "https://github.com/UofTHacks-HealthExplore",
            devpost: "https://devpost.com/software/peaceful-promenade",
            desc: "AI-Powered Simulation for Mental Health and Inner Peace. Made during the UofTHacks X Hackathon.",
            id: "05"
        },
        {
            title: "HealthChain",
            github: "https://github.com/DeltaHacks-WebOfLife",
            devpost: "https://devpost.com/software/healthchain-hybn8i",
            desc: "Revolutionizing the Future of Digital Healthcare with Blockchain. Made and winner at DeltaHacks IX Hackathon.",
            id: "04"
        },
        {
            title: "heAR",
            github: "https://github.com/HTN-heAR",
            devpost: "https://devpost.com/software/hear-1pibsd",
            desc: "Augmented Reality and NLP for Enhanced Communication. Made during the Hack The North 2022 Hackathon.",
            id: "06"
        }
    ];

    return (
        <ProjectContainer id="project">
            <SecondaryProjectContainer>
                <Description data-aos-once='true' data-aos="fade-up">
                    my works; both present and past...
                </Description>

                <SecondaryDescription data-aos-once='true' data-aos="fade-up">
                    I find hackathons incredibly fun and engaging. Below are some of my favorite projects that I’ve worked on in the past. Click on any of them to explore their repositories and learn more!
                </SecondaryDescription>

                <AccordionContainer>
                    {projects.map((project, index) => (
                        <AccordionItem 
                            key={index} 
                            active={index === activeIndex} 
                            onClick={() => setActiveIndex(index)}
                        >
                            <AccordionImageContainer active={index === activeIndex}>
                                {/* Placeholder for project image/gradient */}
                                <ProjectVisual active={index === activeIndex} />
                                <ProjectContent active={index === activeIndex}>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <ProjectDesc>{project.desc}</ProjectDesc>
                                    <IconContainer>
                                        {project.github && (
                                            <IconLink href={project.github} target="_blank" rel="noreferrer">
                                                <FaGithub />
                                            </IconLink>
                                        )}
                                        {project.devpost && (
                                            <IconLink href={project.devpost} target="_blank" rel="noreferrer">
                                                <SiDevpost />
                                            </IconLink>
                                        )}
                                    </IconContainer>
                                </ProjectContent>
                            </AccordionImageContainer>
                            
                            <CollapsedLabel active={index === activeIndex}>
                                <VerticalText>{project.title}</VerticalText>
                                <CollapsedNumber>{project.id}</CollapsedNumber>
                            </CollapsedLabel>
                        </AccordionItem>
                    ))}
                </AccordionContainer>

            </SecondaryProjectContainer>
        </ProjectContainer>
    );
};

export default Projects;

/* Styles */
const ProjectContainer = styled.div`
    width: 100%;
    min-height: 800px;
    background: #F8FCFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    overflow: hidden;
`;

const SecondaryProjectContainer = styled.div`
    width: 100%;
    max-width: 1550px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Description = styled.h1`
    color: ${colors.mainGreen};
    font-size: 60px;
    font-weight: 700;
    width: 100%;
    letter-spacing: 1.4px;
    font-style: italic;
    font-family: "Raleway", sans-serif;
    margin-bottom: 1rem;
    text-align: left;

    @media screen and (max-width: 480px){
        font-size: 35px;
    }
`;

const SecondaryDescription = styled.p`
    font-size: 1.8rem;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${colors.mainGreen};
    width: 100%;
    text-align: left;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px){
        font-size: 1.5rem;
    }
`;

const AccordionContainer = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    gap: 10px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;

const AccordionItem = styled.div`
    flex: ${({ active }) => (active ? '4' : '0.5')};
    height: 100%;
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    transition: flex 0.7s cubic-bezier(0.25, 1, 0.5, 1);
    background-color: ${colors.secondaryGreen};
    display: flex;
    flex-direction: column;

    &:hover {
         flex: ${({ active }) => (active ? '4' : '0.7')};
    }

    @media screen and (max-width: 768px) {
        flex: none;
        height: ${({ active }) => (active ? '500px' : '80px')};
        transition: height 0.7s cubic-bezier(0.25, 1, 0.5, 1);
    }
`;

const AccordionImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ active }) => active ? colors.mainGreen : '#111'};
    transition: all 0.5s ease;
    opacity: ${({ active }) => (active ? '1' : '0')};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const ProjectVisual = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%);
    opacity: ${({ active }) => active ? 1 : 0};
    transition: opacity 0.5s 0.3s;
`;

const ProjectContent = styled.div`
    position: relative;
    z-index: 10;
    text-align: center;
    color: white;
    opacity: ${({ active }) => (active ? '1' : '0')};
    transform: ${({ active }) => (active ? 'translateY(0)' : 'translateY(20px)')};
    /* Transition: enter with delay, exit instantly */
    transition: ${({ active }) => active ? 'opacity 0.5s 0.3s, transform 0.5s 0.3s' : 'opacity 0.1s 0s, transform 0.1s 0s'};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 400px; /* Prevent text squeezing */
    pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
`;

const ProjectTitle = styled.h2`
    font-family: "Raleway", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: white;
`;

const ProjectDesc = styled.p`
    font-family: "Raleway", sans-serif;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: rgba(255,255,255,0.9);
    max-width: 600px;
`;

const IconContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;

const IconLink = styled.a`
    color: white;
    font-size: 3.5rem;
    transition: 0.3s;
    opacity: 0.8;

    &:hover {
        transform: translateY(-2px);
    }
`;

const CollapsedLabel = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    opacity: ${({ active }) => (active ? '0' : '1')};
    transition: opacity 0.3s;
    pointer-events: none;
    z-index: 2;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        padding: 0 40px;
        align-items: center;
    }
`;

const VerticalText = styled.span`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: rgba(255,255,255,0.5);
    white-space: nowrap;
    letter-spacing: 2px;
    
    @media screen and (max-width: 768px) {
        writing-mode: horizontal-tb;
        transform: none;
        font-size: 1.5rem;
    }
`;

const CollapsedNumber = styled.span`
    font-family: "Raleway", sans-serif;
    font-size: 1.5rem;
    color: rgba(255,255,255,0.3);
    
    @media screen and (max-width: 768px) {
         font-size: 1.2rem;
    }
`;
