//import React, {useEffect, useState} from 'react'
//import Lottie from 'react-lottie';
import React from "react";
import Layout from "../components/LayoutForWeb/layout";
import Seo from "../components/SEO/seo";

import HeroSection from "../components/HeroSection/index";
import InfoSection from "../components/InfoSection/index";
import Blog from "../components/blog(skills)/index";
import Experiences from "../components/Experiences/index";
import Projects from "../components/Projects/index";
import Emotions from "../components/emotions/emotions";


import { blogData } from "../components/blog(skills)/blogData";
import { projectData } from "../components/Projects/projectData";
import { experiencesData } from "../components/Experiences/experienceData";

//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

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

/*<StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */

/** <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */

const IndexPage = () => (
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
      <Seo />
      <HeroSection />
      <InfoSection />
      <Emotions />
      <Blog {...blogData} />
      <Projects {...projectData} />
      <Experiences {...experiencesData} />
    </Layout>
    {/* )} */}
  </>
);

export default IndexPage;

/*
const LottieContainer = styled.div`
    position: relative;
    margin: auto;
    top: 40%;
`

const [completed, setcompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            setcompleted(true); 
        }, 4000); 
    }, []);

*/
