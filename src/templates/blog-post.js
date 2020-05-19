import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

export const BlogPostTemplate =  ({data}) => {
    const post = data.markdownRemark

    return (
        <Layout>
        <article>
        <Image 
        fluid={post.frontmatter.image.childImageSharp.fluid}
        alt=''
        />
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
            image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
        }
      }
`

export default BlogPostTemplate

