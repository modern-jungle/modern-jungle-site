import React from "react";
import { useRouteData } from "react-static";
import { Article } from "types";
import { ArticleCard } from "../components/common/ArticleCard";
import { ArticleCardList } from "../components/common/ArticleCardList";

export default () => {
  const { articles }: { articles: Article[] } = useRouteData();

  return (
    <ArticleCardList>
      {articles.map(article => (
        <li>
          <ArticleCard key={article.id} article={article} />
        </li>
      ))}
    </ArticleCardList>
  );
};
