import React, {useEffect} from 'react';
import Aos from "aos";
import styled from "styled-components";
import { colors } from "../globals/colors";
import { FiExternalLink } from 'react-icons/fi';
import '../globals/font.css';


const Experiences = ({lightBg, id, topLine, description}) => {


    //controls fade in animation time 
    useEffect(() => {
      Aos.init({duration: 1000}); 
    }, []); 

    return (
      <>
      <MasterTab name = "skills" id = {id} lightBg = {lightBg}>

        <SecondaryTab>

        <TabH1 data-aos-once='true' data-aos="fade-up"> {topLine} </TabH1>

        <SecondaryDescription data-aos-once='true' data-aos="fade-up">{description}</SecondaryDescription>

          <TabContainer data-aos-once='true' data-aos="fade-up">

            {/* Column 1 */}
            <ExperienceSection>

                {/* Tab 1 */}
                <ExperienceSectionTab mainHeight = "580px" mainWidth = "720px" 
                                   mainHeight1 = "650px" mainWidth1 = "585px"
                                   mainHeight2 = "620px" mainWidth2 = "510px"
                                   mainHeight3 = "620px" mainWidth3 = "480px"
                                   mainHeight4 = "590px" mainWidth4 = "350px"
                                   marginTop3 = "0.5rem" marginTop4 = "3rem"
                                   >
                  <InnerDivTab mainHeight = "480px" mainWidth = "600px" 
                                   mainHeight1 = "570px" mainWidth1 = "480px"
                                   mainHeight2 = "585px" mainWidth2 = "390px"
                                   mainHeight3 = "585px" mainWidth3 = "390px"
                                   mainHeight4 = "530px" mainWidth4 = "320px">
                      <TitleHeader>MacU - <span style={{color: `${colors.secondaryRed}` }}>Software Research Development Specialist Intern</span></TitleHeader>
                      <SubTitle>May 2024 - August 2024</SubTitle>
                      <SubDescription>• Led software development efforts as a Software Research Development Specialist at the McMaster Interdisciplinary Satellite Team, overseeing the creation of Mission and Operations Control Software<br/>
                                      • Engineered a robust Dashboard for the team's HASP 2024 test integration and flight in Texas, which resulted in a 30% increase in data accessibility and efficiency <br/>
                                      </SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://mcmasterneudose.ca/">
                        <ExternalLogo/>
                        <h1>mcmasterneudose.ca</h1>
                      </ExternalSource>
                  </InnerDivTab>
                </ExperienceSectionTab>

                {/* Tab 2 */}
                <ExperienceSectionTab mainHeight = "590px" mainWidth = "720px" 
                                   mainHeight1 = "610px" mainWidth1 = "585px"
                                   mainHeight2 = "620px" mainWidth2 = "510px"
                                   mainHeight3 = "620px" mainWidth3 = "480px"
                                   mainHeight4 = "620px" mainWidth4 = "350px"
                                   marginTop3 = "2rem" marginTop4 = "2rem"

                                   style = {{marginTop: "2rem"}}
                                   >
                  <InnerDivTab mainHeight = "470px" mainWidth = "600px" 
                                   mainHeight1 = "540px" mainWidth1 = "480px"
                                   mainHeight2 = "540px" mainWidth2 = "390px"
                                   mainHeight3 = "540px" mainWidth3 = "390px"
                                   mainHeight4 = "535px" mainWidth4 = "320px">
                          <TitleHeader>MacU  - <span style={{color: `${colors.secondaryRed}` }}>Teaching Assistant</span></TitleHeader>
                          <SubTitle>September 2024 - Present</SubTitle>
                          <SubDescription>• Supported the instruction of tutorials for COMPSCI 2GA3 - Computer Architecture, mentoring students on advanced topics like logic gates, computer arithmetic, and assembly programming to deepen their grasp of foundational computer architecture concepts <br/>
                                          • Provided one-on-one support to students, clarifying concepts related to computer architecture, which improved student test scores by 25% <br/>
                                          </SubDescription>
                          <ExternalSource target = "_blank" rel="noreferrer" href = "https://www.eng.mcmaster.ca/cas/">
                              <ExternalLogo/>
                              <h1>mcmaster.ca</h1>
                          </ExternalSource>
                      </InnerDivTab>
                </ExperienceSectionTab>

                {/* Tab 3 */}
                <ExperienceSectionTab mainHeight = "630px" mainWidth = "720px" 
                                   mainHeight1 = "670px" mainWidth1 = "585px"
                                   mainHeight2 = "650px" mainWidth2 = "510px"
                                   mainHeight3 = "650px" mainWidth3 = "480px"
                                   mainHeight4 = "640px" mainWidth4 = "350px"
                                   marginTop3 = "2rem" marginTop4 = "2rem"

                                   style = {{marginTop: "2rem"}}
                                   >
                <InnerDivTab mainHeight = "545px" mainWidth = "600px" 
                                   mainHeight1 = "590px" mainWidth1 = "480px"
                                   mainHeight2 = "570px" mainWidth2 = "390px"
                                   mainHeight3 = "570px" mainWidth3 = "390px"
                                   mainHeight4 = "590px" mainWidth4 = "320px">
                      <TitleHeader>AVGL  - <span style={{color: `${colors.secondaryRed}` }}>QA Tester & Tournament Organizer</span></TitleHeader>
                      <SubTitle>May 2021 - May 2023</SubTitle>
                      <SubDescription>• Assisting fellow student leaders at events and providing support to competitors during tournaments, achieving a 100% participant satisfaction rate <br/>
                                      • Enhanced the organization's website and features by more than 50% through rigorous QA testing, contributing to improved speed and efficiency and demonstrated strong ability to remain composed in high-stress situations while overseeing and managing multiple competitions <br/>
                                      </SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://avgl.org/">
                          <ExternalLogo/>
                          <h1>avgl.org</h1>
                      </ExternalSource>
                  </InnerDivTab>
                </ExperienceSectionTab>

            </ExperienceSection>

            {/* Column 2 */}
            <ExperienceSection>

            {/* Tab 4 */}
            <ExperienceSectionTab mainHeight = "660px" mainWidth = "720px" 
                                   mainHeight1 = "710px" mainWidth1 = "585px"
                                   mainHeight2 = "650px" mainWidth2 = "510px"
                                   mainHeight3 = "650px" mainWidth3 = "480px"
                                   mainHeight4 = "650px" mainWidth4 = "350px"
                                   marginTop3 = "0px" marginTop4 = "0px"
                                   >
                <InnerDivTab mainHeight = "550px" mainWidth = "600px" 
                                   mainHeight1 = "640px" mainWidth1 = "480px"
                                   mainHeight2 = "595px" mainWidth2 = "390px"
                                   mainHeight3 = "595px" mainWidth3 = "390px"
                                   mainHeight4 = "595px" mainWidth4 = "320px">
                      <TitleHeader>MIST - <span style={{color: `${colors.secondaryRed}` }}>Project Manager</span></TitleHeader>
                      <SubTitle>April 2024 - Present</SubTitle>
                      <SubDescription>• Contribute to documentation efforts and provide software support across various project phases, demonstrating versatility and commitment to advancing both managerial and technical aspects of satellite development  <br/>
                                      • Aid in developing standardized processes and templates for the systems team, enhancing project efficiency by 30%. Furthermore, spearhead budget tracking and management of around $350,000 for developing a satellite for
                                      space launch, ensuring efficient allocation of resources and adherence to financial targets <br/>
                                      </SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://mcmasterneudose.ca/">
                          <ExternalLogo/>
                          <h1>mcmasterneudose.ca</h1>
                      </ExternalSource>
                  </InnerDivTab>
                </ExperienceSectionTab>
                
                {/* Tab 5 */}
                <ExperienceSectionTab mainHeight = "570px" mainWidth = "720px" 
                                   mainHeight1 = "620px" mainWidth1 = "585px"
                                   mainHeight2 = "610px" mainWidth2 = "510px"
                                   mainHeight3 = "585px" mainWidth3 = "480px"
                                   mainHeight4 = "540px" mainWidth4 = "350px"
                                   marginTop3 = "2rem" marginTop4 = "2rem"

                                   style = {{marginTop: "2rem"}}
                                   >
                  <InnerDivTab mainHeight = "460px" mainWidth = "600px" 
                                   mainHeight1 = "550px" mainWidth1 = "480px"
                                   mainHeight2 = "540px" mainWidth2 = "390px"
                                   mainHeight3 = "530px" mainWidth3 = "390px"
                                   mainHeight4 = "490px" mainWidth4 = "320px">
                        <TitleHeader>Mac CSS - <span style={{color: `${colors.secondaryRed}` }}>Year Representative</span></TitleHeader>
                        <SubTitle>October 2022 - Present</SubTitle>
                        <SubDescription>• Facilitate communication with CS students and successfully orchestrate coordination between courses, instructors, academic departments, and CS students, resulting in a substantial 50% increase in student engagement in classes <br/>
                                        • Contribute valuable feedback when organizing events for first-year students and played an integral role in planning and suggesting events tailored to their needs <br/>
                                         </SubDescription>
                        <ExternalSource target = "_blank" rel="noreferrer" href = "https://mcmastercs.ca/">
                            <ExternalLogo/>
                            <h1>mcmastercs.ca</h1>
                        </ExternalSource>
                    </InnerDivTab>
                </ExperienceSectionTab>

                <ExperienceSectionTab mainHeight = "570px" mainWidth = "720px" 
                                   mainHeight1 = "600px" mainWidth1 = "585px"
                                   mainHeight2 = "630px" mainWidth2 = "510px"
                                   mainHeight3 = "580px" mainWidth3 = "480px"
                                   mainHeight4 = "600px" mainWidth4 = "350px"
                                   marginTop3 = "2rem" marginTop4 = "2rem"

                                   style = {{marginTop: "2rem"}}
                                   >
                  <InnerDivTab mainHeight = "460px" mainWidth = "600px" 
                                   mainHeight1 = "550px" mainWidth1 = "480px"
                                   mainHeight2 = "550px" mainWidth2 = "390px"
                                   mainHeight3 = "520px" mainWidth3 = "390px"
                                   mainHeight4 = "520px" mainWidth4 = "320px">
                        <TitleHeader>Marketyze  - <span style={{color: `${colors.secondaryRed}` }}>Head of Technology</span></TitleHeader>
                        <SubTitle>September 2022 - September 2023</SubTitle>
                        <SubDescription>• Worked closely with the UI/UX designer to revamp the organization’s website, leading to an 87% increase in monthly visitors. Additionally, supported ongoing maintenance and implemented new features as needed <br/>
                                        • Oversaw and supervised all technology-related aspects and Offered technology expertise and implemented new technological solutions during events <br/>
                                        </SubDescription>
                        <ExternalSource target = "_blank" rel="noreferrer" href = "https://www.instagram.com/marketyze.ca/">
                            <ExternalLogo/>
                            <h1>@marketyze.ca</h1>
                        </ExternalSource>
                    </InnerDivTab>
                </ExperienceSectionTab>

            </ExperienceSection>

          </TabContainer>

        </SecondaryTab>


        </MasterTab>
        </>

    );
};

export default Experiences;

//Master Tab
const MasterTab = styled.div`
    height: 2170px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    justify-content: center;
    align-items: center;
    transition: 0.375s;

    @media screen and (max-width: 1700px){
      height: 2270px;
      transition: 0.375s;
   }

    @media screen and (max-width: 1350px){
      height: 2290px;
      transition: 0.375s;
   }


   @media screen and (max-width: 1100px){
    height: 4540px;
    transition: 0.375s;
 }

 @media screen and (max-width: 480px){
  height: 4350px;
  transition: 0.375s;
}
`;

const SecondaryTab = styled.div`
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
    width: 480px;
    transition: 0.375s;
  }

  @media screen and (max-width: 480px){
    width: 350px;
    transition: 0.375s;
  }
`;

//Tab inner container 
const TabContainer = styled.div`
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
    transition: 0.375s;
    grid-column-gap: 2rem; 
  }

  @media screen and (max-width: 1100px){
    transition: 0.375s;
    grid-template-columns: 1fr; 
    grid-row-gap: 0rem;

  }
  
`;

//column sections 
const ExperienceSection = styled.div`
  height: 2000px;
`;

//Title
const TabH1 = styled.p`
  color: ${colors.mainRed}; 
  font-size: 60px; 
  position: relative;
  font-weight: 700; 
  width: 100%;
  letter-spacing: 1.4px; 
  font-style: italic;
  display: flex;
  font-family: "Raleway", sans-serif;
  transition: 0.375s;

  @media screen and (max-width: 480px){
    font-size: 40px;
    transition: 0.375s;
  }
 

`;

const SecondaryDescription = styled.p`
    font-size: 1.8rem;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${colors.mainRed};
    transition: 0.375s;

    @media screen and (max-width: 480px){
      font-size: 1.5rem;
      transition: 0.375s;
      top: 1.5rem;
      position: relative;
    }

`;

//all sections to experience
//experience
const ExperienceSectionTab = styled.div`
  height: ${(props) => props.mainHeight || '0px'}; 
  width: ${(props) => props.mainWidth || '0px'}; 
  background: ${colors.mainRed};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.375s;

  &:hover{
    transition: 0.375s;
    scale: 1.02;
  }

  @media screen and (max-width: 1700px){
      height: ${(props) => props.mainHeight1 || '0px'};
      width: ${(props) => props.mainWidth1 || '0px'}; 
      transition: 0.375s;
  }

  @media screen and (max-width: 1350px){
    height: ${(props) => props.mainHeight2 || '0px'};
    width: ${(props) => props.mainWidth2 || '0px'}; 
    transition: 0.375s;
  }

  @media screen and (max-width: 1100px){
    height: ${(props) => props.mainHeight3 || '0px'};
    width: ${(props) => props.mainWidth3 || '0px'}; 
    margin-top: ${(props) => props.marginTop3 || '0px'}; 
    transition: 0.375s;
  }

  @media screen and (max-width: 480px){
    height: ${(props) => props.mainHeight4 || '0px'};
    width: ${(props) => props.mainWidth4 || '0px'}; 
    margin-top: ${(props) => props.marginTop4 || '0px'}; 
    transition: 0.375s;

    &:hover{
          scale: 1;
    }
  }
`;

//inner box components 
const TitleHeader = styled.h1`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  color: white;
  
  @media screen and (max-width: 480px){
    font-size: 2rem;
  }

`;

const SubTitle = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  color: white;

  @media screen and (max-width: 480px){
    font-size: 1.4rem;
  }
`;

const SubDescription = styled.p`
  font-family: "Raleway", sans-serif;
  color: white;
  font-weight: 400;
  line-height: 1.6;
  font-size: 1.3rem;

  @media screen and (max-width: 1350px){
    font-size: 1.1rem;
  }

  @media screen and (max-width: 480px){
    font-size: 1rem;
  }

`;

const ExternalSource = styled.a`
    height: 70px;
    border-radius: 10px;
    background: ${colors.secondaryRed};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-decoration: none;

    h1{
      font-family: "Raleway", sans-serif;
      color: white;
      margin-top: 1.5rem;
      margin-left: 1rem;
      font-weight: 400;
      transition: 0.375s;

      @media screen and (max-width: 1350px){
        font-size: 1.8rem;
        transition: 0.375s;
      }

      @media screen and (max-width: 480px){
        font-size: 1.5rem;
        transition: 0.375s;
      }

    }

    &:hover{
      scale: 1.01;
      transition: all 0.4s ease;
      cursor: pointer;
    }
`;

const ExternalLogo = styled(FiExternalLink)`
    font-size: 2rem;
    color: white;
 
`;

const InnerDivTab = styled.div`
  height: ${(props) => props.mainHeight || '0px'}; 
  width: ${(props) => props.mainWidth || '0px'}; 
  transition: 0.375s;

  @media screen and (max-width: 1700px){
    height: ${(props) => props.mainHeight1 || '0px'}; 
    width: ${(props) => props.mainWidth1 || '0px'}; 
    transition: 0.375s;
  }  

 @media screen and (max-width: 1350px){
    height: ${(props) => props.mainHeight2 || '0px'}; 
    width: ${(props) => props.mainWidth2 || '0px'}; 
    transition: 0.375s;
  }
  
  @media screen and (max-width: 1100px){
    height: ${(props) => props.mainHeight3 || '0px'}; 
    width: ${(props) => props.mainWidth3 || '0px'}; 
    transition: 0.375s;
 }

  @media screen and (max-width: 480px){
    height: ${(props) => props.mainHeight4 || '0px'}; 
    width: ${(props) => props.mainWidth4 || '0px'}; 
    transition: 0.375s;
  }

`;
