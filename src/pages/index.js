import React from 'react'
import Layout from "../components/layout.jsx";
import Seo from "../components/seo.js"
import LandingSection from '../components/Landing/landing'

//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"


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
        <Layout>
            <Seo />
            <LandingSection />
        </Layout> 
    </>
)

export default IndexPage;