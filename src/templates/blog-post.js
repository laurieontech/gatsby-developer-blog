import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"

export const BlogPostTemplate =  ({data}) => {
    const post = data.markdownRemark
    const imageSrc = post.frontmatter.image ? post.frontmatter.image.childImageSharp.fluid.src : ''

    return (
        <Layout>
        <SEO title={post.frontmatter.title} image={imageSrc}/>
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

