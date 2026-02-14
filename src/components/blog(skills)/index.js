/* Imports */
import React, { useEffect } from 'react';
import Aos from "aos";
import styled from "styled-components";
import { colors } from '../globals/colors';
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaSpotify, FaStrava } from 'react-icons/fa'; // Added Spotify and Running
import '../globals/font.css';


/* Component */
const Blog = () => {
    // Static Data
    const lightBg = true;
    const id = 'hobbies';
    const topLine = 'hey...again (skills and hobbies).';
    
    const data = {
        coding: 'I have been learning about computer science for over 4 years and currently I am working on multiple projects from game development, to creating more websites for other extracurriculars that I am proud to be representing.',   
        athletics: 'I also love to stay active and healthy. I often go to the gym to workout and run around the track. I also enjoy playing sports such as basketball, volleyball, and badminton with my friends.',
        games: 'Video games continue to be one of my favorite hobbies to relax and chill with friends. At the moment, I am not playing much because of academics, but if you are ever down play, just add me on discord!',
        academics: 'Competitions are where I strive the most as it forces me to become better. As of now, I am preparing for future events, such as hackathons, coding compeititons, etc., to further my skills.', 
        personality: 'I would say I am a very outgoing and kind person. I would love to talk or even shoot me a private message on one of my socials. Also check out my guitar account! Music plays a big role in my life. During my free time in high school, I use to play the bass clarinet for my school band. As of now, I occasionally play the piano and now play the guitar often whenever I want to enjoy some music.',  
    }

    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 

    return (
        <SectionContainer id={id} lightBg={lightBg}>
            <ContentWrapper>
                <SectionTitle data-aos="fade-up">{topLine}</SectionTitle>
                
                <GridContainer>
                    {/* Left Column: Personality (Big Vertical Box) */}
                    <PersonalityCard data-aos="fade-right">
                        <CardHeader>
                            <CardTitle>Personality <span>&lt;3</span></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <p>{data.personality}</p>
                            <SocialsList>
                                <SocialItem href="https://www.instagram.com/kennyzhao_/" target="_blank">
                                    <FaInstagram /> <span>kennyzhao_</span>
                                </SocialItem>
                                <SocialItem href="https://www.instagram.com/kennyzhao_guitar/" target="_blank">
                                    <FaInstagram /> <span>kennyzhao_guitar</span>
                                </SocialItem>
                                <SocialItem href="https://x.com/KennyZhao20" target="_blank">
                                    <FaTwitter /> <span>KennyZhao20</span>
                                </SocialItem>
                                <SocialItem href="https://open.spotify.com/user/kennyzhao2004" target="_blank">
                                    <FaSpotify /> <span>@kenny-zhao</span>
                                </SocialItem>
                            </SocialsList>
                        </CardBody>
                    </PersonalityCard>

                    {/* Right Column: 2x2 Grid */}
                    <RightGrid>
                        {/* Games */}
                        <InfoCard data-aos="fade-up" delay="100" bgColor="#D5BB77">
                            <CardHeader>
                                <CardTitle>Games <span>:P</span></CardTitle>
                                <FaDiscord className="title-icon"/>
                            </CardHeader>
                            <CardBody>
                                <p>{data.games}</p>
                                <SocialLink href="https://discord.com" target="_blank">
                                    REALLY!?#4206
                                </SocialLink>
                            </CardBody>
                        </InfoCard>

                        {/* Academics */}
                        <InfoCard data-aos="fade-up" delay="200" bgColor="#D5BB77">
                            <CardHeader>
                                <CardTitle>Academics <span>&gt;:)</span></CardTitle>
                                <FaLinkedin className="title-icon"/>
                            </CardHeader>
                            <CardBody>
                                <p>{data.academics}</p>
                                <SocialLink href="https://linkedin.com/in/kenny-zhao" target="_blank">
                                    Kenny Zhao
                                </SocialLink>
                            </CardBody>
                        </InfoCard>

                        {/* Coding */}
                        <InfoCard data-aos="fade-up" delay="300" bgColor="#D5BB77">
                            <CardHeader>
                                <CardTitle>Coding <span>(duh)</span></CardTitle>
                                <FaGithub className="title-icon"/>
                            </CardHeader>
                            <CardBody>
                                <p>{data.coding}</p>
                                <SocialLink href="https://github.com/kennyzhao-code" target="_blank">
                                    kennyzhao-code
                                </SocialLink>
                            </CardBody>
                        </InfoCard>

                        {/* Athletics */}
                        <InfoCard data-aos="fade-up" delay="400" bgColor="#D5BB77">
                            <CardHeader>
                                <CardTitle>Athletics <span>:D</span></CardTitle>
                                <FaStrava className="title-icon"/>
                            </CardHeader>
                            <CardBody>
                                <p>{data.athletics}</p>
                            </CardBody>
                        </InfoCard>
                    </RightGrid>

                </GridContainer>
            </ContentWrapper>
        </SectionContainer>
    );
};

export default Blog;

/* Styles */
const SectionContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 100px 0;
    background: ${({ lightBg }) => (lightBg ? '#F8FCFF' : 'black')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1550px;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
`;

const SectionTitle = styled.h1`
    color: #D5BB77;
    font-size: 60px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    margin-bottom: 3rem;
    
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr; /* Left column smaller than right complex grid, or adjustable */
    gap: 2rem;
    width: 100%;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr; /* Stack on smaller screens */
    }
`;

const PersonalityCard = styled.div`
    background: #D5BB77; 
    border-radius: 20px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 600px; /* Make it tall vertical box */
    color: white;
    transition: transform 0.3s ease;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);

    &:hover {
        transform: translateY(-5px);
    }

    p {
        font-family: 'Raleway', sans-serif;
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 2rem;
    }
`;

const RightGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr; /* Stack single column on mobile */
    }
`;

const InfoCard = styled.div`
    background: ${({ bgColor }) => bgColor || 'gray'};
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    color: white;
    min-height: 280px;
    transition: transform 0.3s ease;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);

    &:hover {
        transform: translateY(-5px);
    }
    
    p {
        font-family: 'Raleway', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
        flex-grow: 1; 
    }

    .title-icon {
        font-size: 2rem;
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`;

const CardTitle = styled.h2`
    font-size: 2rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    
    span {
        font-size: 1.2rem;
        font-weight: 300;
        margin-left: 0.5rem;
        opacity: 0.8;
    }
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const SocialsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: auto;
`;

const SocialItem = styled.a`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-family: 'Raleway', sans-serif;
    padding: 10px;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    transition: background 0.3s ease;

    &:hover {
        background: rgba(255,255,255,0.2);
    }
`;

const SocialLink = styled.a`
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    width: fit-content;
    
    &:hover {
        border-bottom: 1px solid white;
    }
`;
