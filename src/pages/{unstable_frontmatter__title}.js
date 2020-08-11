import React from "react"
import {unstable_createPagesFromData, graphql} from "gatsby"
import Layout from "../components/layout"

const BlogPostTemplate =  () => {

  return (
      <Layout>
          The data will go here
      </Layout>
  )
}

export default unstable_createPagesFromData(BlogPostTemplate, `Mdx`)

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`