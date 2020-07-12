import styled from "styled-components"
import palette from "../../styles/palette"

const StyledArticleCardContainer = styled.div`
  border: 2px solid transparent;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  &:hover {
    border-color: ${palette.light_secondary2};
  }
`

export default StyledArticleCardContainer
