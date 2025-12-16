/* Imports */
import React from 'react';
import styled from "styled-components";
// import '../globals/font.css';
// import resume from '../../images/resume.pdf';
import bgImage from '../../images/me.jpg';

import WordListSwap from "./word-list-swap";
import Typewriter from "./typewritter";
import { HighlightText } from "./highlight-text";
import { LayoutGroup, motion } from "motion/react";

/* Main */
const LandingSection = () => {
    
    return (
        <>
            <LandingContainer >
                <LandingTextContainer>
                    <LandingTitle>
                            <h1>
                                <Typewriter
                                text={[
                                    "Hi, my name is Kenny Zhao!",
                                ]}
                                speed={120}
                                className="text-white-500"
                                // waitTime={1500}
                                // deleteSpeed={40}
                                cursorChar={"_"}
                                />
                            </h1>
                    </LandingTitle>
                    <LandingBody>Nothing fancy to see here. Just a simple website about me. I'm a computer science student studying at McMaster University. 
                                 My interests lie in aerospace engineering, data engineering, and general software development, all of which captivate me immensely. 
                                 My biggest career goal is to work in the aerospace industry! Additionally, besides my academic pursuits, 
                                 I find joy in playing sports (shredding the snow on my skis), creating music (jamming on my guitar), 
                                 playing video games (late night gaming sessions) and much more! 
                                <br/>
                                <br/>
                                As of now, I am currently studying my fourth year, previously worked at the 
                                <HighlightText className="relative inline-block px-2 py-1 rounded-lg bg-gradient-to-r from-gray-100 to-red-200 dark:from-black dark:to-red-700" text="Canadian Space Agency" />
                    </LandingBody>
                </LandingTextContainer>
                <LayoutGroup className="">
                    <motion.p className="flex whitespace-pre text-4xl" layout={true}>
                        <motion.span
                        className="pt-0.5 sm:pt-1 md:pt-2"
                        layout={true}
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        >
                        {" "}
                        </motion.span>
                        <WordListSwap
                        texts={[
                            "Click",
                            "Here",
                            "For",
                            "My",
                            "Resume",
                        ]}
                        mainClassName="text-white px-2 sm:px-2 md:px-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500 dark:to-purple-500 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={1500}
                        />
                    </motion.p>
                </LayoutGroup>
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

`; 

// main title
const LandingTitle = styled.h1`
    font-size: 3rem;
    margin-left: 2rem;
    padding: 1rem;
    color: white; 
    
`;

// body text
const LandingBody = styled.p`
    font-size: 1.5rem;
    margin: 2rem;   
    margin-top: 0;
    padding: 1rem;
    padding-top: 0;
    color: white;
`;