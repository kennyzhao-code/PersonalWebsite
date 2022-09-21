import React from 'react'
import {IoLogoWebComponent} from  "react-icons/io5"
import {TbAugmentedReality} from "react-icons/tb"
import {SiDevpost} from "react-icons/si"
import { IconLinks, ProjectContainer, Description, ContentWrapper, ProjectRow, Project, Images, IconsDiv, IconsWrapper } from './ProjectElements'
import {FaGithub} from 'react-icons/fa'
import ohseaPro from '../../images/ohsea.jpg'
import greenPro from '../../images/heAR.png'


const Projects = () => {
    return (
        <ProjectContainer name = "projects" >

            <Description data-aos-once='true' data-aos="fade-up">
                Projects I've been working on ⎯⎯
            </Description>

            <ContentWrapper>
                <ProjectRow>

                    <Project data-aos-once='true' data-aos="fade-up">

                        <h3>Hack The North <TbAugmentedReality style = {{marginLeft: '0.5rem', marginBottom: '0.2rem', color: '#78be79'}}/> </h3>
                        <p> Using AR and NLP, this project developed in a team of 5 can summarize, translate and analyze conversations and lectures to focus on the details that matter the most. </p>

                        <IconsWrapper>

                        <IconsDiv>
                        <IconLinks href = 'https://github.com/HTN-heAR' target = '_blank' aria-label="Github"> <FaGithub/> </IconLinks>
                        </IconsDiv>

                        <IconsDiv>
                        <IconLinks href = 'https://devpost.com/software/hear-1pibsd?ref_content=my-projects-tab&ref_feature=my_projects' target = '_blank' aria-label="Github"> <SiDevpost/> </IconLinks>
                        </IconsDiv>

                        </IconsWrapper>

                    </Project>

                    <Images data-aos-once='true' data-aos="fade-up" src={greenPro}/>

                </ProjectRow>


                <ProjectRow>

                    <Project style={{paddingTop: '3rem'}} data-aos-once='true' data-aos="fade-up">

                        <h3>OHSEA<IoLogoWebComponent style = {{marginLeft: '0.5rem', marginBottom: '0.5rem', color: '#7371fc'}}/> </h3>
                        <p> Check out some projects that I helped create for the Ontario High School Esports Association. Most notable creation that I helped on is the official website of OHSEA.</p>

                        <IconsDiv>
                        <IconLinks href = 'https://github.com/ohseagg' target = '_blank' aria-label="Github"> <FaGithub/> </IconLinks>
                        </IconsDiv>

                    </Project>

                    <Images data-aos-once='true' data-aos="fade-up" src={ohseaPro}/>

                </ProjectRow>

            </ContentWrapper>

        </ProjectContainer>
    )
}

export default Projects


/* <FinalText href ='/' data-aos-once='true' data-aos="fade-up"> 
            Check out more projects at my Github 
            </FinalText>

 */