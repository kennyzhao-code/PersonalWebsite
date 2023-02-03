import React from 'react'
import styled from "styled-components"
import { colors } from "../globals/colors"


const Projects = ({lightBg, id, topLine, darkText, marketyze, avgl, ohsea, hackthenorth, description}) => {
    return (
        <ProjectContainer name = "projects"  id = {id} lightBg = {lightBg}>
            
            <SecondaryProjectContainer>
                <Description data-aos-once='true' data-aos="fade-up">
                    {topLine}
                </Description>

                <SecondaryDescription>
                    {description}
                </SecondaryDescription>

                    <ContentWrapper>
                        
                        <ProjectRow>
                            <ProjectOne></ProjectOne>
                            <ProjectTwo></ProjectTwo>
                        </ProjectRow>

                        <ProjectRow>
                            <ProjectThree></ProjectThree>
                            <ProjectFour></ProjectFour>
                        </ProjectRow>

                    </ContentWrapper>
            </SecondaryProjectContainer>

        </ProjectContainer>
    )
}

export default Projects





//main container 
const ProjectContainer = styled.div`
    width: 100%;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')}; 
    height: 2000px;   
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const SecondaryProjectContainer = styled.div`
    height: 100%;
    width: 1510px;
`

const Description = styled.h1`
    color: ${colors.mainGreen}; 
    font-size: 60px; 
    position: relative;
    font-weight: 700; 
    width: 100%;
    letter-spacing: 1.4px; 
    font-style: italic;
    display: flex;

    @media screen and (max-width: 768px){
        top: 0;
    }
`

const SecondaryDescription = styled.p`

`

const ContentWrapper = styled.div`
    margin: 0 auto; 
    margin-top: 2rem;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-column-gap: 4rem;
    grid-row-gap: 1.5rem;
    align-items: center; 
    padding: 0 50px;     
    justify-content: center;
`

const ProjectRow = styled.div`
    height: 2000px;
   
`

const ProjectOne = styled.div`
    height: 400px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
`
const ProjectTwo = styled.div`
    height: 400px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
    margin-top: 2rem;
`
const ProjectThree = styled.div`
    height: 400px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
`
const ProjectFour = styled.div`
    height: 400px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
    margin-top: 2rem;

`





/*
const FinalText = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    font-family: 'Poppins', sans-serif;     
    font-size: 24px;
    padding-left: 2rem;
    padding-top: 2rem;
    color: black;
    text-decoration: none;
    position: relative;
    top: 2.5rem;

    &:hover {
        cursor: pointer;
        color: purple;
    }
`

*/

/* <FinalText href ='/' data-aos-once='true' data-aos="fade-up"> 
            Check out more projects at my Github 
            </FinalText>

 */

