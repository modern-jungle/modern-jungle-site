import { Link } from "@reach/router";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import { Article } from "types";
import { getArticlePath } from "../../utils/getArticlePath";
import { getAssetPath } from "../../utils/getAssetPath";

const ArticleListItemInfo = styled.div`
  flex: 1;
`;

type ArticleListItemImageProps = { image: string };

const ArticleListItemImage = styled.div<ArticleListItemImageProps>`
  height: 100%;
  width: 16rem;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ArticleListItemWrapper = styled.li`
  display: flex;
  height: 14rem;
  overflow: hidden;

  a {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  article {
    height: 100%;
    width: 100%;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
  }

  h2 {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  :first-of-type {
    padding-top: 0;
  }

  :last-of-type {
    padding-bottom: 0;
  }
`;

export type ArticleListItemProps = { article: Article };

export function ArticleListItem(props: ArticleListItemProps) {
  const { article } = props;
  const { author, title, hero, preview, published_at } = article;

  return (
    <ArticleListItemWrapper>
      <article>
        <Link to={getArticlePath(article)}>
          <ArticleListItemInfo>
            <time>{moment(published_at).format("DD MMM YY")}</time>
            <h1>{title}</h1>
            <h2>{preview}</h2>
            <address>{author.name}</address>
          </ArticleListItemInfo>
          <ArticleListItemImage image={getAssetPath(hero.url)} />
        </Link>
      </article>
    </ArticleListItemWrapper>
  );
}
