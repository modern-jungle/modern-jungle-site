import styled from "styled-components";

export const ArticleCardList = styled.ul`
  padding: 0;
  display: flex;
  position: relative;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: auto;
  list-style-type: none;

  > li {
    min-width: 300px;
    padding: 1rem;
    flex: 1;
    display: flex;
    position: relative;

    @media (min-width: 832px) {
      width: 33.33333%;
    }
  }
`;
