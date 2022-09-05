import React from 'react'
import {IoLogoWebComponent} from  "react-icons/io5"
import {GiConsoleController} from "react-icons/gi"
import { IconLinks, ProjectContainer, Description, ContentWrapper, ProjectRow, Project, Images, IconsDiv } from './ProjectElements'
import {FaGithub} from 'react-icons/fa'
import ohseaPro from '../../images/ohsea.jpg'
import greenPro from '../../images/greenfoot.jpg'


const Projects = () => {
    return (
        <ProjectContainer name = "projects" >

            <Description data-aos-once='true' data-aos="fade-up">
                Projects I've been working on ⎯⎯
            </Description>

            <ContentWrapper>
                <ProjectRow>

                    <Project data-aos-once='true' data-aos="fade-up">

                        <h3>Greenfoot Project <GiConsoleController style = {{marginLeft: '0.5rem', marginBottom: '0.2rem', color: '#78be79'}}/> </h3>
                        <p> A video game based on Anagrams built with Greenfoot using Java. Uses the idea of object oriented programming and Greenfoot’s api to create a fun and interactive game. </p>

                        <IconsDiv>
                        <IconLinks href = 'https://github.com/kennyzhao-code/P3E-Word-Match' target = '_blank' aria-label="Github"> <FaGithub/> </IconLinks>
                        </IconsDiv>

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