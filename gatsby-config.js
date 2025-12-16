module.exports = {
  siteMetadata: {
    title: `Kenny Zhao`,
    description: `Hello! My name is Kenny Zhao, a student from McMaster University who has a passion for coding and a love for exploring new heights. Welcome to my official Website.`,
    author: `@KennyZhao`,
    siteUrl: `https://kennyzhao.dev/`,
  },
  plugins: [
    `gatsby-adapter-netlify`,
    `gatsby-plugin-image`,
    
    {
      resolve: `gatsby-plugin-styled-components`,
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kenny Zhao`,
        short_name: `KZ`,
        start_url: `/`,
        background_color: `#b19cd9`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `black`, //this affects iphone notch and etc, read link for more details super useful!
        display: `minimal-ui`,
        icon: `src/images/kz_logo.png`, // This path is relative to the root of the site. changes icon when site loads 
      },
    },

    // `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


