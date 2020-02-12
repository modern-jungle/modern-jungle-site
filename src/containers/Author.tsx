import React from "react"
import { useRouteData } from "react-static"
import { Article, Author } from "types"
import { ArticleCard } from "../components/common/ArticleCard"
import { ArticleCardList } from "../components/common/ArticleCardList"
import { MainContent } from "../components/common/MainContent"
import styled from "@emotion/styled"
import { getAssetPath } from "../utils/getAssetPath"

const AuthorContent = styled(MainContent)`
  > h1 {
    font-size: 3rem;
    font-weight: 500;
  }

  > p {
    max-width: 30rem;
    margin: 1rem auto;
  }
`

export default () => {
  const {
    author,
    articles,
  }: { author: Author; articles: Article[] } = useRouteData()
  const { biography, name, profile_picture } = author

  return (
    <>
      <AuthorContent style={{ textAlign: "center" }}>
        <h1>{name}</h1>
        {profile_picture && (
          <img
            src={getAssetPath(profile_picture.url)}
            alt={name}
            style={{ margin: "0 auto", display: "block" }}
          />
        )}
        {biography && <p>{biography}</p>}
      </AuthorContent>
      <AuthorContent>
        <h3 style={{ textAlign: "center" }}>Stories by {name}</h3>
        <ArticleCardList>
          {articles.map(article => (
            <li>
              <ArticleCard key={article.id} article={article} />
            </li>
          ))}
        </ArticleCardList>
      </AuthorContent>
    </>
  )
}
