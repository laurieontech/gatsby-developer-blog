import React from 'react'
import Layout from '../components/layout'
import {graphql, Link} from 'gatsby'


export const HomePage = ({data}) => {
    const posts = data.allMarkdownRemark.nodes
    return (
    <Layout>
    {posts.map((post) => {
        return (<Link to={post.fields.slug} key={post.fields.slug}>
        <h2>{post.frontmatter.title}</h2>
        </Link>
        )
            })}
    </Layout>
)}

export const pageQuery = graphql`
query { 
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
    nodes {
        fields {
            slug
        }
        frontmatter {
          title
        }
      }
  }
}
`

export default HomePage