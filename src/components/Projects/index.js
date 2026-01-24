/* Imports */
import React, { useState, useEffect } from 'react';
import Aos from "aos";
import styled from "styled-components";
import { colors } from "../globals/colors";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../globals/font.css';

/* Main */
const Projects = ({ lightBg, id, topLine, description }) => {
    const [current, setCurrent] = useState(0);

    //controls fade in animation time 
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const projects = [
        {
            title: "Hack The North 2022",
            link: "https://github.com/HTN-heAR",
            desc: "HTN 2022"
        },
        {
            title: "UofT Hacks X",
            link: "https://github.com/UofTHacks-HealthExplore",
            desc: "UofT Hacks X"
        },
        {
            title: "DeltaHacks IX",
            link: "https://github.com/DeltaHacks-WebOfLife",
            desc: "DeltaHacks IX"
        },
        {
            title: "UofT Hacks XI",
            link: "https://github.com/UofTHacks-XI",
            desc: "UofT Hacks XI"
        }
    ];

    const length = projects.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(projects) || projects.length <= 0) {
        return null;
    }

    const getSlideStyle = (index) => {
        const isActive = index === current;
        const isPrev = index === (current - 1 + length) % length;
        const isNext = index === (current + 1) % length;
        
        let transform = 'translateX(0) scale(0)';
        let zIndex = 0;
        let opacity = 0;
        let pointerEvents = 'none'; // Default to non-clickable

        if (isActive) {
            transform = 'translateX(0) scale(1)';
            zIndex = 10;
            opacity = 1;
            pointerEvents = 'auto'; // Only active is clickable
        } else if (isPrev) {
            transform = 'translateX(-45%) scale(0.8)'; // Extended out slightly (was 15%)
            zIndex = 5;
            opacity = 0.6;
        } else if (isNext) {
            transform = 'translateX(45%) scale(0.8)'; // Extended out slightly (was 15%)
            zIndex = 5;
            opacity = 0.6;
        } else {
            // For the 4th item (hidden/behind)
             transform = 'scale(0.5)';
             zIndex = 1;
             opacity = 0;
        }

        return { transform, zIndex, opacity, pointerEvents };
    };

    return (
        <ProjectContainer id={id} lightBg={lightBg}>
            <SecondaryProjectContainer>
                <Description data-aos-once='true' data-aos="fade-up">
                    {topLine}
                </Description>

                <SecondaryDescription data-aos-once='true' data-aos="fade-up">
                    {description}
                </SecondaryDescription>

                <CarouselSection>
                    <ArrowLeft onClick={prevSlide} />
                    <ArrowRight onClick={nextSlide} />
                    
                    <SliderWrapper>
                        {projects.map((project, index) => {
                            const style = getSlideStyle(index);
                            return (
                                <Slide key={index} style={style}>
                                    <ProjectCard href={project.link} target="_blank" rel="noreferrer">
                                        <CardContent>
                                            <ProjectTitle>{project.title}</ProjectTitle>
                                            <ProjectDesc>{project.desc}</ProjectDesc>
                                            <LinkIcon>
                                                <FiExternalLink />
                                                <span>View Repository</span>
                                            </LinkIcon>
                                        </CardContent>
                                    </ProjectCard>
                                </Slide>
                            );
                        })}
                    </SliderWrapper>
                </CarouselSection>
            </SecondaryProjectContainer>
        </ProjectContainer>
    );
};

export default Projects;

/* Styles */
const ProjectContainer = styled.div`
    width: 100%;
    background: ${({ lightBg }) => (lightBg ? '#F8FCFF' : 'black')};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
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

const CarouselSection = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px; /* Adds depth */
`;

const SliderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Slide = styled.div`
    position: absolute;
    width: 60%; 
    max-width: 800px;
    height: 400px;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Styles injected inline for dynamic transforms */
`;

const ArrowLeft = styled(FiChevronLeft)`
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 4rem;
    color: ${colors.mainGreen};
    z-index: 20;
    cursor: pointer;
    user-select: none;
    transition: 0.3s;

    &:hover {
        color: ${colors.secondaryGreen};
        scale: 1.1;
    }

    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
        left: 10px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
    }
`;

const ArrowRight = styled(FiChevronRight)`
    position: absolute;
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 4rem;
    color: ${colors.mainGreen};
    z-index: 20;
    cursor: pointer;
    user-select: none;
    transition: 0.3s;

    &:hover {
        color: ${colors.secondaryGreen};
        scale: 1.1;
    }

    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
        right: 10px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 50%;
    }
`;

const ProjectCard = styled.a`
    width: 100%;
    height: 100%;
    background: ${colors.mainGreen};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.2);
    }
`;

const CardContent = styled.div`
    text-align: center;
    color: white;
    padding: 2rem;
`;

const ProjectTitle = styled.h2`
    font-family: "Raleway", sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

const ProjectDesc = styled.p`
    font-family: "Raleway", sans-serif;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
`;

const LinkIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    background: rgba(255,255,255,0.2);
    padding: 10px 20px;
    border-radius: 30px;
    transition: 0.3s;

    ${ProjectCard}:hover & {
        background: rgba(255,255,255,0.3);
    }
`;

