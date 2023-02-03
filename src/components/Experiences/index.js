import React from 'react'
import styled from "styled-components"
import { colors } from "../globals/colors"


const Experiences = ({lightBg, id, topLine, darkText, css, ohseaa, trudeaucs, trudeaumusic, avgl, marketyze, description}) => {
    return (
      <MasterTab name = "experiences" id = {id} lightBg = {lightBg}>

        <SecondaryTab>

        <TabH1 data-aos-once='true' data-aos="fade-up"> {topLine} </TabH1>

          <TabContainer data-aos-once='true' data-aos="fade-up">

            <ExperienceSection>
                <ExperienceSectionMacCss></ExperienceSectionMacCss>
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



//all sections to experience
//experience
const ExperienceSectionMacCss = styled.div`
    height: 400px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;

`

const ExperienceSectionMusicCouncil = styled.div`
    height: 800px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;

`

const ExperienceSectionTrudeauCs = styled.div`
    height: 450px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;

`

//experience 2
const ExperienceSectionAvgl = styled.div`
    height: 350px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;

`

const ExperienceSectionOhsea = styled.div`
    height: 600px;
    width: 720px;
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;


`

const ExperienceSectionMarketyze = styled.div`
    height: 700px;
    width: 720px;   
    background: ${colors.mainRed};
    border-radius: 15px;
    margin-top: 2rem;


`