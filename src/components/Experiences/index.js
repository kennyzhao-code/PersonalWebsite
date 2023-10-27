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

            <ExperienceSection>
                <ExperienceSectionTab1>
                  <InnerDivTab1>
                      <TitleHeader>McMaster CSS - <span style={{color: `${colors.secondaryRed}` }}>First Year Rep</span></TitleHeader>
                      <SubTitle>October 2022 - Present</SubTitle>
                      <SubDescription>• Facilitated communication with CS students as a representative of the CSS<br/>
                                      • Successfully orchestrated coordination between courses, instructors, academic departments, and CS students, resulting in a substantial 50% increase in student engagement in classes <br/>
                                      • Contributed valuable feedback when organizing events for first-year students and played an integral role in planning and suggesting events tailored to their needs <br/>
                                      </SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://mcmastercs.ca/">
                          <ExternalLogo/>
                          <h1>mcmastercs.ca</h1>
                      </ExternalSource>
                  </InnerDivTab1>
                </ExperienceSectionTab1>

                <ExperienceSectionTab2 >
                  <InnerDivTab2>
                          <TitleHeader>Marketyze  - <span style={{color: `${colors.secondaryRed}` }}>Head Of Technology</span></TitleHeader>
                          <SubTitle>September 2022 - September 2023</SubTitle>
                          <SubDescription>• Collaborated with the UI/UX designer to redesign the organization's website, resulting in an impressive 87% increase in monthly visitors <br/>
                                          • Oversaw and supervised all technology-related aspects, including emails, website maintenance, and event equipment management <br/>
                                          • Offered technology expertise and implemented new technological solutions during events <br/>
                                          </SubDescription>
                          <ExternalSource target = "_blank" rel="noreferrer" href = "https://www.marketyze.org/">
                              <ExternalLogo/>
                              <h1>marketyze.org</h1>
                          </ExternalSource>
                      </InnerDivTab2>
                </ExperienceSectionTab2>

                <ExperienceSectionTab3>
                <InnerDivTab3>
                      <TitleHeader>AVGL  - <span style={{color: `${colors.secondaryRed}` }}>QA Tester & Tournament Organizer</span></TitleHeader>
                      <SubTitle>May 2021 - May 2023</SubTitle>
                      <SubDescription>• Assisting fellow student leaders at events and providing support to competitors during tournaments, achieving a 100% participant satisfaction rate <br/>
                                      • Enhanced the organization's website and features by more than 50% through rigorous QA testing, contributing to improved speed and efficiency <br/>
                                      • Demonstrated strong ability to work under pressure and remain composed in high-stress situations while overseeing and managing multiple competitions <br/>
                                      </SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://avgl.org/">
                          <ExternalLogo/>
                          <h1>avgl.org</h1>
                      </ExternalSource>
                  </InnerDivTab3>
                </ExperienceSectionTab3>

            </ExperienceSection>

            <ExperienceSection>
            
            <ExperienceSectionTab4>
                <InnerDivTab4>
                      <TitleHeader>MIST - <span style={{color: `${colors.secondaryRed}` }}>MOC Software Developer</span></TitleHeader>
                      <SubTitle>September 2023 - Present</SubTitle>
                      <SubDescription>• Oversaw the development of software in collaboration with the Canadian Space Agency, enabling remote command and control capabilities for ground stations and satellites  <br/>
                                      • Managed the reception, parsing, and storage of experimental data and telemetry from ground station(s), resulting in a 67% increase in operational efficiency <br/>
                                      • Maintained a variety of critical virtual servers essential for ensuring uninterrupted data collection and communication between satellites and mission control <br/>
                                      </SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://mcmasterneudose.ca/">
                          <ExternalLogo/>
                          <h1>mcmasterneudose.ca</h1>
                      </ExternalSource>
                  </InnerDivTab4>
                </ExperienceSectionTab4>
                        
                <ExperienceSectionTab5 >
                  <InnerDivTab5>
                        <TitleHeader>OHSEA  - <span style={{color: `${colors.secondaryRed}` }}>Co-Founder & Lead Tech Dev</span></TitleHeader>
                        <SubTitle>May 2021 - May 2023</SubTitle>
                        <SubDescription>• Accountable for assisting and overseeing technology-related software and projects, achieving a 100% uptime on essential technologies <br/>
                                        • Exhibit exceptional leadership capabilities in the management of the technology team, ensuring timely project delivery <br/>
                                        • Contribute to tournament planning and offer technological guidance as necessary <br/>
                                         </SubDescription>
                        <ExternalSource target = "_blank" rel="noreferrer" href = "https://www.instagram.com/ohseagg/">
                            <ExternalLogo/>
                            <h1>@ohseagg</h1>
                        </ExternalSource>
                    </InnerDivTab5>
                </ExperienceSectionTab5>

                <ExperienceSectionTab6 >
                  <InnerDivTab6>
                        <TitleHeader>Trudeau CS  - <span style={{color: `${colors.secondaryRed}` }}>Executive</span></TitleHeader>
                        <SubTitle>June 2021 - June 2022</SubTitle>
                        <SubDescription>• Contributed to the organization and execution of events, including Gamejams and Hackathons <br/>
                                        • Took on the responsibility of designing lessons and instructing students on a range of Computer Science topics, including Python, HTML, CSS, React, and more <br/>
                                        • Collaborated with fellow executives on club projects and effectively communicated any club-related concerns to the president <br/>
                                        </SubDescription>
                        <ExternalSource target = "_blank" rel="noreferrer" href = "https://www.instagram.com/petcsclub/">
                            <ExternalLogo/>
                            <h1>@petcsclub</h1>
                        </ExternalSource>
                    </InnerDivTab6>
                </ExperienceSectionTab6>
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
const ExperienceSectionTab1 = styled.div`
    height: 600px;
    width: 720px;
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
       width: 585px;
       height: 650px;
       transition: 0.375s;
    }

    @media screen and (max-width: 1350px){
      width: 510px;
      height: 620px;
      transition: 0.375s;
   }

   @media screen and (max-width: 1100px){
    width: 480px;
    margin-top: 0.5rem;
    transition: 0.375s;
   }

    @media screen and (max-width: 480px){
      width: 350px;
      height: 590px;
      transition: 0.375s;
      margin-top: 3rem;


      &:hover{
            scale: 1;
    }
 }

`;

const ExperienceSectionTab4 = styled.div`
    height: 640px;
    width: 720px;
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
      width: 585px;
      height: 710px;
      transition: 0.375s;
   }

   @media screen and (max-width: 1350px){
    width: 510px;
    height: 650px;
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

const ExperienceSectionTab6 = styled.div`
    height: 560px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.375s;

    &:hover{
      transition: 0.375s;
      scale: 1.02;
    }


    @media screen and (max-width: 1700px){
      width: 585px;
      height: 600px;
      transition: 0.375s;
   }

   @media screen and (max-width: 1350px){
    width: 510px;
    height: 630px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1100px){
  width: 480px;
  height: 580px;
  transition: 0.375s;
 }
 @media screen and (max-width: 480px){
  width: 350px;
  height: 600px;
  transition: 0.375s;

  &:hover{
            scale: 1;
    }
}

`;

//experience 2
const ExperienceSectionTab3 = styled.div`
    height: 630px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    transition: 0.375s;
    

    &:hover{
      transition: 0.375s;
      scale: 1.02;
    }


    @media screen and (max-width: 1700px){
      width: 585px;
      transition: 0.375s;
      height: 700px;
   }

   @media screen and (max-width: 1350px){
    width: 510px;
    height: 650px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1100px){
  width: 480px;
  transition: 0.375s;
 }
 @media screen and (max-width: 480px){
  width: 350px;
  height: 640px;
  transition: 0.375s;

  &:hover{
            scale: 1;
    }
}

`;

const ExperienceSectionTab5 = styled.div`
    height: 600px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.375s;

    &:hover{
      transition: 0.375s;
      scale: 1.02;
    }


    @media screen and (max-width: 1700px){
      width: 585px;
      height: 620px;
      transition: 0.375s;
   }

   @media screen and (max-width: 1350px){
    width: 510px;
    height: 610px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1100px){
  width: 480px;
  transition: 0.375s;
 }
 @media screen and (max-width: 480px){
  width: 350px;
  height: 540px;
  transition: 0.375s;

  &:hover{
            scale: 1;
    }
}


`;

const ExperienceSectionTab2 = styled.div`
    height: 570px;
    width: 720px;   
    background: ${colors.mainRed};
    border-radius: 15px;
    display: flex;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    transition: 0.375s;

    &:hover{
      transition: 0.375s;
      scale: 1.02;
    }


    @media screen and (max-width: 1700px){
      width: 585px;
      transition: 0.375s;
      height: 580px;
   }

   @media screen and (max-width: 1350px){
    width: 510px;
    height: 620px;
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


const InnerDivTab1 = styled.div`
  height: 510px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 570px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 560px;
  transition: 0.375s;
}

@media screen and (max-width: 480px){
  width: 320px;
  height: 530px;
  transition: 0.375s;
}
`;

const InnerDivTab4 = styled.div`
  height: 520px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 640px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 595px;
  transition: 0.375s;
}
@media screen and (max-width: 480px){
  width: 320px;
  transition: 0.375s;
}
`;

const InnerDivTab6 = styled.div`
  height: 470px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 500px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 530px;
  transition: 0.375s;
}

@media screen and (max-width: 1350px){
  width: 390px;
  height: 520px;
  transition: 0.375s;
}
@media screen and (max-width: 480px){
  width: 320px;
  height: 550px;
  transition: 0.375s;
}
`;

const InnerDivTab3 = styled.div`
  height: 545px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 640px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 585px;
  transition: 0.375s;
}
@media screen and (max-width: 480px){
  width: 320px;
  height: 590px;
  transition: 0.375s;
}
`;

const InnerDivTab5 = styled.div`
  height: 510px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 550px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 520px;
  transition: 0.375s;
}
@media screen and (max-width: 480px){
  width: 320px;
  height: 470px;
  transition: 0.375s;
}
`;

const InnerDivTab2 = styled.div`
  height: 470px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 520px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 565px;
  transition: 0.375s;
}
@media screen and (max-width: 480px){
  width: 320px;
  height: 545px;
  transition: 0.375s;
}
`;