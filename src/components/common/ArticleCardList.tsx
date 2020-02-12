import styled from "@emotion/styled"

export const ArticleCardList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-basis: auto;
  list-style-type: none;

  > li {
    display: flex;
    flex: 1;
    min-width: 20rem;
    padding: 0.5rem;
    position: relative;

    :nth-child(3n) {
      margin-right: 0;
    }

    @media (min-width: 832px) {
      width: 33.33333%;
    }
  }
`
