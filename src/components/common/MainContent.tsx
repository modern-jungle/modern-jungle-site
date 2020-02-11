import styled from "@emotion/styled";

export type MainContentProps = {
  margin?: boolean;
};

export const MainContent = styled.section<MainContentProps>`
  max-width: 62rem;
  width: 100%;
  margin: ${props =>
      typeof props.margin !== "boolean" || props.margin ? "3rem" : "0"}
    auto;

  :first-child {
    margin-top: 0;
  }
`;
