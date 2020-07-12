import React from "react"
import { graphql, Link } from "gatsby"

const SingleTagsTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <div>
      <div>Posts about {`${tagName}`}</div>
      <ul>
        {posts.map(post => (
          <li key={post.frontmatter.path}>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SingleTagsTemplate
