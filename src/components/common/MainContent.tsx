import styled from "styled-components";

export type MainContentProps = {
  margin?: boolean;
};

export const MainContent = styled.section<MainContentProps>`
  max-width: 62rem;
  width: 100%;
  margin: ${props =>
      typeof props.margin !== "boolean" || props.margin ? "1rem" : "0"}
    auto;
`;
