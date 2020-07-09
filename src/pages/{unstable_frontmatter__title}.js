import React from "react"
import {unstable_createPagesFromData, graphql} from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"


const BlogPostTemplate =  ({data}) => {
  const post = data.mdx

  return (
      <Layout>
        <article>
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
      }
    }
  }
`