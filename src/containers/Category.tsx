import React from "react";
import { useRouteData } from "react-static";
import { Article, Category } from "types";

export default () => {
  const {
    articles,
    category
  }: { articles: Article[]; category: Category } = useRouteData();

  return (
    <div>
      <h3>{category.name}</h3>
      <p>{JSON.stringify(articles.length)}</p>
    </div>
  );
};
