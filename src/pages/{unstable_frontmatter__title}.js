import React from "react"
import {unstable_createPagesFromData, graphql} from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"
import SEO from "../components/seo"

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

export default unstable_createPagesFromData(BlogPostTemplate, `Mdx`)

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
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