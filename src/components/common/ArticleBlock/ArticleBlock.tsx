import styled from "@emotion/styled"
import { Link } from "@reach/router"
import React from "react"
import { Article } from "types"
import { getArticlePath } from "../../../utils/getArticlePath"
import { getAssetPath } from "../../../utils/getAssetPath"
import { toTitleCase } from "../../../utils/toTitleCase"
import { CategoryTag } from "../CategoryTag"
import { ImageContainer } from "../ImageContainer"

const ArticleBlockImage = styled(ImageContainer)`
  z-index: -1;
  position: absolute;
`

const ArticleBlockWrapper = styled.article`
  height: 100%;
  min-width: 20rem;
  position: relative;
  flex-direction: column;
  text-align: center;
  color: #fff;

  background-color: rgba(0, 0, 0, 0.2);
  transition: background-color linear 175ms;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  > a {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    color: inherit;
    overflow: hidden;
    position: relative;
  }

  h1 {
    font-size: 2.8rem;
    margin: 0;
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
    width: 75%;
    margin: 0 auto;
    line-height: 1.1em;
  }

  address {
    font-size: 1.2rem;
    font-weight: 400;
    font-style: normal;
  }
`

export type ArticleBlockProps = {
  article: Article
}

const CenterCategoryTag = styled(CategoryTag)`
  align-self: center;
`

export function ArticleBlock(props: ArticleBlockProps) {
  const { article } = props
  const {
    author,
    title,
    hero,
    preview,
    subjects: [primarySubject],
  } = article

  return (
    <ArticleBlockWrapper>
      <Link to={getArticlePath(article)}>
        <ArticleBlockImage>
          <img src={getAssetPath(hero.url)} />
        </ArticleBlockImage>
        {primarySubject && (
          <CenterCategoryTag>
            {toTitleCase(primarySubject.name)}
          </CenterCategoryTag>
        )}
        <h1>{title}</h1>
        <p>{preview}</p>
        <span>{author.name}</span>
      </Link>
    </ArticleBlockWrapper>
  )
}
