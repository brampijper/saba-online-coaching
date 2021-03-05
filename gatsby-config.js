module.exports = {
  siteMetadata: {
    title: "Sofia-k-coaching",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
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
        apiURL: `http://localhost:1337`,
        contentTypes: [],
        singleTypes: [`homepage`, `navigation`],
        queryLimit: 1000,
      },
    }
  ],
};
