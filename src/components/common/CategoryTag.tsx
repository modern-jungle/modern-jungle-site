import styled, { css } from "styled-components";

const baseStyles = css`
  display: inline-block;
  padding: 0 0.2rem;
  color: #222;
  background: #fff;
  font-size: 1rem;
  font-weight: 500;
`;

type CategoryTagProps = {
  inverted?: boolean;
};

export const CategoryTag = styled.div<CategoryTagProps>`
  ${baseStyles}
  ${props =>
    props.inverted &&
    css`
      color: #fff;
      background: #222;
    `}
`;

export const CornerCategoryTag = styled.div`
  ${baseStyles}
  position: absolute;
  top: 0;
  right: 0;
`;
