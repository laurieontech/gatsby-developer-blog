import React from "react"
import {createPagesFromData, graphql} from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"


const BlogPostTemplate =  ({data}) => {
    const post = data.mdx
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
        <MDXRenderer>{post.body}</MDXRenderer>
        </article>
        </Layout>
    )
}

export default createPagesFromData(BlogPostTemplate, `allMdx`)

export const pageQuery = graphql`
    query BlogPostById($fields__slug: String!) {
      mdx(fields: { slug: { eq: $fields__slug } }) {
          body
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


