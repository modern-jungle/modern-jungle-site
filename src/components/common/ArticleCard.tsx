import { Link } from "@reach/router";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import { Article } from "types";
import { getAssetPath } from "../../utils/getAssetPath";
import { toTitleCase } from "../../utils/toTitleCase";

type ArticleCardImageProps = {
  src: string;
};

const ArticleCardCategory = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  padding: 0 0.2rem;
  font-size: 1rem;
  font-weight: 500;
`;

const ArticleCardImage = styled.div<ArticleCardImageProps>`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 100%;
  height: 270px;
  margin: 0 auto;
`;

export const ArticleCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  position: relative;

  a {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1rem;
    font-weight: 300;
  }
`;

export type ArticleCardProps = {
  article: Article;
  showCategory?: boolean;
};

export function ArticleCard(props: ArticleCardProps) {
  const {
    article: { author, title, hero, preview, published_at, slug, category },
    showCategory = true
  } = props;

  return (
    <ArticleCardWrapper>
      <Link to={slug}>
        <ArticleCardImage src={getAssetPath(hero.url)} />
        {showCategory && (
          <ArticleCardCategory>
            {toTitleCase(category.name)}
          </ArticleCardCategory>
        )}
        <h1>{title}</h1>
        <h2>{preview}</h2>
        <address>{author.name}</address>
        <time>{moment(published_at).format("DD MMM YY")}</time>
      </Link>
    </ArticleCardWrapper>
  );
}
