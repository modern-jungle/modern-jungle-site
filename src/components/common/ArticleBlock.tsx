import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { Article } from "types";
import { getAssetPath } from "../../utils/getAssetPath";
import { toTitleCase } from "../../utils/toTitleCase";
import { CategoryTag } from "./CategoryTag";
import { getArticlePath } from "../../utils/getArticlePath";

type ArticleBlockWrapperProps = { image: string };

const ArticleBlockWrapper = styled.article<ArticleBlockWrapperProps>`
  display: flex;
  flex: 1;
  height: 100%;
  position: relative;
  flex-direction: column;
  text-align: center;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  background-color: #888;
  color: #fff;

  transition: background-color linear 175ms;

  :hover {
    background-color: #999;
  }

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
    font-size: 2.8rem;
    margin: 0;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 300;
    width: 75%;
    margin: 0 auto;

    p {
      margin: 0;
    }
  }

  address {
    font-size: 1.2rem;
    font-weight: 400;
    font-style: normal;
  }
`;

export type ArticleBlockProps = {
  article: Article;
};

const CenterCategoryTag = styled(CategoryTag)`
  align-self: center;
`;

export function ArticleBlock(props: ArticleBlockProps) {
  const { article } = props;
  const {
    author,
    title,
    hero,
    preview,
    slug,
    subjects: [primarySubject]
  } = article;

  return (
    <ArticleBlockWrapper image={getAssetPath(hero.url)}>
      <Link to={getArticlePath(article)}>
        {primarySubject && (
          <CenterCategoryTag>
            {toTitleCase(primarySubject.name)}
          </CenterCategoryTag>
        )}
        <h1>{title}</h1>
        <h2>{preview}</h2>
        <address>
          <span>{author.name}</span>
        </address>
      </Link>
    </ArticleBlockWrapper>
  );
}
