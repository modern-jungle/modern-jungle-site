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
import { ImageContainer } from "./ImageContainer"

const ArticleCardThumbnail = styled(ImageContainer)`
  height: 20rem;
`

export const ArticleCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
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

  img {
    transition: transform 100ms linear;
  }

  :hover {
    img {
      transform: scale(1.02);
    }
  }
`

const ArticleCardTop = styled(Link)`
  display: block;
  width: 100%;
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
        <ArticleCardThumbnail>
          <img src={getAssetPath(hero.url)} />
        </ArticleCardThumbnail>
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
