import { Link } from "@reach/router";
import moment from "moment";
import React from "react";
import styled from "@emotion/styled";
import { Article } from "types";
import { getArticlePath } from "../../utils/getArticlePath";
import { getAssetPath } from "../../utils/getAssetPath";
import { toTitleCase } from "../../utils/toTitleCase";
import { CornerCategoryTag } from "./CategoryTag";

type ArticleCardImageProps = {
  image: string;
};

const ArticleCardImage = styled.div<ArticleCardImageProps>`
  width: 100%;
  height: 270px;
  margin: 0 auto;
  overflow: hidden;

  :before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: block;
    transition: transform 150ms ease-out;
  }
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

  :hover div:before {
    transform: scale(1.05);
  }
`;

export type ArticleCardProps = {
  article: Article;
};

export function ArticleCard(props: ArticleCardProps) {
  const { article } = props;
  const {
    author,
    title,
    hero,
    preview,
    published_at,
    subjects: [primarySubject]
  } = article;

  return (
    <ArticleCardWrapper>
      <Link to={getArticlePath(article)}>
        <ArticleCardImage image={getAssetPath(hero.url)} />
        {primarySubject && (
          <CornerCategoryTag>
            {toTitleCase(primarySubject.name)}
          </CornerCategoryTag>
        )}
        <h1>{title}</h1>
        <h2>{preview}</h2>
        <address>{author.name}</address>
        <time>{moment(published_at).format("DD MMM YY")}</time>
      </Link>
    </ArticleCardWrapper>
  );
}
