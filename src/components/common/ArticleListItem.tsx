import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { Article } from "types";
import { getAssetPath } from "../../utils/getAssetPath";
import moment from "moment";

const ArticleListItemInfo = styled.article`
  flex: 1;
`;

type ArticleListItemImageProps = { image: string };

const ArticleListItemImage = styled.div<ArticleListItemImageProps>`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 9rem;
  width: 9rem;
  background-repeat: no-repeat;
`;

const ArticleListItemWrapper = styled.li`
  display: flex;
  min-height: 9rem;

  a {
    display: flex;
    flex-direction: row;
  }

  article {
    height: 100%;
    width: 100%;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
  }

  h2 {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
`;

export type ArticleListItemProps = { article: Article };

export function ArticleListItem(props: ArticleListItemProps) {
  const {
    article: { author, title, hero, preview, published_at, slug }
  } = props;

  return (
    <ArticleListItemWrapper>
      <article>
        <Link to={slug}>
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
