import React from "react"
import { Link } from "gatsby"
import StyledArticleCardContainer from "./ArticleCard.style"

const ArticleCard = ({ frontmatter }) => {
  return (
    <StyledArticleCardContainer>
      <Link to={frontmatter.path}>{frontmatter.title}</Link>
      <br />
      Published on {frontmatter.date}
    </StyledArticleCardContainer>
  )
}

export default ArticleCard
