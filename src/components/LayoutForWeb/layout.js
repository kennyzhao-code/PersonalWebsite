
import * as React from "react";
import PropTypes from "prop-types";
//import { useStaticQuery, graphql } from "gatsby";
import Navbar from '../NavNFooter/fullNavbar';
import Footer from '../NavNFooter/index';
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar/> 
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

/** <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>*/

/** 
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  */