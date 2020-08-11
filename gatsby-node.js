const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }


exports.createPages= async ({graphql, actions, reporter}) => {
    const {createPage} = actions

    const BlogPostTemplate = require.resolve(`./src/templates/blog-post.js`)
    const result = await graphql(`
    {
        allMarkdownRemark {
            nodes {
              id
              fields {
                slug
              }
            }
          }
    }
    `)

    if (result.errors) {
        reporter.panic(result.errors)
    }

    const posts = result.data.allMarkdownRemark.nodes

    posts.forEach((post) => {
        createPage({
            path: post.fields.slug,
            component: BlogPostTemplate,
            context: {
                id: post.id
            }
        })
    })

}