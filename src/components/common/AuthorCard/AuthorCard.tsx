import styled from "@emotion/styled"
import { Link } from "@reach/router"
import React from "react"
import { Author } from "types"
import { getAssetPath } from "../../../utils/getAssetPath"
import { AuthorLink } from "../AuthorLink"

type AuthorCardWrapperProps = {}

const AuthorCardWrapper = styled.div<AuthorCardWrapperProps>`
  display: flex;
  height: 8rem;

  transition: transform 100ms linear;

  :hover {
    transform: scale(1.02);
  }

  a {
    display: flex;
  }

  img {
    height: 100%;
    margin-right: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
  }
`

const AuthorCardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export type AuthorCardProps = {
  author: Author
}

export function AuthorCard(props: AuthorCardProps) {
  const { author } = props
  const { name, profile_picture, biography } = author

  return (
    <AuthorCardWrapper>
      <Link to={`/author/${name}`}>
        {profile_picture && <img src={getAssetPath(profile_picture.url)} />}
        <AuthorCardRight>
          <AuthorLink author={author} />
          {biography && <p>{biography}</p>}
        </AuthorCardRight>
      </Link>
    </AuthorCardWrapper>
  )
}
