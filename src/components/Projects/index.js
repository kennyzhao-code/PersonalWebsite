import React, {useEffect} from 'react';
import Aos from "aos";
import styled from "styled-components";
import { colors } from "../globals/colors";
import { StaticImage } from 'gatsby-plugin-image';
import './bg.css';
import '../globals/font.css';


const Projects = ({lightBg, id, topLine, delta, uoft, ohsea, hackthenorth, description}) => {


    //controls fade in animation time 
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 


    return (
        <>
         <ProjectContainer name = "projects"  id = {id} lightBg = {lightBg}>
            
            <SecondaryProjectContainer>
                <Description data-aos-once='true' data-aos="fade-up">
                    {topLine}
                </Description>

                <SecondaryDescription data-aos-once='true' data-aos="fade-up">
                    {description}
                </SecondaryDescription>

                    <ContentWrapper data-aos-once='true' data-aos="fade-up">
                        
                        <ProjectRow>

                            <ProjectOne>

                                <MainCoverDiv>
                                    <CoverDiv target = "_blank" rel="noreferrer" href = "https://github.com/HTN-heAR">
                                        <StaticImage
                                            src= '../../images/htnBg.png'
                                            alt="htn"
                                            placeholder="blurred"
                                            formats={["auto", "webp"]}
                                            quality= {100}
                                            className = "htn"
                                            imgStyle = {{borderRadius: '15px'}}
                                        />                                      
                                    </CoverDiv>
                                    <LogoContainer>
                                        <StaticImage
                                            src= '../../images/htn.png'
                                            alt="htn"
                                            placeholder="blurred"
                                            formats={["auto", "webp"]}
                                            layout="fixed"
                                            quality= {100}
                                            width={60}
                                            imgStyle = {{borderRadius: '30px'}}
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
                                            formats={["auto", "webp"]}
                                            quality= {100}
                                            className = "uoft"
                                            imgStyle = {{borderRadius: '15px'}}
                                        />  
                                    </CoverDiv>
                                    <LogoContainer style = {{width: '330px'}}>
                                        <StaticImage
                                            src= '../../images/uoftHacks.png'
                                            alt="uoftLogo"
                                            placeholder="blurred"
                                            formats={["auto", "webp"]}
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
                                            className='delta'
                                            formats={["auto", "webp"]}
                                            quality= {100}
                                            imgStyle = {{borderRadius: '15px'}}
                                        />  
                                    </CoverDiv>
                                    <LogoContainer style = {{width: '320px'}}>
                                        <StaticImage
                                            src= '../../images/deltaLogo.png'
                                            alt="deltaLogo"
                                            placeholder="blurred"
                                            formats={["auto", "webp"]}
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
                                            formats={["auto", "webp"]}
                                            className = "ohsea"
                                            quality= {100}
                                            imgStyle = {{borderRadius: '15px'}}
                                        />  
                                    </CoverDiv>
                                    <LogoContainer style = {{width: '250px'}}>
                                        <StaticImage
                                            src= '../../images/ohsea.png'
                                            alt="ohseaLogo"
                                            placeholder="blurred"
                                            formats={["auto", "webp"]}
                                            layout="fixed"
                                            quality= {100}
                                            width={60}
                                            imgStyle = {{borderRadius: '10px'}}
                                        />             
                                        <h1>{ohsea}</h1>
                                    </LogoContainer>
                                </MainCoverDiv>
                            </ProjectFour>
                        </ProjectRow>

                    </ContentWrapper>
            </SecondaryProjectContainer>

        </ProjectContainer>
        </>
    );
};

export default Projects;


//main container 
const ProjectContainer = styled.div`
    width: 100%;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')}; 
    height: 1300px;   
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.375s;

    @media screen and (max-width: 1700px){
        height: 1325px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        height: 1310px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        height: 2550px;
        transition: 0.375s;
    }

    @media screen and (max-width: 480px){
        height: 2400px;
        transition: 0.375s;
    }
    
`;

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

    @media screen and (max-width: 480px){
        transition: 0.375s;
        width: 350px;
    }


`;

const Description = styled.h1`
    color: ${colors.mainGreen}; 
    font-size: 60px; 
    position: relative;
    font-weight: 700; 
    width: 100%;
    letter-spacing: 1.4px; 
    font-style: italic;
    display: flex;
    font-family: "Raleway", sans-serif;

    @media screen and (max-width: 480px){
        font-size: 35px;
        transition: 0.375s;
    }

`;

const SecondaryDescription = styled.p`
    font-size: 1.8rem;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${colors.mainGreen};


    @media screen and (max-width: 480px){
        font-size: 1.5rem;
        transition: 0.375s;
    }



`;


//div covers for project 
const MainCoverDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const CoverDiv = styled.a`
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    opacity: 0.1;
    border-radius: 15px;
    background: ${colors.primaryGreen};
    transition: 0.5s ease;


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
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    bottom: 6rem;    
    padding-left: 2rem;
    width: 390px;

    h1{
        font-family: "Raleway", sans-serif;
        color: white;
        font-weight: 400;
        margin-left: 1.5rem;
        margin-top: 1.2rem;
        transition: 0.375s;


        @media screen and (max-width: 480px){
            font-size: 1.7rem;
            transition: 0.375s;
        }
    }
`;

//project sections 
const ProjectRow = styled.div`
    height: 2000px;

    @media screen and (max-width: 1100px){
        height: 965px;
    }
   
`;

const ProjectOne = styled.div`
    height: 450px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
    justify-content: center;
    display: flex;
    align-items: center;
    transition: 0.375s;

    &:hover{
        transition: 0.375s;
        scale: 1.02;
    }


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

    @media screen and (max-width: 480px){
        width: 350px; 
        transition: 0.375s;

        &:hover{
            scale: 1;
    }
    }
`;
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

    &:hover{
        transition: 0.375s;
        scale: 1.02;
    }

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

    @media screen and (max-width: 480px){
        width: 350px; 
        transition: 0.375s;

        &:hover{
            scale: 1;
    }
    }
`;

const ProjectThree = styled.div`
    height: 450px;
    width: 720px;
    background: ${colors.mainGreen};
    border-radius: 15px;
    justify-content: center;
    display: flex;
    align-items: center;
    transition: 0.375s;

    &:hover{
        transition: 0.375s;
        scale: 1.02;
    }

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

    @media screen and (max-width: 480px){
        width: 350px; 
        transition: 0.375s;

        &:hover{
            scale: 1;
    }
    }
`;
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

    &:hover{
        transition: 0.375s;
        scale: 1.02;
    }

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

    @media screen and (max-width: 480px){
        width: 350px; 
        transition: 0.375s;

        &:hover{
            scale: 1;
    }
    }

`;
