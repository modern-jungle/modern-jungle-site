import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { Article } from "types";
import { getAssetPath } from "../../utils/getAssetPath";

type ArticleBlockWrapperProps = { image: string };

const ArticleBlockWrapper = styled.article<ArticleBlockWrapperProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  color: #fff;
  height: 100%;

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    color: inherit;
    padding: 1rem;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 300;
    width: 75%;
    margin: 0 auto;

    p {
      margin: 0;
    }
  }

  address {
    font-size: 1.5rem;
    font-weight: 400;
    font-style: normal;
  }
`;

export type ArticleBlockProps = {
  article: Article;
};

export function ArticleBlock(props: ArticleBlockProps) {
  const {
    article: { author, title, hero, preview, slug }
  } = props;

  return (
    <ArticleBlockWrapper image={getAssetPath(hero.url)}>
      <Link to={slug}>
        <h1>{title}</h1>
        <h2>{preview}</h2>
        <address>
          <span>{author.name}</span>
        </address>
      </Link>
    </ArticleBlockWrapper>
  );
}
