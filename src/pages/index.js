import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import { aboutMePage } from "../components/InfoSection/Data"
import Blog from "../components/blog(skills)"
import Experiences from "../components/Experiences"
import Projects from "../components/Projects"
import Language from "../components/Languages(coding)"

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
  <Layout>
    <Seo title="Kenny Zhao" />
    <HeroSection/>
    <InfoSection {...aboutMePage}/>
    <Language/>
    <Experiences/>
    <Blog/>
    <Projects/>
  </Layout>
)

export default IndexPage
