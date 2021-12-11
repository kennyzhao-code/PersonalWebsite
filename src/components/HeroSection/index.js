import React from 'react'
//useState
import { HeroContainer, HeroP2, VideoBg, Button, ButtonWrapper} from './HeroElements.js'
//import ProgressBar from './HeroSectionProgressBar'
import './HeroSection.css' 
import Video from '../../images/original.mp4'
//import {CgProfile} from "react-icons/cg"

//import TextAnimation from '../animations/TextAnimation'

//hover ? <icon/> : <icon/> to change icon over hover 


/*
    <HeroH1> <TextAnimation/> </HeroH1>



    <div className ='heroContent delay' >

                <HeroP>
                    <CgProfile style ={{display: 'block', fontSize: '60px', marginBottom: '10px'}}/>
                    KZ
                </HeroP>
                <ProgressBar done='100'/>

     </div>


    */


     /**
      * const [hover, setHover] = useState (false); 
      * const onHover = () => {
        setHover(!hover)
    }
      */

const HeroSection = () => {

    return (
        <HeroContainer name ="hero">
            
            <div className ='videoBG'>
                <VideoBg autoPlay muted src={Video} type = 'video/mp4' />
            </div>

            <div className ='heroContentP delay'>
                <HeroP2>
                    My name is Kenny Zhao, a student from Ontario, Canada and welcome to my website.
                </HeroP2>

                <ButtonWrapper>
                    <Button to = 'aboutMe' smooth = 'linear' duration = {500} spy = {true} exact ='true' offset = {100}>Explore</Button>
                </ButtonWrapper>

            </div>

        </HeroContainer>
    )
}

export default HeroSection
