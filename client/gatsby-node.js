exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query MyQuery {
            allStrapiTool {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    data.allStrapiTool.edges.forEach(edge => {
        const slug = edge.node.slug
        actions.createPage({
          path: slug,
          component: require.resolve(`./src/templates/tool-page.js`),
          context: { slug: slug },
        })
    })
}