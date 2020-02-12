import styled from "@emotion/styled"
import { Link } from "@reach/router"
import moment from "moment"
import React from "react"
import { Article } from "types"
import { getArticlePath } from "../../utils/getArticlePath"
import { getAssetPath } from "../../utils/getAssetPath"
import { toTitleCase } from "../../utils/toTitleCase"
import { ArticleDate } from "./ArticleDate"
import { AuthorLink } from "./AuthorLink"
import { CornerCategoryTag } from "./CategoryTag"

const ArticleCardImage = styled.div`
  width: 100%;
  height: 320px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    left: 50%;
    top: 0;
    max-width: initial;
    max-height: 100%;
    transform: translateX(-50%);
  }
`

export const ArticleCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  position: relative;

  h1 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.1em;
    font-weight: 300;
  }

  :hover div:before {
    transform: scale(1.05);
  }
`

const ArticleCardTop = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
`

export type ArticleCardProps = {
  article: Article
}

export function ArticleCard(props: ArticleCardProps) {
  const { article } = props
  const {
    author,
    title,
    hero,
    preview,
    published_at,
    subjects: [primarySubject],
  } = article

  return (
    <ArticleCardWrapper>
      <ArticleCardTop to={getArticlePath(article)}>
        <ArticleCardImage>
          <img src={getAssetPath(hero.url)} />
        </ArticleCardImage>
        {primarySubject && (
          <CornerCategoryTag>
            {toTitleCase(primarySubject.name)}
          </CornerCategoryTag>
        )}
        <h1>{title}</h1>
        <p>{preview}</p>
      </ArticleCardTop>
      <AuthorLink author={author} />
      <ArticleDate>{moment(published_at).format("DD MMM YY")}</ArticleDate>
    </ArticleCardWrapper>
  )
}
