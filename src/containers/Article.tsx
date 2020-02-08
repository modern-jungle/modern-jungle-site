import ArticleImage from "components/writing/ArticleImage";
import ArticleQuote from "components/writing/ArticleQuote";
import ArticleSection from "components/writing/ArticleSection";
import React from "react";
import { useRouteData } from "react-static";
import styled from "styled-components";
import { Article } from "../../types";
import { getAssetPath } from "../utils/getAssetPath";

const ArticleWrapper = styled.article`
  max-width: 900px;
  margin: 0 auto;
`;

const AricleHero = styled.section<{ image: string }>`
  width: 100%;
  height: 400px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

export default () => {
  const { article }: { article: Article } = useRouteData();
  const components = article.content.map(component => {
    if ("text" in component) {
      return (
        <ArticleSection
          section={component}
          key={`${component.__component}${component.id}`}
        />
      );
    } else if ("image" in component) {
      return (
        <ArticleImage
          image={component}
          key={`${component.__component}${component.id}`}
        />
      );
    } else if ("quote" in component) {
      return <ArticleQuote quote={component} />;
    }

    return null;
  });

  return (
    <>
      <h3>{article.title}</h3>
      <AricleHero image={getAssetPath(article.hero.url)} />
      <ArticleWrapper>{components}</ArticleWrapper>
    </>
  );
};
