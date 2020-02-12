import styled from "@emotion/styled"
import React from "react"
import { Author } from "types"

export const AuthorLinkAnchor = styled.a`
  text-decoration: none;
  color: #507587;

  :hover {
    text-decoration: underline;
  }
`

export type AuthorLinkProps = {
  author: Author
}

export function AuthorLink(props: AuthorLinkProps) {
  const { author } = props
  return (
    <AuthorLinkAnchor href={`/author/${author.name}`}>
      {author.name}
    </AuthorLinkAnchor>
  )
}
