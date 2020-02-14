import React from "react"
import { useRouteData } from "react-static"
import { Article } from "types"
import { ArticleCard } from "../components/common/ArticleCard"
import { ArticleCardList } from "../components/common/ArticleCardList"
import { MainContent } from "../components/common/MainContent"

export default () => {
  const { articles }: { articles: Article[] } = useRouteData()

  return (
    <MainContent padding={false}>
      <ArticleCardList>
        {articles.map(article => (
          <li key={article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ArticleCardList>
    </MainContent>
  )
}
