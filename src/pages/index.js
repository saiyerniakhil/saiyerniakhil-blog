import React from "react"
import Header from "../components/Header"
import { graphql, Link } from "gatsby"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
            <br />
            {frontmatter.date}
          </div>
        )
      })}
      <div>
        <Link to="/tags">Browse by Tag</Link>
      </div>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`

export default Layout
