import React from 'react'
import styled from "styled-components"
import { colors } from "../globals/colors"


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
                      <ExternalSource></ExternalSource>
                  </InnerDivMacCss>

                </ExperienceSectionMacCss>

                <ExperienceSectionMusicCouncil></ExperienceSectionMusicCouncil>
                <ExperienceSectionTrudeauCs></ExperienceSectionTrudeauCs>
            </ExperienceSection>

            <ExperienceSection>
                <ExperienceSectionAvgl></ExperienceSectionAvgl>
                <ExperienceSectionOhsea></ExperienceSectionOhsea>
                <ExperienceSectionMarketyze></ExperienceSectionMarketyze>
            </ExperienceSection>


          </TabContainer>

        </SecondaryTab>


        </MasterTab>

    )
}

export default Experiences

//Master Tab
const MasterTab = styled.div`
    height: 2000px;
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
    height: 500px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ExperienceSectionMusicCouncil = styled.div`
    height: 800px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

`

const ExperienceSectionTrudeauCs = styled.div`
    height: 450px;
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
    height: 350px;
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
    height: 700px;
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

const ExternalSource = styled.div`
    border: 1px solid black;
    height: 100px;
`

const InnerDivMacCss = styled.div`
  height: 400px;
  width: 600px;
  border: 1px solid black;
`