// all imports 
import "aos/dist/aos.css"
import Aos from "aos"
import React, { useEffect } from 'react'
import styled from "styled-components"
import ProgressBar from "./ProgressBar"
import ProgressBarCss from "./ProgressBarCss"
import ProgressBarC from "./ProgressBarC"
import ProgressBarJavaScript from "./ProgressBarJavaScript"
import FontStyles from "../Fonts/fontStyles"


const Language = ({lightBg, id, imgStart, darkText, description}) => {
    
    useEffect(() => {
        Aos.init({duration: 1000}); 
    }, []); 
    
    return (
        <>
        <FontStyles />
            <LanguageContainer name ="languages" lightBg = {lightBg} id = {id}>

            
                <LanguageWrapper>
                    
                    <LanguageRow imgStart={imgStart}>

                        <Column1>
                            
                            <TextWrapper>                     
                                

                                <Subtitle data-aos-once='true' data-aos="fade-up" darkText={darkText}>{description}</Subtitle>
                                    

                            </TextWrapper>
                        </Column1>
                        
                        <Column2>
                            <LanguageWrap data-aos-once='true' data-aos="fade-up">

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
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};

    @media screen and (max-width: 768px){
        padding: 100px 0; 
    }
`

//main wrapper
const LanguageWrapper = styled.div`
    display: grid; 
    z-index: 1; 
    height: 900px; 
    width: 100%;
    margin-right: auto; 
    margin-left: auto; 
    padding: 0 24px; 
    justify-content: center; 
    position: relative;
    bottom: 7rem;
`

//main row
const LanguageRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr); 
    grid-column-gap: 4rem;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )}; 
    width: 100%;

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

//column 1
const Column1 = styled.div`
    margin-bottom: 1rem; 
    padding: 0 15px; 
    grid-area: col1; 

    
`

//column 2
const Column2 = styled.div`
    margin-top: 6rem;
    padding: 0 15px; 
    grid-area: col2; 
`

//text wrapper
const TextWrapper = styled.div`
    padding-top: 3rem; 
    padding-bottom: 0; 

    @media screen and (max-width: 480px){
        position: relative;
        right: 1rem;
    }
`



const Subtitle = styled.p`
    width: 650px; 
    margin-bottom: 2rem;
    margin-top: 5rem; 
    margin-left: 0.8rem;
    font-size: 30px; 
    line-height: 45px; 
    font-family: 'OktaNeueLight', sans-serif;
    font-weight: bold;
    color: ${({darkText}) => (darkText ? 'white' : ' #897CBF')}; 
`


const LanguageWrap = styled.div`
    width: 700px; 
    height: 430px;
    border: #897CBF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 4rem;

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