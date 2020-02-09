import React from "react";
import { useRouteData } from "react-static";
import styled from "styled-components";
import { Article, Category } from "types";
import { ArticleBlock } from "../components/common/ArticleBlock";
import { ArticleCard } from "../components/common/ArticleCard";
import { ArticleCardList } from "../components/common/ArticleCardList";
import { toTitleCase } from "../utils/toTitleCase";
import { MainContent } from "components/common/MainContent";

const HomeTop = styled.section`
  display: flex;
`;

// const Logo = styled.figure`
//   width: 400px;
//   height: 400px;
//   margin: 0;
//   display: none;
//   flex: 0 0 400px;
//   padding: 1rem;

//   img {
//     width: 100%;
//   }

//   @media (min-width: 832px) {
//     display: flex !important;
//   }
// `;

const TopStoryWrapper = styled.div`
  /* padding: 1rem; */
  flex: 1;
  height: 500px;
`;

export default () => {
  const {
    articles,
    featuredCategory
  }: {
    articles: Article[];
    featuredCategory: { category: Category; articles: Article[] } | null;
  } = useRouteData();
  const [top, ...rest] = articles;

  return (
    <>
      <HomeTop>
        {/* <Logo>
          <img src="/modern_jungle.png" alt="Modern Jungle" />
        </Logo> */}
        <TopStoryWrapper>
          {top && <ArticleBlock article={top} />}
        </TopStoryWrapper>
      </HomeTop>
      <MainContent>
        <ArticleCardList>
          {rest.map(article => (
            <li key={article.id}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ArticleCardList>
      </MainContent>
      {featuredCategory && (
        <MainContent>
          <h2
            style={{
              textAlign: "center",
              fontWeight: 600,
              fontSize: "1.6rem",
              marginTop: "6rem"
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
    </>
  );
};
