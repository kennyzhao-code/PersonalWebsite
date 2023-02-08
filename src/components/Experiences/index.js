import React from 'react'
import styled from "styled-components"
import { colors } from "../globals/colors"
import { FiExternalLink } from 'react-icons/fi'


const Experiences = ({lightBg, id, topLine, description}) => {
    return (
      <MasterTab name = "experiences" id = {id} lightBg = {lightBg}>

        <SecondaryTab>

        <TabH1 data-aos-once='true' data-aos="fade-up"> {topLine} </TabH1>

        <SecondaryDescription>{description}</SecondaryDescription>

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
                          <h1>Our Website</h1>
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
                          <h1>Our Website</h1>
                      </ExternalSource>
                  </InnerDivTrudeauMusic>
                </ExperienceSectionMusicCouncil>

                <ExperienceSectionTrudeauCs>
                <InnerDivPethsCSS>
                      <TitleHeader>Trudeau CS  - <span style={{color: `${colors.secondaryRed}` }}>Executive</span></TitleHeader>
                      <SubTitle>June 2021 - June 2022</SubTitle>
                      <SubDescription>• Responsible for teaching and preparing lessons <br/>
                                      • Aiding and organizing events such as Hackathons and Game Jams <br/>
                                      • Aiding other executives and answering questions during their presentation <br/>
                                      • Collabrate with other executives on creating new and exciting projects</SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://www.instagram.com/petcsclub/">
                          <ExternalLogo/>
                          <h1>Instagram</h1>
                      </ExternalSource>
                  </InnerDivPethsCSS>
                </ExperienceSectionTrudeauCs>
            </ExperienceSection>

            <ExperienceSection>
                <ExperienceSectionAvgl>
                <InnerDivAvgl>
                      <TitleHeader>AVGL  - <span style={{color: `${colors.secondaryRed}` }}>QA Tester & Tournament Organizer</span></TitleHeader>
                      <SubTitle>May 2021 - Present</SubTitle>
                      <SubDescription>• Tournament organizer during tournaments and events such as Intel Inspires and TEXSef <br/>
                                      • Data digging for important information to grow Student Leaders and AVGL <br/>
                                      • Helped improve speed and efficiency of the organization’s website as a QA tester <br/>
                                      • Aiding other tournament organizers during events and tournament planning </SubDescription>
                      <ExternalSource target = "_blank" rel="noreferrer" href = "https://avgl.org/">
                          <ExternalLogo/>
                          <h1>Our Website</h1>
                      </ExternalSource>
                  </InnerDivAvgl>
                </ExperienceSectionAvgl>

                <ExperienceSectionOhsea>
                  <InnerDivOhsea>
                        <TitleHeader>OHSEA  - <span style={{color: `${colors.secondaryRed}` }}>Co-Founder & Lead Tech Dev</span></TitleHeader>
                        <SubTitle>May 2021 - Present</SubTitle>
                        <SubDescription>• Responible for organizing and preparing tournaments and events <br/>
                                        • Responible for tech related issues during tournaments and events <br/>
                                        • Responible for aiding and managing tech related software such as tournament bots <br/>
                                        • Tournament organizer during tournaments and events </SubDescription>
                        <ExternalSource target = "_blank" rel="noreferrer" href = "https://www.instagram.com/ohseagg/">
                            <ExternalLogo/>
                            <h1>Instagram</h1>
                        </ExternalSource>
                    </InnerDivOhsea>
                </ExperienceSectionOhsea>

                <ExperienceSectionMarketyze>
                  <InnerDivMarketyze>
                          <TitleHeader>Marketyze  - <span style={{color: `${colors.secondaryRed}` }}>Head Of Technology</span></TitleHeader>
                          <SubTitle>October 2022 - Present</SubTitle>
                          <SubDescription>• Responsible for working with the team UI/UX designer on revamping the organization’s website <br/>
                                          • Manage and supervise all technology related components from emails, website and equipment for events <br/>
                                          • Provide any technological advice and implement new technologies during events <br/>
                                          • Collaborate with the CEO on potential new technologies</SubDescription>
                          <ExternalSource target = "_blank" rel="noreferrer" href = "https://www.instagram.com/marketyze.ca/">
                              <ExternalLogo/>
                              <h1>Instagram</h1>
                          </ExternalSource>
                      </InnerDivMarketyze>
                </ExperienceSectionMarketyze>
            </ExperienceSection>

          </TabContainer>

        </SecondaryTab>


        </MasterTab>

    )
}

export default Experiences

//Master Tab
const MasterTab = styled.div`
    height: 2050px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    justify-content: center;
    align-items: center;
`

const SecondaryTab = styled.div`
  height: 100%;
  width: 1510px;
`

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
`

//column sections 
const ExperienceSection = styled.div`
  height: 2000px;
`

//Title
const TabH1 = styled.h1`
  color: ${colors.mainRed}; 
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
    color: ${colors.mainRed}
`



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

`

const ExperienceSectionMusicCouncil = styled.div`
    height: 620px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ExperienceSectionTrudeauCs = styled.div`
    height: 610px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

`

//experience 2
const ExperienceSectionAvgl = styled.div`
    height: 600px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ExperienceSectionOhsea = styled.div`
    height: 600px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;


`

const ExperienceSectionMarketyze = styled.div`
    height: 550px;
    width: 720px;   
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;


`

//inner box components 
const TitleHeader = styled.h1`
  font-family: "OktaNeueBold", sans-serif;
  color: white;

`

const SubTitle = styled.h2`
  font-family: "OktaNeueLight", sans-serif;
  color: white;
`

const SubDescription = styled.p`
  font-family: "OktaNeueLight", sans-serif;
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
`

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
      font-family: "OktaNeueLight", sans-serif;
      color: white;
      margin-top: 1.5rem;
      margin-left: 1rem;

    }

    &:hover{
      scale: 1.01;
      transition: all 0.4s ease;
      cursor: pointer;
    }
`

const ExternalLogo = styled(FiExternalLink)`
    font-size: 2rem;
    color: white;
 
`


const InnerDivMacCss = styled.div`
  height: 420px;
  width: 600px;
`

const InnerDivTrudeauMusic = styled.div`
  height: 400px;
  width: 600px;
`

const InnerDivPethsCSS = styled.div`
  height: 400px;
  width: 600px;
`

const InnerDivAvgl = styled.div`
  height: 520px;
  width: 600px;
`

const InnerDivOhsea = styled.div`
  height: 450px;
  width: 600px;
`

const InnerDivMarketyze = styled.div`
  height: 450px;
  width: 600px;
`