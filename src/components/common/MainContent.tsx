import styled from "@emotion/styled"

export type MainContentProps = {
  margin?: boolean
  padding?: boolean
}

export const MainContent = styled.section<MainContentProps>`
  max-width: 62rem;
  width: 100%;
  margin: ${props =>
      typeof props.margin !== "boolean" || props.margin ? "3rem" : "0"}
    auto;
  padding: 0
    ${props =>
      typeof props.padding !== "boolean" || props.padding ? "0.5rem" : "0"};

  :first-child {
    margin-top: 0;
  }
`
