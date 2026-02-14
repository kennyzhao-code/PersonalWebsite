/**
 * Experiences page
 * 
 * Where I list all my experiences, both career and academic
 */

import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { colors } from "../globals/colors";
import { FiExternalLink } from 'react-icons/fi';
import '../globals/font.css';

import mistLogo from '../../images/mist_logo.png';
import presetLogo from '../../images/preset_logo.png';
import mcmasterLogo from '../../images/mcmaster_logo.png';
import csaLogo from '../../images/csa_logo.png';

const Experiences = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const experiences = [
        {
            title: "Mission Operations and Control Co-lead",
            company: "McMaster Interdisciplinary Satellite Team",
            date: "September 2023 - Present",
            description: [
                "Lead of the Mission Operations and Control (MOC) team as a Data Engineer, responsible for storing, visualizing, and maintaining satellite data, as well as scheduling and executing commands during operations. Furthermore, manage the reception, parsing, and storage of experimental data, utilizing Python, C and telemetry from ground station(s), resulting in a 67% increase in operational efficiency."
            ],
            link: "http://mstri.ca/",
            linkText: "Learn More",
            img: mistLogo
        },
        {
            title: "Research Data Engineer",
            company: "McMaster University",
            date: "May 2024 - August 2024",
            description: [
                "Led software development efforts as a research Data Engineer at the McMaster Interdisciplinary Satellite Team, overseeing the creation of Mission and Operations Control Software for the Team's CubeSat project, PRESET. Additionally, engineered a robust Dashboard for the team's HASP 2024 test integration and flight in Texas using React, Python, InfluxDB and Grafana to facilitating communication with the satellite for enhanced data visualization and transmission resulting in a 30% increase in data accessibility and efficiency."
            ],
            link: "http://mstri.ca/",
            linkText: "Learn More",
            img: presetLogo
        },
        {
            title: "COMPSCI 2GA3 Teaching Assistant",
            company: "McMaster University",
            date: "September 2024 - December 2024",
            description: [
                "Supported the instruction of tutorials for COMPSCI 2GA3 - Computer Architecture, mentoring students on advanced topics like logic gates, computer arithmetic, and assembly and C programming to deepen their grasp of foundational computer architecture concepts.",
            ],
            link: "https://www.eng.mcmaster.ca/cas/",
            linkText: "Learn More",
            img: mcmasterLogo
        },
        {
            title: "Systems Engineer",
            company: "Canadian Space Agency",
            date: "January 2025 - April 2025",
            description: [
                "Developed technical documentation for the TICFIRE project, ensuring compliance with NASA, CSA, and contractor standards to maintain consistency and regulatory alignment across stakeholders. Moreover, designed and analyzed optical systems using MATLAB, enhancing test accuracy by 50% and producing technical reports that optimized testing procedures and accelerated R&D efforts."
            ],
            link: "https://www.asc-csa.gc.ca/eng/",
            linkText: "Learn More",
            img: csaLogo
        },

        {
            title: "Software Engineer",
            company: "Canadian Space Agency",
            date: "May 2025 - August 2025",
            description: [
                "Designed and executed automated test procedures for microbolometer detectors in the TICFIRE project, leveraging Python-based test scripts and data processing pipelines to analyze over 150 hours of performance data in IR calibration environments. Moreover, developed and maintained software for embedded system validation, integrating C and Python tools to streamline data acquisition, automate hardware-in-the-loop testing, and improve test execution efficiency by 20%."
            ],
            link: "https://www.asc-csa.gc.ca/eng/",
            linkText: "Learn More",
            img: csaLogo
        },
        {
            title: "COMPSCI 2ME3 Teaching Assistant",
            company: "McMaster University",
            date: "September 2025 - December 2025",
            description: [
                "Supported the instruction of tutorials for COMPSCI 2ME3 – Introduction to Software Development, mentoring students on object-oriented programming using Java, design patterns, documentation, testing, and development models to strengthen their grasp of core software engineering concepts."
            ],
            link: "https://www.eng.mcmaster.ca/cas/",
            linkText: "Learn More",
            img: mcmasterLogo
        },
        {
            title: "COMPSCI 1XD3 Teaching Assistant",
            company: "McMaster University",
            date: "January 2026 - April 2026",
            description: [
                "Supported the instruction of tutorials for COMPSCI 1XD3 – Introduction to Software Design Using Web Programming, guiding students in identifying user needs, goals, and requirements, translating them into effective software solutions, and structuring and communicating software designs using web technologies such as HTML/Css/Php, protocols, types, and design patterns to improve reliability, readability, and adaptability.",
            ],
            link: "https://www.eng.mcmaster.ca/cas/",
            linkText: "Learn More",
            img: mcmasterLogo
        }
    ];

    return (
        <ExperiencesContainer id="blog">
            <HeaderWrapper >
                <TopLine>my experiences, my life...</TopLine>
                <Description>
                    As a person who loves interacting with others, I do my best to involve myself with society as much as possible. I believe that you can learn the most from others and that is why I strive to be a caring person. Below are my experiences.
                </Description>
            </HeaderWrapper>

            <TimelineContainer data-aos="fade-up">
                <Line />
                {experiences.map((exp, index) => (
                    <TimelineItem key={index}>
                        <TimelineDot />
                        <TimelineContent>
                            <Date>{exp.date}</Date>
                            <Card>
                                <CardHeader>
                                    <HeaderText>
                                        <Company>{exp.company}</Company>
                                        <Role>{exp.title}</Role>
                                    </HeaderText>
                                    {exp.img && <Logo src={exp.img} alt="Logo" />}
                                </CardHeader>
                                <CardBody>
                                    {exp.description.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                </CardBody>
                                <CardFooter href={exp.link} target="_blank" rel="noreferrer">
                                    <ExternalLogo />
                                    <span>{exp.linkText}</span>
                                </CardFooter>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </TimelineContainer>
        </ExperiencesContainer>
    );
};

export default Experiences;

// Styles

const ExperiencesContainer = styled.div`
    background: #f8fcff; /* Light BG hardcoded */
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`;

const HeaderWrapper = styled.div`
    text-align: left;
    margin-bottom: 2rem;
    max-width: 1550px;
    width: 100%;
    padding: 0 20px;
    
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

const TopLine = styled.h1`
    color: ${colors.mainRed};
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 1.5rem;
    font-family: 'Raleway', sans-serif;
    font-style: italic;

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
`;

const Description = styled.p`
    font-size: 1.5rem;
    color: ${colors.mainRed};
    font-family: 'Raleway', sans-serif;
    line-height: 1.6;
    max-width: 1550px;
`;

const TimelineContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1550px;
    margin: 0 auto;
    padding: 20px 0;
`;

const Line = styled.div`
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${colors.mainRed};
    border-radius: 2px;
`;

const TimelineItem = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-left: 50px;
    position: relative;
    margin-bottom: 3rem;
    width: 100%;
`;

const TimelineDot = styled.div`
    position: absolute;
    left: 22px;
    top: 0;
    width: 20px;
    height: 20px;
    background: ${colors.secondaryRed};
    border: 4px solid #fff;
    border-radius: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: 0 0 0 4px ${colors.mainRed};
`;

const TimelineContent = styled.div`
    width: 100%;
    padding: 0 20px 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
`;

const Date = styled.span`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: ${colors.mainRed};
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
`;

const Card = styled.div`
    background: ${colors.mainRed};
    color: white;
    border-radius: 15px;
    padding: 1.5rem;
    width: 100%;
`;

const CardHeader = styled.div`
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    display: flex; 
    justify-content: space-between;
    align-items: center;
`;

const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 85%;
`;

const Logo = styled.img`
    height: 4rem; 
    width: auto;
    object-fit: contain;
`;

const Company = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 1.8rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
`;

const Role = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 1.4rem;
    color: ${colors.secondaryRed};
    font-weight: 600;
`;

const CardBody = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;

    p {
        margin-bottom: 0.5rem;
    }
`;

const CardFooter = styled.a`
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    text-decoration: none;
    color: white;
    transition: background 0.3s ease;

    &:hover {
        background: rgba(255,255,255,0.2);
    }

    span {
        margin-left: 0.5rem;
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
    }
`;

const ExternalLogo = styled(FiExternalLink)`
    font-size: 1.2rem;
`;
