import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StyledTitle } from "./Header.style"

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div>
      <StyledTitle>I am {title}</StyledTitle>
      <p>{description}</p>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
