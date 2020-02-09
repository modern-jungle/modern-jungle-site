import ArticleImage from "components/writing/ArticleImage";
import ArticleQuote from "components/writing/ArticleQuote";
import ArticleSection from "components/writing/ArticleSection";
import React from "react";
import Helmet from "react-helmet";
import { useRouteData, useSiteData } from "react-static";
import styled from "styled-components";
import { Article } from "../../types";
import { getAssetPath } from "../utils/getAssetPath";
import moment from "moment";

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
  const { siteRoot }: { siteRoot: string } = useSiteData();
  const { article }: { article: Article } = useRouteData();
  const image = getAssetPath(article.hero.url);
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

  const url = `${siteRoot}/${article.slug}`;
  const publishedTime = moment(article.published_at).format();
  const modifiedTime = moment(article.updated_at).format();

  return (
    <>
      <Helmet>
        <title>{article.title} — Modern Jungle</title>
        <link rel="canonical" href={url} />
        <meta name="Description" content={article.preview} />
        <meta property="og:rich_attachment" content="true" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.preview} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Modern Jungle" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/modernjunglepress"
        />
        <meta property="article:published_time" content={publishedTime} />
        <meta property="article:modified_time" content={modifiedTime} />
        <meta property="og:updated_time" content={modifiedTime} />
        <meta property="og:image" content={image} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Jungle_Modern" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.preview} />
      </Helmet>
      <ArticleWrapper>
        <h1 style={{ textAlign: "center" }}>{article.title}</h1>
        <AricleHero image={image} />
        {components}
      </ArticleWrapper>
    </>
  );
};
