import styled, { css } from "styled-components"

const StyledTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap");
  font-family: "Playfair Display", serif;
  font-size: 36px;
`
const StyledContainer = styled.div`
  * {
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    font-family: "Roboto", sans-serif;
    font-size: 24px;
  }
  max-width: 42rem;
  margin: auto;
`

export { StyledTitle, StyledContainer }
