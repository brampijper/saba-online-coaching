module.exports = {
  siteMetadata: {
    title: "Sofia-k-coaching",
  },
  plugins: [
    "gatsby-plugin-image",
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
        apiURL: `https://sofia-k-strapi.herokuapp.com`,
        contentTypes: [],
        singleTypes: [`navigation`, `contactbar`, `header`],
        queryLimit: 1000,
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    }
  ],
};
