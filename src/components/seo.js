import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description, lang = "en", meta = [], title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      {/* Use the default title and description from siteMetadata if none is passed */}
      <title>{title ? title : defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ""} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {meta.map((m, index) => (
        <meta key={index} {...m} />
      ))}
    </>
  );
}

export const Head = Seo; // Export as Head if you use the Head API
export default Seo;