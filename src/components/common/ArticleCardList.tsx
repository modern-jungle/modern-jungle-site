import styled from "styled-components";

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
    min-width: 300px;
    /* padding: 1rem; */
    flex: 1;
    display: flex;
    position: relative;
    margin: 0 1rem 1rem 0;

    :nth-child(3n) {
      margin-right: 0;
    }

    @media (min-width: 832px) {
      width: 33.33333%;
    }
  }
`;
