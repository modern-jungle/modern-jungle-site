import React from "react";
import { useRouteData } from "react-static";
import styled from "styled-components";
import { Article } from "types";
import ArticleCard from "../components/common/ArticleCard";
import ArticleList from "../components/common/ArticleList";
// @ts-ignore
import logo from "../images/modern_jungle.png";

const Logo = styled.img`
  width: 400px;
  height: 400px;
  padding: 1em;
  display: none;

  @media (min-width: 832px) {
    display: flex;
  }
`;

export default () => {
  const { articles }: { articles: Article[] } = useRouteData();

  return (
    <div>
      <ArticleList>
        <Logo src={logo} alt="Modern Jungle" />
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ArticleList>
    </div>
  );
};
