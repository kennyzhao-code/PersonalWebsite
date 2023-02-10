import React, {useEffect} from 'react'
import Aos from "aos"
import styled from "styled-components"
import { colors } from "../globals/colors"
import { StaticImage } from 'gatsby-plugin-image'
import './bg.css'

const Projects = ({lightBg, id, topLine, delta, uoft, ohsea, hackthenorth, description}) => {


    //controls fade in animation time 
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 


    return (
        <ProjectContainer name = "projects"  id = {id} lightBg = {lightBg}>
            
            <SecondaryProjectContainer>
                <Description data-aos-once='true' data-aos="fade-up">
                    {topLine}
                </Description>

                <SecondaryDescription data-aos-once='true' data-aos="fade-up">
                    {description}
                </SecondaryDescription>

                    <ContentWrapper>
                        
                        <ProjectRow data-aos-once='true' data-aos="fade-up">

                            <ProjectOne>

                                <MainCoverDiv>
                                    <CoverDiv target = "_blank" rel="noreferrer" href = "https://github.com/HTN-heAR">
                                        <StaticImage
                                            src= '../../images/htnBg.png'
                                            alt="htn"
                                            placeholder="blurred"
                                            formats={["auto", "webp", "avif"]}
                                            quality= {100}
                                            className = "htn"
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
                                            quality= {100}
                                            className = "uoft"
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

                        <ProjectRow data-aos-once='true' data-aos="fade-up">
                            <ProjectThree>
                                <MainCoverDiv>
                                    <CoverDiv target = "_blank" rel="noreferrer" href = "https://github.com/DeltaHacks-WebOfLife">
                                        <StaticImage
                                            src= '../../images/deltaHacks.png'
                                            alt="delta"
                                            placeholder="blurred"
                                            className='delta'
                                            formats={["auto", "webp", "avif"]}
                                            quality= {100}
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
                                            className = "ohsea"
                                            quality= {100}
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
    transition: 0.375s;

    @media screen and (max-width: 1100px){
        height: 2550px;
        transition: 0.375s;
    
`

const SecondaryProjectContainer = styled.div`
    height: 100%;
    width: 1510px;
    transition: 0.375s;

    @media screen and (max-width: 1700px){
        width: 1200px;
        transition: 0.375s;

    }

    @media screen and (max-width: 1350px){
        width: 1050px;
        transition: 0.375s;

    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        width: 480px;
    }
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
    transition: 0.375s;


    @media screen and (max-width: 1700px){
        grid-column-gap: 2rem;
        transition: 0.375s;

    }

    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr;
        transition: 0.375s;
        grid-row-gap: 0rem;

    }
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

    @media screen and (max-width: 1100px){
        height: 965px;
    }
   
`

const ProjectOne = styled.div`
    height: 450px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
    justify-content: center;
    display: flex;
    align-items: center;
    transition: 0.375s;


    @media screen and (max-width: 1700px){
        width: 585px; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        width: 510px; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        width: 480px; 
        transition: 0.375s;
    }
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
    transition: 0.375s;



    @media screen and (max-width: 1700px){
        width: 585px; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        width: 510px; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        width: 480px; 
        transition: 0.375s;
    }
`
const ProjectThree = styled.div`
    height: 450px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
    justify-content: center;
    display: flex;
    align-items: center;
    transition: 0.375s;



    @media screen and (max-width: 1700px){
        width: 585px; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        width: 510px; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        width: 480px; 
        transition: 0.375s;
    }
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
    transition: 0.375s;

    @media screen and (max-width: 1700px){
        width: 585px; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        width: 510px; 
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        width: 480px; 
        transition: 0.375s;
    }

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

