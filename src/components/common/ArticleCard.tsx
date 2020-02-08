import { Link } from "@reach/router";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import { Article } from "types";
import { getAssetPath } from "../../utils/getAssetPath";

export type ArticleCardWrapperProps = {
  dark: boolean;
};

export const ArticleCardWrapper = styled.div<ArticleCardWrapperProps>`
  padding: 1rem;
  height: 400px;
  min-width: 400px;
  display: flex;
  flex: 1;
  position: relative;

  color: ${props => (props.dark ? "#fff" : "#000")};
  text-align: center;

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
    flex: 1;
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

  transition: transform linear 75ms;

  &:hover {
    filter: grayscale(0);
    transform: scale(1.015);

    cite {
      background: #999;
    }
  }

  p {
    font-size: 1.1em;
    margin: 0 auto;
    max-width: 600px;
    color: inherit;
    flex: 1;
  }

  cite {
    font-family: "Space Mono", monospace;
    font-size: 0.8rem;
    font-weight: 100;
    font-style: normal;
    flex: 1;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    color: #f3f3f3;
    background: #aaa;
    padding: 0 4px;
  }
`;

export type ArticleCardProps = { article: Article };

export function ArticleCard(props: ArticleCardProps) {
  const { article } = props;
  const dark = article.light_title;
  const image = getAssetPath(article.hero.url);

  return (
    <ArticleCardWrapper dark={dark}>
      <Link to={`/article/${article.slug}`}>
        <ArticleCardContent image={image}>
          <h2>{article.title}</h2>
          <p>{article.preview}</p>
          <cite>
            <span>{article.author.name}</span>{" "}
            <time>{moment(article.published_at).format("DD MMM YY")}</time>
          </cite>
        </ArticleCardContent>
      </Link>
    </ArticleCardWrapper>
  );
}

export default ArticleCard;
