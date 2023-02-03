import React from 'react'
import {colors} from '../globals/colors'
import styled from "styled-components"


const Blog = ({lightBg, id, topLine, darkText, coding, athletics, music, games, academics, personality}) => {
    return (
        <BlogContainer name = 'skillsHobbies' id ={id} lightBg = {lightBg}>
            <BlogSecondaryContainer>

                <BlogH1 data-aos-once='true' data-aos="fade-up">{topLine}</BlogH1>

                    <BlogWrapper data-aos-once='true' data-aos="fade-up">

                        <BlogSection>
                            <BlogSectionCoding>
                               

                            </BlogSectionCoding>

                            <BlogSectionMusic></BlogSectionMusic>
                            <BlogSectionAcademic></BlogSectionAcademic>
                        </BlogSection>

                        <BlogSection>
                            <BlogSectionAthletic></BlogSectionAthletic>
                            <BlogSectionGame></BlogSectionGame>
                            <BlogSectionPersonality></BlogSectionPersonality>
                        </BlogSection>

                    </BlogWrapper>
            </BlogSecondaryContainer>

        </BlogContainer>
    )
}

export default Blog


//main container 
const BlogContainer = styled.div`
    height: 2000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${({lightBg}) => (lightBg ? '#F8FCFF' : 'black')};
    justify-content: center;
    align-items: center;
`
//secondary container
const BlogSecondaryContainer = styled.div`
    height: 100%;
    width: 1510px;
`

const BlogH1 = styled.h1`
    color: #897CBF; 
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
//grid-template-columns: 1fr, the amount of fr will determine the items in each row
const BlogWrapper = styled.div`
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

const BlogSection = styled.div`
    height: 2000px;
`

//all sections to blog 
//blog1
const BlogSectionCoding = styled.div`
    height: 400px;
    width: 720px;
    background: ${colors.mainPurple};
    border-radius: 15px;

`

const BlogSectionMusic = styled.div`
    height: 800px;
    width: 720px;
    background: ${colors.mainPurple};
    border-radius: 15px;
    margin-top: 2rem;

`

const BlogSectionAcademic = styled.div`
    height: 450px;
    width: 720px;
    background: ${colors.mainPurple};
    border-radius: 15px;
    margin-top: 2rem;

`

//blog 2
const BlogSectionAthletic = styled.div`
    height: 350px;
    width: 720px;
    background: ${colors.mainPurple};
    border-radius: 15px;

`

const BlogSectionGame = styled.div`
    height: 600px;
    width: 720px;
    background: ${colors.mainPurple};
    border-radius: 15px;
    margin-top: 2rem;


`

const BlogSectionPersonality = styled.div`
    height: 700px;
    width: 720px;   
    background: ${colors.mainPurple};
    border-radius: 15px;
    margin-top: 2rem;


`




