import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { Article } from "types";
import { getAssetPath } from "../../utils/getAssetPath";

export type ArticleCardWrapperProps = {
  dark: boolean;
};

export const ArticleCardWrapper = styled.div<ArticleCardWrapperProps>`
  padding: 1em;
  height: 400px;
  min-width: 400px;
  display: flex;
  flex: 1;

  color: ${props => (props.dark ? "#fff" : "#000")};
  text-align: center;

  transition: filter 100ms;

  @media (min-width: 832px) {
    width: 50%;
    flex: none;

    &:first-of-type,
    &:nth-of-type(3n + 1) {
      flex: 1;
    }
  }

  &:nth-of-type(3n + 1),
  &:first-of-type {
    h2 {
      line-height: 1em;
      font-size: 3rem;
    }
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
  }

  h2 {
    display: inline-block;
    padding: 0.5em;
    color: inherit;
  }

  p {
    font-size: 1.1em;
    margin: 0 auto;
    max-width: 600px;
    color: inherit;
  }

  cite {
    font-size: 1.2em;
    font-weight: 700;
    font-style: normal;
  }
`;

export type ArticleCardContentProps = { image: string };

export const ArticleCardContent = styled.article<ArticleCardContentProps>`
  height: 100%;
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  filter: grayscale(0.5);

  &:hover {
    filter: grayscale(0);
  }
`;

export type ArticleCardProps = { article: Article };

export function ArticleCard(props: ArticleCardProps) {
  const { article } = props;
  const dark = article.light_title;
  const image = getAssetPath(article.hero.url);

  return (
    <ArticleCardWrapper dark={dark}>
      <ArticleCardContent image={image}>
        <Link to={`/article/${article.slug}`}>
          <h2>{article.title}</h2>
          <p>{article.preview}</p>
          <cite>{article.author.name}</cite>
        </Link>
      </ArticleCardContent>
    </ArticleCardWrapper>
  );
}

export default ArticleCard;
