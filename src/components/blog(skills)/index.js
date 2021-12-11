import React from 'react'
import { BlogContainer, BlogH1, BlogWrapper, BlogIcon, BlogH2} from './blogElements'
import './blogElements.css'
import icon1 from '../../images/pic1.svg'
import icon2 from '../../images/pic2.svg'
import icon3 from '../../images/pic3.svg'
import icon4 from '../../images/pic4.svg'
import icon5 from '../../images/pic5.svg'
import icon6 from '../../images/pic6.svg'

const Blog = () => {
    return (
        <BlogContainer name = 'skillsHobbies' id ="services">

            <BlogH1 data-aos-once='true' data-aos="fade-up">My skills and hobbies ⎯⎯</BlogH1>

                <BlogWrapper data-aos-once='true' data-aos="fade-up">

                    <div style = {{background: '#88A1BD', borderRadius: '30px' }} className = "card">
                        <BlogIcon src={icon1}/>
                        

                        <div className = "overlay">

                            <div className ="title"> [Coding] </div>
                            <div className = "text"> I have been learning about computer science for over 4 years and currently I am working on multiple projects from game development, to creating more websites for other extracurriculars that I am proud to be representing. </div>

                        </div>
                    </div>

                    <div style = {{background: '#ff6961', borderRadius: '30px' }} className = "card">
                        <BlogIcon src={icon2}/>
                        

                        <div className = "overlay">

                            <div className ="title"> [Athletics] </div>
                            <div className = "text"> I love being active and playing different sports. As of now, I do my best to be active everyday by going out for walks, hitting the gym, or playing sports such as basketball. </div>

                        </div>
                    </div>

                    <div style = {{background: '#FAC898', borderRadius: '30px' }} className = "card">
                        <BlogIcon src={icon3}/>
                        

                        <div className = "overlay">

                            <div className ="title"> [Music] </div>
                            <div className = "text"> Music plays a big role in my life. Right now, I play the bass clarinet for my school band, occasionally play my guitar and piano whenever I want to enjoy some music or even listen to it. </div>

                        </div>
                    </div>

                    <div style = {{background: '#FDFD96', borderRadius: '30px'  }} className = "card">
                        <BlogIcon src={icon4}/>
                        

                        <div className = "overlay">

                            <div className ="title"> [Games] </div>
                            <div className = "text"> Video games continue to be one of my favorite hobbies to relax and chill with friends. At the moment, I am not playing much because of academics, but if you ever are down to play, just add me on discord: REALLY!? #4206 </div>

                        </div>
                    </div>

                    <div style = {{background: '#BEE5B0', borderRadius: '30px' }} className = "card">
                        <BlogIcon src={icon5}/>
                      

                        <div className = "overlay">

                            <div className ="title"> [Personality] </div>
                            <div className = "text"> I would say I am a very outgoing and kind person. If you ever do meet me in person, I would love to talk or even shoot me a private message on one of my socials.</div>
                            
                        </div>
                    </div>

                    <div style = {{background: '#C3B1E1', borderRadius: '30px' }} className = "card">
                        <BlogIcon src={icon6}/>
                        

                        <div className = "overlay">

                            <div className ="title"> [Academics] </div>
                            <div className = "text"> Academics, especially competitions are where I love being in as it forces me to become better and pushes me past my limits. As of now, I am preparing for more contests, such as waterloo’s CCC and Euclid.</div>

                        </div>
                    </div>

                   

                </BlogWrapper>
            
        </BlogContainer>
    )
}

export default Blog
