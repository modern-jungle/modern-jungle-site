import React from "react";
import axios from "axios";
import path from "path";

require("dotenv").config();

const siteRoot =
  process.env.SITE_ROOT ||
  (process.env.NODE_ENV === "production"
    ? "https://modernjungle.press"
    : "http://localhost:3000");

function getHomeData(page, allArticles, articlesByCategory) {
  const [config] = page.config;
  const featuredCategory = config.featured_category
    ? {
        category: config.featured_category,
        articles: articlesByCategory[config.featured_category.id]
      }
    : null;
  const articles = featuredCategory
    ? allArticles.filter(
        article => article.category.id !== featuredCategory.category.id
      )
    : allArticles;

  return {
    articles,
    featuredCategory
  };
}

function getArticlesByCategory(articles, categories) {
  const articlesByCategory = categories.reduce((acc, category) => {
    acc[category.id] = [];
    return acc;
  }, {});

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];

    articlesByCategory[article.category.id].push(article);
  }

  return articlesByCategory;
}

const sortByDate = (articleA, articleB) =>
  new Date(articleA.published_at) - new Date(articleB.published_at);

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  siteRoot,
  getSiteData: async () => ({ siteRoot }),
  getRoutes: async () => {
    const { data: articles } = await axios.get(
      `${process.env.API_URL}/articles`
    );
    const { data: categories } = await axios.get(
      `${process.env.API_URL}/categories`
    );
    const { data: pages } = await axios.get(`${process.env.API_URL}/pages`);
    const home = pages.find(page => page.name === "home");
    const sortedArticles = articles.sort(sortByDate);
    const articlesByCategory = getArticlesByCategory(articles, categories);

    return [
      {
        path: "/",
        getData: () => ({
          categories,
          articlesByCategory,
          ...getHomeData(home, sortedArticles, articlesByCategory)
        }),
        children: sortedArticles
          .map(article => ({
            path: `/${article.slug}`,
            template: "src/containers/Article",
            getData: () => ({
              article
            })
          }))
          .concat(
            categories.map(category => ({
              path: `/category/${category.name}`,
              template: "src/containers/Category",
              getData: () => ({
                category,
                articles: articlesByCategory[category.id]
              })
            }))
          )
      }
    ];
  },
  plugins: [
    "react-static-plugin-typescript",
    "react-static-plugin-styled-components",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta }
  }) => (
    <Html lang="en-US">
      <Head>
        <title>Modern Jungle</title>
        <meta
          name="Description"
          content="Modern Writing about the Modern Jungle."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, maximum-scale=1, initial-scale=1"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link
          href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
