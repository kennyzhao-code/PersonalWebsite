import * as React from "react";
import PropTypes from "prop-types";
//import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

// <footer>
//     © {new Date().getFullYear()}, Built with
//     {` `}
//     <a href="https://www.gatsbyjs.com">Gatsby</a>
// </footer>


// const data = useStaticQuery(graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)


  