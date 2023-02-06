import React from 'react'
import styled from "styled-components"
import { colors } from "../globals/colors"
import { StaticImage } from 'gatsby-plugin-image'


const Projects = ({lightBg, id, topLine, delta, uoft, ohsea, hackthenorth, description}) => {
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

                            <ProjectOne>

                                <MainCoverDiv>
                                    <CoverDiv target = "_blank" rel="noreferrer" href = "https://github.com/HTN-heAR">
                                        <StaticImage
                                            src= '../../images/htnBg.png'
                                            alt="htn"
                                            placeholder="blurred"
                                            formats={["auto", "webp", "avif"]}
                                            layout="fixed"
                                            quality= {100}
                                            width={670}
                                            style = {{borderRadius: '10px'}}
                                        />                                      
                                    </CoverDiv>
                                    <LogoContainer>
                                        <StaticImage
                                            src= '../../images/htn.png'
                                            alt="htn"
                                            placeholder="blurred"
                                            formats={["auto", "webp", "avif"]}
                                            layout="fixed"
                                            quality= {100}
                                            width={60}
                                            style = {{borderRadius: '30px'}}
                                        />             
                                        <h1>{hackthenorth}</h1>
                                    </LogoContainer>
                                </MainCoverDiv>
                                
                            </ProjectOne>

                            <ProjectTwo>
                                <MainCoverDiv>
                                    <CoverDiv target = "_blank" rel="noreferrer" href = "https://github.com/UofTHacks-HealthExplore">
                                        <StaticImage
                                            src= '../../images/uoft.jpeg'
                                            alt="uoft"
                                            placeholder="blurred"
                                            formats={["auto", "webp", "avif"]}
                                            layout="fixed"
                                            quality= {100}
                                            width={630}
                                            style = {{borderRadius: '10px'}}
                                        />  
                                    </CoverDiv>
                                    <LogoContainer style = {{width: '330px'}}>
                                        <StaticImage
                                            src= '../../images/uoftHacks.png'
                                            alt="uoftLogo"
                                            placeholder="blurred"
                                            formats={["auto", "webp", "avif"]}
                                            layout="fixed"
                                            quality= {100}
                                            width={70}
                                        />             
                                        <h1>{uoft}</h1>
                                    </LogoContainer>
                                </MainCoverDiv>
                            </ProjectTwo>
                            
                        </ProjectRow>

                        <ProjectRow>
                            <ProjectThree>
                                <MainCoverDiv>
                                    <CoverDiv target = "_blank" rel="noreferrer" href = "https://github.com/DeltaHacks-WebOfLife">
                                        <StaticImage
                                            src= '../../images/deltaHacks.png'
                                            alt="delta"
                                            placeholder="blurred"
                                            formats={["auto", "webp", "avif"]}
                                            layout="fixed"
                                            quality= {100}
                                            width={550}
                                            style = {{borderRadius: '10px'}}
                                        />  
                                    </CoverDiv>
                                    <LogoContainer style = {{width: '320px'}}>
                                        <StaticImage
                                            src= '../../images/deltaLogo.png'
                                            alt="deltaLogo"
                                            placeholder="blurred"
                                            formats={["auto", "webp", "avif"]}
                                            layout="fixed"
                                            quality= {100}
                                            width={60}
                                        />             
                                        <h1>{delta}</h1>
                                    </LogoContainer>
                                </MainCoverDiv>
                            </ProjectThree>

                            <ProjectFour>
                                <MainCoverDiv>
                                    <CoverDiv target = "_blank" rel="noreferrer" href = "https://github.com/ohseagg">
                                        <StaticImage
                                            src= '../../images/ohseaBg.png'
                                            alt="ohsea"
                                            placeholder="blurred"
                                            formats={["auto", "webp", "avif"]}
                                            layout="fixed"
                                            quality= {100}
                                            width={400}
                                            style = {{borderRadius: '10px'}}
                                        />  
                                    </CoverDiv>
                                    <LogoContainer style = {{width: '250px'}}>
                                        <StaticImage
                                            src= '../../images/ohsea.png'
                                            alt="ohseaLogo"
                                            placeholder="blurred"
                                            formats={["auto", "webp", "avif"]}
                                            layout="fixed"
                                            quality= {100}
                                            width={60}
                                            style = {{borderRadius: '10px'}}
                                        />             
                                        <h1>{ohsea}</h1>
                                    </LogoContainer>
                                </MainCoverDiv>
                            </ProjectFour>
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
    height: 1250px;   
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
    font-size: 1.8rem;
    font-family: "OktaNeueLight", sans-serif;
    font-weight: bold;
    color: ${colors.mainGreen}
`


//div covers for project 
const MainCoverDiv = styled.div`
    width: 100%;
    height: 100%;
`

const CoverDiv = styled.a`
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    opacity: 0.1;
    border-radius: 15px;
    background: ${colors.primaryGreen};

    &:hover{
        background: ${colors.secondaryGreen};
        opacity: 0.5;
        cursor: pointer;
        transition: 0.5s ease;
    }
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

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    bottom: 6rem;    
    padding-left: 2rem;
    width: 390px;

    h1{
        font-family: "OktaNeueLight", sans-serif;
        color: white;
        font-weight: bold;
        margin-left: 1.5rem;
        margin-top: 1.2rem;
    }
`

//project sections 
const ProjectRow = styled.div`
    height: 2000px;
   
`

const ProjectOne = styled.div`
    height: 450px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
    justify-content: center;
    display: flex;
    align-items: center;
`
const ProjectTwo = styled.div`
    height: 450px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
    margin-top: 2rem;
    justify-content: center;
    display: flex;
    align-items: center;
`
const ProjectThree = styled.div`
    height: 450px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
    justify-content: center;
    display: flex;
    align-items: center;
`
const ProjectFour = styled.div`
    height: 450px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
    margin-top: 2rem;
    justify-content: center;
    display: flex;
    align-items: center;

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

