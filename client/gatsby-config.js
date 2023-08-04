require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "saba-feronah-coaching",
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    DEV_SSR: true,
    DETECT_NODE_MUTATIONS: true
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-fontawesome-css",
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
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: `tool`,
            queryParams: {
              populate: "*"
            } 
          },
          {
            singularName: `friend`,
            queryParams: {
              populate: "*"
            } 
          },
        ],
        singleTypes: [`navigation`, `homepage`, `faq-page`],
        queryLimit: 1000,
      },
    },
  ],
};
