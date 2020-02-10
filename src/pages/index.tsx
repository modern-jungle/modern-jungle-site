import { ArticleList } from "components/common/ArticleList";
import { ArticleListItem } from "components/common/ArticleListItem";
import { MainContent } from "components/common/MainContent";
import React from "react";
import { useRouteData } from "react-static";
import styled from "styled-components";
import { Article, Category } from "types";
import { ArticleCard } from "../components/common/ArticleCard";
import { ArticleCardList } from "../components/common/ArticleCardList";
import { toTitleCase } from "../utils/toTitleCase";
import { ArticleBlock } from "components/common/ArticleBlock";

const HomeTop = styled.div`
  display: flex;

  height: 320px;

  img {
    width: calc(18rem + 2rem);
    height: calc(18rem + 2rem);
    display: none;
    margin-right: 1rem;
  }

  @media (min-width: 960px) {
    img {
      display: flex;
    }
  }
`;

const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  position: relative;

  h3 {
    margin: 0;
    padding: 0.3rem;
    font-size: 1.1rem;
    font-weight: 400;
    text-transform: lowercase;
    font-variant: small-caps;
    color: #fff;
    background: #333;
    text-align: center;
    position: relative;
  }

  :before {
    content: "";
    width: 100%;
    height: 1px;
    background: #e1e1e1;
    position: absolute;
    display: block;
  }
`;

export default () => {
  const {
    articles,
    weeklyFeatures,
    featuredCategory
  }: {
    articles: Article[];
    weeklyFeatures: Article[];
    featuredCategory: { category: Category; articles: Article[] } | null;
  } = useRouteData();
  const [first, ...rest] = articles;

  return (
    <>
      <MainContent>
        <HomeTop>
          <img src={"modern_jungle.png"} />
          <ArticleBlock article={first} />
        </HomeTop>
      </MainContent>
      <MainContent>
        <ArticleCardList>
          {rest.slice(0, 3).map(article => (
            <li key={article.id}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ArticleCardList>
      </MainContent>
      <MainContent>
        <More>
          <h3>Weekly Features</h3>
        </More>
        <ArticleList>
          {weeklyFeatures.slice(0, 3).map(article => (
            <ArticleListItem key={article.id} article={article} />
          ))}
        </ArticleList>
      </MainContent>
      {featuredCategory && (
        <MainContent>
          <h2
            style={{
              textAlign: "center",
              fontWeight: 500,
              fontSize: "1.6rem",
              margin: "2rem 0"
            }}
          >
            Featured Category: {toTitleCase(featuredCategory.category.name)}
          </h2>
          <ArticleCardList>
            {featuredCategory.articles.map(article => (
              <li key={article.id}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ArticleCardList>
        </MainContent>
      )}
      <MainContent>
        <More>
          <h3>More Stories</h3>
        </More>
        <ArticleList>
          {rest.slice(3).map(article => (
            <ArticleListItem key={article.id} article={article} />
          ))}
        </ArticleList>
      </MainContent>
    </>
  );
};
