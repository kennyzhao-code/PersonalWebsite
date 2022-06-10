import React, {useEffect, useState} from 'react'
//import Lottie from 'react-lottie';
import Layout from "../LayoutForWeb/layout"
import Seo from "../SEO/seo"
import HeroSection from "../HeroSection"
import InfoSection from "../InfoSection"
import { aboutMePage } from "../InfoSection/Data"
import Blog from "../blog(skills)"
import Experiences from "../Experiences"
import Projects from "../Projects"
import Language from "../Languages(coding)"
//import * as preLoadingAnimation from '../../images/9329-loading.json'
//import styled from "styled-components"

/*
const defaultPreLoadAnimation = {
    loop: true,
    autoplay: true, 
    animationData: preLoadingAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
*/

const PreWebsiteLoader = () => {
    const [completed, setcompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            setcompleted(true); 
        }, 4000); 
    }, []);

    return (
        <>
        {/* 
            {!completed ? (
                <div style={{backgroundColor: 'black', height: '100vh', width: '100vw'}}>
                    <Seo title="Kenny Zhao" />
                    <LottieContainer>
                        <Lottie style ={{height: '200px', width: '200px', margin: 'auto'}} options={defaultPreLoadAnimation}  />
                    </LottieContainer>
                </div>
            ) : (

        */}
                    <Layout>
                        <Seo title="Kenny Zhao" />
                        <HeroSection/>
                        <InfoSection {...aboutMePage}/>
                        <Language/>
                        <Experiences/>
                        <Blog/>
                        <Projects/>
                    </Layout> 
         {/* )} */}
        </>
    );
}

export default PreWebsiteLoader

/*
const LottieContainer = styled.div`
    position: relative;
    margin: auto;
    top: 40%;
`
*/