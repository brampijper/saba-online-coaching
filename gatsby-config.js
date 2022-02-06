module.exports = {
  siteMetadata: {
    title: "saba-feronah-coaching",
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    DEV_WEBPACK_CACHE: true
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://saba-feronah-coaching.herokuapp.com`,
        collectionTypes: [`services`, `testimonals`],
        singleTypes: [`navigation`, `contactbar`, `homepage`, `service-page`, `about-page`,`faq-page`],
        queryLimit: 1000,
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
  ],
};
