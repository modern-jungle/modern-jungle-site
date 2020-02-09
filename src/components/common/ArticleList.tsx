import styled from "styled-components";

export const ArticleList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0.5rem 0;
    + li {
      border-top: 1px solid #ccc;
    }
  }
`;
