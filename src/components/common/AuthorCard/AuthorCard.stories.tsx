import React from "react"
import { Author } from "types"
// @ts-ignore
import img from "../../../../.storybook/assets/author-profile.png"
import { AuthorCard } from "./AuthorCard"

const author: Author = {
  name: "Michio Kaku",
  biography:
    "Vegan hexagon bushwick whatever stumptown kinfolk fanny pack vaporware taiyaki kombucha cornhole messenger bag jianbing brooklyn. Cray tumblr cliche copper mug actually, succulents post-ironic.",
  profile_picture: {
    id: 1,
    name: "",
    hash: "",
    url: img,
    sha256: "",
    ext: "",
    mime: "",
    size: 0,
    created_at: "12-12-2020",
    updated_at: "12-12-2020",
  },
}

export default { title: "AuthorCard" }

export const base = () => <AuthorCard author={author} />
