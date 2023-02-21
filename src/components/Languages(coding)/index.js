// all imports 
import "aos/dist/aos.css"
import Aos from "aos"
import React, { useEffect } from 'react'
import styled from "styled-components"
import ProgressBar from "./ProgressBar"
import ProgressBarCss from "./ProgressBarCss"
import ProgressBarC from "./ProgressBarC"
import ProgressBarJavaScript from "./ProgressBarJavaScript"
import '../globals/font.css'


const Language = ({lightBg, id, imgStart, darkText, description}) => {
    
    //controls fade in animation time 
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 
    
    return (
        <>
            <LanguageContainer name ="languages" lightBg = {lightBg} id = {id}>

            
                <LanguageWrapper>
                    
                    <LanguageRow data-aos-once='true' data-aos="fade-up" imgStart={imgStart}>

                        <Column1 >
                            
                            <TextWrapper>                     
                                

                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                    

                            </TextWrapper>
                        </Column1>
                        
                        <Column2 >
                            <LanguageWrap>

                                <ProgressBar done='60'/> 

                                <ProgressBarC done = '56'/>

                                <ProgressBarCss done = '52'/>


                                <ProgressBarJavaScript done = '68'/>
                                
                            </LanguageWrap>
                        </Column2>

                    </LanguageRow>
                </LanguageWrapper>
            </LanguageContainer>
        </>
    )
}

export default Language


/**<AboutMeIcons data-aos-once='true' data-aos="fade-up">

                                    <AboutMeIconsLinkInsta href = 'https://www.instagram.com/kennyzhao_/' target = '_blank' aria-label="Instagram">
                                        <FaInstagram />
                                    </AboutMeIconsLinkInsta>

                                    <AboutMeIconsLinkLink href = 'https://www.linkedin.com/in/kenny-zhao-283b73213/' target = '_blank' aria-label="Linkedin">
                                        <FaLinkedin/>
                                    </AboutMeIconsLinkLink>

                                    <AboutMeIconsLinkGit href = 'https://github.com/kennyzhao-code' target = '_blank' aria-label="Github">
                                        <FaGithub />
                                    </AboutMeIconsLinkGit>

                                    <AboutMeIconsLinkDis href = 'https://twitter.com/KennyZhao20' target = '_blank' aria-label="Twitter">
                                        <FaTwitter/>
                                    </AboutMeIconsLinkDis>
                                
                                    </AboutMeIcons> */


// all styling 


//main container 
const LanguageContainer = styled.div`
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    transition: 0.375s;
    height: 700px;

    @media screen and (max-width: 1700px){
        width: 100%;
        height: 900px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1100px){
        width: 100%;
        height: 1350px;
        transition: 0.375s;
    }

    @media screen and (max-width: 480px){
        height: 1200px;
        transition: 0.375s;
    }
`

//main wrapper
const LanguageWrapper = styled.div`
    display: grid; 
    z-index: 1; 
    width: 100%;
    height: 100px;
    margin-right: auto; 
    margin-left: auto; 
    padding: 0 24px; 
    justify-content: center; 
    position: relative;
    transition: 0.375s;

    @media screen and (max-width: 1100px){
        margin-left: 4rem;
        transition: 0.375s;
    }
`

//main row
const LanguageRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr); 
    grid-column-gap: 2rem;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )}; 
    width: 100%;
    height: 100%;
    transition: 0.375s;
    position: relative;




    @media screen and (max-width: 1100px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        transition: 0.375s;
    }


    @media screen and (max-width: 1700px){
        grid-column-gap: 0;
        transition: 0.375s;
    }
`

//column 1
const Column1 = styled.div`
    margin-bottom: 1rem; 
    padding: 0 15px; 
    grid-area: col1; 
    position: relative;
    left: 1rem;
    transition: 0.375s;
    bottom: 10rem;


    @media screen and (max-width: 1700px){
        transition: 0.375s;
        left: 0;
        top: 0;
        margin-right: 6.5rem;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        margin-right: 10rem;

    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        margin-right: 0;
        margin-bottom: 2rem;

    }

    @media screen and (max-width: 480px){
        transition: 0.375s;
        margin-left: 4.6rem;

    }

    
`

//column 2
const Column2 = styled.div`
    margin-top: 6rem;
    padding: 0 15px; 
    grid-area: col2; 
    position: relative;
    right: 0.8rem;
    transition: 0.375s;
    height: 400px;
    bottom: 14rem;


    @media screen and (max-width: 1700px){
        transition: 0.375s;
        right: 0;
        left: 1rem;
        bottom: 8rem;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        right: 2rem;
        left: 0;
    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        right: 0;
        left: 0;
        margin-top: 0;
        bottom: 7rem;
    }

`

//text wrapper
const TextWrapper = styled.div`
    padding-top: 3rem; 
    padding-bottom: 0; 
    transition: 0.375s;

    @media screen and (max-width: 1700px){
        transition: 0.375s;
        position: relative;
        bottom: 2rem;
    }

    @media screen and (max-width: 1350px){
        transition: 0.375s;
        right: 6rem;
        bottom: 7rem;
    }

    @media screen and (max-width: 1100px){
        transition: 0.375s;
        right: 0rem;
        left: 3rem; 
        bottom: 0rem;
    }
`



const Subtitle = styled.p`
    width: 650px; 
    margin-bottom: 2rem;
    margin-top: 5rem; 
    margin-left: 0.8rem;
    font-size: 30px; 
    line-height: 43px; 
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: ${({darkText}) => (darkText ? 'white' : ' #897CBF')}; 
    transition: 0.375s;


    @media screen and (max-width: 1700px){
        width: 500px;
        transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
        width: 430px;
        transition: 0.375s;
    }

    
    @media screen and (max-width: 480px){
        width: 320px;
        transition: 0.375s;
        font-size: 20px;
        line-height: 30px;
    }
`


const LanguageWrap = styled.div`
    width: 700px; 
    height: 430px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 4rem;
   

    @media screen and (max-width: 1100px){
        position: relative;
        right: 4rem;
    }

`







/**<LanguageRow>

                <LanguageRowContainer>

                    <ProgressBarTitleDiv>
                        <ProgressBarTitle>Python<CountUp end={50} duration={3.5}/>%</ProgressBarTitle>
                    </ProgressBarTitleDiv>

                    <ProgressBarTitleDiv>
                        <ProgressBarTitle>HTML/CSS/Bootstrap&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<CountUp end={55} duration={3.5}/>%</ProgressBarTitle>
                    </ProgressBarTitleDiv>

                    <ProgressBarTitleDiv>
                        <ProgressBarTitle>Java&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;<CountUp end={80} duration={3.5}/>%</ProgressBarTitle>
                    </ProgressBarTitleDiv>

                    <ProgressBarTitleDiv>
                        <ProgressBarTitle>JavaScript&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;<CountUp end={60} duration={3.5}/>%</ProgressBarTitle>
                    </ProgressBarTitleDiv>

               </LanguageRowContainer>

            </LanguageRow>



            <ProgressBar done='50'/> 

                    <ProgressBarCss done = '55'/>

                    <ProgressBarJava done = '60'/>

                    <ProgressBarJavaScript done = '60'/>
 */