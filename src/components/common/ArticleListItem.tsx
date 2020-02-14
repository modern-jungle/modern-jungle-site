import styled from "@emotion/styled"
import { Link } from "@reach/router"
import moment from "moment"
import React from "react"
import { Article } from "types"
import { getArticlePath } from "../../utils/getArticlePath"
import { getAssetPath } from "../../utils/getAssetPath"
import { ArticleDate } from "./ArticleDate"
import { AuthorLink } from "./AuthorLink"
import { ImageContainer } from "./ImageContainer"

const ArticleListItemInfo = styled.div`
  flex: 1;

  a:first-of-type {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`

const ArticleListItemThumbnail = styled(ImageContainer)`
  width: 10rem;
  justify-content: flex-end;
`

const ArticleListItemWrapper = styled.li`
  display: flex;
  height: 12rem;
  overflow: hidden;

  article {
    display: flex;
    flex: 1;
    height: 100%;
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
`

export type ArticleListItemProps = { article: Article }

export function ArticleListItem(props: ArticleListItemProps) {
  const { article } = props
  const { author, title, hero, preview, published_at } = article

  return (
    <ArticleListItemWrapper>
      <article>
        <ArticleListItemInfo>
          <Link to={getArticlePath(article)}>
            <ArticleDate>
              {moment(published_at).format("DD MMM YY")}
            </ArticleDate>
            <h1>{title}</h1>
            <h2>{preview}</h2>
          </Link>
          <AuthorLink author={author} />
        </ArticleListItemInfo>
        <Link to={getArticlePath(article)}>
          <ArticleListItemThumbnail>
            <img src={getAssetPath(hero.url)} />
          </ArticleListItemThumbnail>
        </Link>
      </article>
    </ArticleListItemWrapper>
  )
}
