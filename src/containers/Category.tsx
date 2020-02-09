import { MainContent } from "../components/common/MainContent";
import React from "react";
import { useRouteData } from "react-static";
import { toTitleCase } from "../utils/toTitleCase";
import { Article, Category } from "types";
import { ArticleCard } from "../components/common/ArticleCard";
import { ArticleCardList } from "../components/common/ArticleCardList";

export default () => {
  const {
    articles,
    category
  }: { articles: Article[]; category: Category } = useRouteData();

  return (
    <MainContent>
      <h1>{toTitleCase(category.name)}</h1>
      <ArticleCardList>
        {articles.map(article => (
          <li>
            <ArticleCard key={article.id} article={article} />
          </li>
        ))}
      </ArticleCardList>
    </MainContent>
  );
};
