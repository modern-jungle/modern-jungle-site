import React from "react"
import { Article } from "types"
// @ts-ignore
import spooky from "../../../../.storybook/assets/spooky.jpg"
import { ArticleBlock } from "./ArticleBlock"

const article: Article = {
  id: 1,
  content: [],
  category: {
    id: 1,
    name: "Space",
  },
  subjects: [],
  title: "Life on Mars",
  preview: "NASA finds life on Mars, and it's not what they expected.",
  hero: {
    id: 1,
    name: "",
    hash: "",
    url: spooky,
    sha256: "",
    ext: "",
    mime: "",
    size: 0,
    created_at: "12-12-2020",
    updated_at: "12-12-2020",
  },
  author: {
    name: "Michio Kaku",
  },
  slug: "",
  published_at: "12-12-2020",
  updated_at: "12-12-2020",
}

export default { title: "ArticleBlock" }

export const base = () => <ArticleBlock article={article} />
export const withSubjects = () => (
  <ArticleBlock article={{ ...article, subjects: [{ name: "Space" }] }} />
)
