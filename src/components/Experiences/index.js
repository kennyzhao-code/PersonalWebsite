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
                <ExperienceSectionMacCss>
                  <InnerDivMacCss>
                      <TitleHeader>McMaster CSS - <span style={{color: `${colors.secondaryRed}` }}>First Year Rep</span></TitleHeader>
                      <SubTitle>October 2022 - Present</SubTitle>
                      <SubDescription>• Responible for organizing and aiding in events <br/>
                                      • Responible for communicating with first years about any issues and events <br/>
                                      • Responible for bridging the communication between teachers and students <br/>
                                      • Reponsible for representing all first year students in the society</SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://mcmastercs.ca/">
                          <ExternalLogo/>
                          <h1>mcmastercs.ca</h1>
                      </ExternalSource>
                  </InnerDivMacCss>
                </ExperienceSectionMacCss>

                <ExperienceSectionMusicCouncil>
                <InnerDivTrudeauMusic>
                      <TitleHeader>Trudeau Music - <span style={{color: `${colors.secondaryRed}` }}>Web Developer</span></TitleHeader>
                      <SubTitle>November 2020 - June 2022</SubTitle>
                      <SubDescription>• Reponsible for managing the council Website and links <br/>
                                      • Aiding other executives and representatives during event planning <br/>
                                      • Reponsible for maintaning the quality of instruments and deal with any music related issues <br/>
                                      • Work with the technology chair on any techology advancements</SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://trudeaumusic.wixsite.com/peths">
                          <ExternalLogo/>
                          <h1>trudeaumusic.com</h1>
                      </ExternalSource>
                  </InnerDivTrudeauMusic>
                </ExperienceSectionMusicCouncil>


                <ExperienceSectionAvgl>
                <InnerDivAvgl>
                      <TitleHeader>AVGL  - <span style={{color: `${colors.secondaryRed}` }}>QA Tester & Tournament Organizer</span></TitleHeader>
                      <SubTitle>May 2021 - March 2023</SubTitle>
                      <SubDescription>• Tournament organizer during tournaments and events such as Intel Inspires and TEXSef <br/>
                                      • Data digging for important information to grow Student Leaders and AVGL <br/>
                                      • Helped improve speed and efficiency of the organization’s website as a QA tester <br/>
                                      • Aiding other tournament organizers during events and tournament planning </SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://avgl.org/">
                          <ExternalLogo/>
                          <h1>avgl.org</h1>
                      </ExternalSource>
                  </InnerDivAvgl>
                </ExperienceSectionAvgl>

            </ExperienceSection>

            <ExperienceSection>

            <ExperienceSectionMarketyze >
                  <InnerDivMarketyze>
                          <TitleHeader>Marketyze  - <span style={{color: `${colors.secondaryRed}` }}>Head Of Technology</span></TitleHeader>
                          <SubTitle>October 2022 - Present</SubTitle>
                          <SubDescription>• Responsible for working with the team UI/UX designer on revamping the organization’s website <br/>
                                          • Manage and supervise all technology related components from emails, website and equipment for events <br/>
                                          • Provide any technological advice and implement new technologies during events <br/>
                                          • Collaborate with the CEO on potential new technologies</SubDescription>
                          <ExternalSource target = "_blank" rel="noreferrer" href = "https://marketyze-org.notion.site/marketyze-org/Volunteer-with-Marketyze-3593c98f73be4f5c97b6d1147589b16e">
                              <ExternalLogo/>
                              <h1>marketyze.org</h1>
                          </ExternalSource>
                      </InnerDivMarketyze>
                </ExperienceSectionMarketyze>
                

                <ExperienceSectionOhsea >
                  <InnerDivOhsea>
                        <TitleHeader>OHSEA  - <span style={{color: `${colors.secondaryRed}` }}>Co-Founder & Lead Tech Dev</span></TitleHeader>
                        <SubTitle>May 2021 - March 2023</SubTitle>
                        <SubDescription>• Responible for organizing and preparing tournaments and events <br/>
                                        • Responible for tech related issues during tournaments and events <br/>
                                        • Responible for aiding and managing tech related software such as tournament bots <br/>
                                        • Tournament organizer during tournaments and events </SubDescription>
                        <ExternalSource target = "_blank" rel="noreferrer" href = "https://www.instagram.com/ohseagg/">
                            <ExternalLogo/>
                            <h1>@ohseagg</h1>
                        </ExternalSource>
                    </InnerDivOhsea>
                </ExperienceSectionOhsea>

                <ExperienceSectionTrudeauCs >
                  <InnerDivPethsCSS>
                        <TitleHeader>Trudeau CS  - <span style={{color: `${colors.secondaryRed}` }}>Executive</span></TitleHeader>
                        <SubTitle>June 2021 - June 2022</SubTitle>
                        <SubDescription>• Responsible for teaching and preparing lessons <br/>
                                        • Aiding and organizing events such as Hackathons and Game Jams <br/>
                                        • Aiding other executives and answering questions during their presentation <br/>
                                        • Collabrate with other executives on creating new and exciting projects</SubDescription>
                        <ExternalSource target = "_blank" rel="noreferrer" href = "https://www.instagram.com/petcsclub/">
                            <ExternalLogo/>
                            <h1>@petcsclub</h1>
                        </ExternalSource>
                    </InnerDivPethsCSS>
                </ExperienceSectionTrudeauCs>
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
    height: 2120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    justify-content: center;
    align-items: center;
    transition: 0.375s;

    @media screen and (max-width: 1350px){
      height: 2320px;
      transition: 0.375s;
   }


   @media screen and (max-width: 1100px){
    height: 4650px;
    transition: 0.375s;
 }

 @media screen and (max-width: 480px){
  height: 4530px;
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
    }

`;



//all sections to experience
//experience
const ExperienceSectionMacCss = styled.div`
    height: 520px;
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
       height: 550px;
       transition: 0.375s;
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

const ExperienceSectionMusicCouncil = styled.div`
    height: 620px;
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
      transition: 0.375s;
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

const ExperienceSectionTrudeauCs = styled.div`
    height: 540px;
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
      transition: 0.375s;
   }

   @media screen and (max-width: 1350px){
    width: 510px;
    height: 630px;
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

//experience 2
const ExperienceSectionAvgl = styled.div`
    height: 600px;
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
   }

   @media screen and (max-width: 1350px){
    width: 510px;
    height: 680px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1100px){
  width: 480px;
  transition: 0.375s;
 }
 @media screen and (max-width: 480px){
  width: 350px;
  height: 720px;
  transition: 0.375s;

  &:hover{
            scale: 1;
    }
}

`;

const ExperienceSectionOhsea = styled.div`
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
      height: 630px;
      transition: 0.375s;
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
  height: 600px;
  transition: 0.375s;

  &:hover{
            scale: 1;
    }
}


`;

const ExperienceSectionMarketyze = styled.div`
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
      transition: 0.375s;
      height: 600px;
   }

   @media screen and (max-width: 1350px){
    width: 510px;
    height: 670px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 480px;
  transition: 0.375s;
 }
 @media screen and (max-width: 480px){
  width: 350px;
  transition: 0.375s;
  margin-top: 2rem;

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
    font-size: 1.5rem;
  }
`;

const SubDescription = styled.p`
  font-family: "Raleway", sans-serif;
  color: white;
  font-weight: 400;
  line-height: 1.6;
  font-size: 1.3rem;

  @media screen and (max-width: 480px){
    font-size: 1.2rem;
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


const InnerDivMacCss = styled.div`
  height: 420px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 470px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 560px;
  transition: 0.375s;
}

@media screen and (max-width: 480px){
  width: 320px;
  height: 540px;
  transition: 0.375s;
}
`;

const InnerDivTrudeauMusic = styled.div`
  height: 400px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 540px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  transition: 0.375s;
}
@media screen and (max-width: 480px){
  width: 320px;
  transition: 0.375s;
}
`;

const InnerDivPethsCSS = styled.div`
  height: 440px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 450px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 530px;
  transition: 0.375s;
}
@media screen and (max-width: 480px){
  width: 320px;
  transition: 0.375s;
}
`;

const InnerDivAvgl = styled.div`
  height: 520px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 600px;
  transition: 0.375s;
}
@media screen and (max-width: 480px){
  width: 320px;
  height: 630px;
  transition: 0.375s;
}
`;

const InnerDivOhsea = styled.div`
  height: 450px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 520px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 550px;
  transition: 0.375s;
}
@media screen and (max-width: 480px){
  width: 320px;
  height: 500px;
  transition: 0.375s;
}
`;

const InnerDivMarketyze = styled.div`
  height: 450px;
  width: 600px;
  transition: 0.375s;


  @media screen and (max-width: 1700px){
    width: 480px;
    height: 550px;
    transition: 0.375s;
 }

 @media screen and (max-width: 1350px){
  width: 390px;
  height: 610px;
  transition: 0.375s;
}
@media screen and (max-width: 480px){
  width: 320px;
  transition: 0.375s;
}
`;