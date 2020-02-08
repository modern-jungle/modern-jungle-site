import React from "react";
import axios from "axios";
import path from "path";

require("dotenv").config();

export default {
  entry: path.join(__dirname, "src", "index.tsx"),
  getRoutes: async () => {
    const { data: articles } = await axios.get(
      `${process.env.API_URL}/articles`
    );
    const { data: categories } = await axios.get(
      `${process.env.API_URL}/categories`
    );

    return [
      {
        path: "/",
        getData: () => ({
          categories,
          articles
        }),
        children: articles
          .map(article => ({
            path: `/article/${article.slug}`,
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
                articles: articles.filter(
                  article => article.category.id === category.id
                )
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Karla&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Body>{children}</Body>
    </Html>
  )
};
