import styled from "@emotion/styled"
import moment from "moment"
import React from "react"
import Helmet from "react-helmet"
import { useRouteData, useSiteData } from "react-static"
import { Article } from "../../types"
import { ArticleDate } from "../components/common/ArticleDate"
import { AuthorCard } from "../components/common/AuthorCard"
import { AuthorLink } from "../components/common/AuthorLink"
import { CategoryTag } from "../components/common/CategoryTag"
import { ImageContainer } from "../components/common/ImageContainer"
import { MainContent } from "../components/common/MainContent"
import ArticleImage from "../components/writing/ArticleImage"
import ArticleQuote from "../components/writing/ArticleQuote"
import ArticleSection from "../components/writing/ArticleSection"
import { buildUrl } from "../utils/buildUrl"
import { getArticlePath } from "../utils/getArticlePath"
import { getAssetPath } from "../utils/getAssetPath"
import { toTitleCase } from "../utils/toTitleCase"

const ArticleWrapper = styled.article`
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.2rem;
`

const AricleHero = styled(ImageContainer)`
  height: 30rem;
`

const ArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    margin-bottom: 0;
  }
`

const ArticleFooter = styled.footer`
  margin-top: 3rem;

  :before {
    content: "";
    width: 100%;
    max-width: 10rem;
    height: 1rem;
    background-color: black;
    display: block;
    margin: 3rem auto;
  }
`

const ArticleCategoryTag = styled(CategoryTag)`
  align-self: center;
`

export default () => {
  const { siteRoot }: { siteRoot: string } = useSiteData()
  const { article }: { article: Article } = useRouteData()
  const image = getAssetPath(article.hero.url)
  const components = article.content.map(component => {
    if ("text" in component) {
      return (
        <MainContent>
          <ArticleSection
            section={component}
            key={`${component.__component}${component.id}`}
          />
        </MainContent>
      )
    } else if ("image" in component) {
      return (
        <MainContent>
          <ArticleImage
            image={component}
            key={`${component.__component}${component.id}`}
          />
        </MainContent>
      )
    } else if ("quote" in component) {
      return (
        <MainContent>
          <ArticleQuote quote={component} />
        </MainContent>
      )
    }
    // TODO: Full-bleed

    return null
  })

  const url = buildUrl(siteRoot, getArticlePath(article))
  const publishedTime = moment(article.published_at).format()
  const modifiedTime = moment(article.updated_at).format()

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
        <MainContent>
          <ArticleHeader>
            {article.subjects.map((subject, i) => (
              <ArticleCategoryTag
                key={subject.name}
                style={i > 0 ? { marginLeft: "0.2rem" } : {}}
                inverted
              >
                {toTitleCase(subject.name)}
              </ArticleCategoryTag>
            ))}
            <h1>{article.title}</h1>
            <AuthorLink author={article.author} />
            <ArticleDate>
              {moment(article.published_at).format("DD MMM YY")}
            </ArticleDate>
          </ArticleHeader>
        </MainContent>
        <AricleHero>
          <img src={getAssetPath(article.hero.url)} />
        </AricleHero>
        {components}
        <ArticleFooter>
          <MainContent>
            <AuthorCard author={article.author} />
          </MainContent>
        </ArticleFooter>
      </ArticleWrapper>
    </>
  )
}
