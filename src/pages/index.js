import React from "react"
import Header from "../components/Header"
import { graphql, Link } from "gatsby"
import { StyledContainer } from "../components/Header/Header.style"
import ArticleCard from "../components/ArticleCard"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <StyledContainer>
        <Header />
        <h4>Here are some latest posts of mine-</h4>
        {edges.map(edge => {
          const { frontmatter } = edge.node
          return (
            <ArticleCard key={frontmatter.path} frontmatter={frontmatter} />
          )
        })}
        <div>
          <Link to="/tags">Browse by Tag</Link>
        </div>
      </StyledContainer>
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
