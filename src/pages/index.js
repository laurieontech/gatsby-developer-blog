  
import React from 'react'
import Layout from '../components/layout'
import {graphql, Link} from 'gatsby'


export const HomePage = ({data}) => {
    const posts = data.allMdx.nodes
    return (
    <Layout>
    {posts.map((post) => {
        return (<Link to={post.path} key={post.path}>
        <h2>{post.frontmatter.title}</h2>
        </Link>
        )
            })}
    </Layout>
)}

export const pageQuery = graphql`
query { 
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
    nodes {
        path(filePath: "{frontmatter__title}")
        frontmatter {
          title
        }
      }
  }
}
`

export default HomePage