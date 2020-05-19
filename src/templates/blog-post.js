import React from "react"
import {graphql} from "gatsby"
import Layout from '../components/layout'

export const BlogPostTemplate =  ({data}) => {
    const post = data.markdownRemark

    return (
        <Layout>
        <article>
        <h2>{post.frontmatter.title}</h2>
        <section dangerouslySetInnerHTML={{__html: post.html}}/>
        </article>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostById($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
          frontmatter {
            title
          }
        }
      }
`

export default BlogPostTemplate

