import React from "react";
import { useRouteData } from "react-static";
import { Article } from "types";
import ArticleCard from "../components/common/ArticleCard";
import ArticleList from "../components/common/ArticleList";

export default () => {
  const { articles }: { articles: Article[] } = useRouteData();

  return (
    <ArticleList>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </ArticleList>
  );
};
