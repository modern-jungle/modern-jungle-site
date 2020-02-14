import styled from "@emotion/styled"
import { Link } from "@reach/router"
import React from "react"
import { Author } from "types"
import { getAssetPath } from "../../../utils/getAssetPath"
import { AuthorLink } from "../AuthorLink"

type AuthorCardWrapperProps = {}

const AuthorCardWrapper = styled.div<AuthorCardWrapperProps>`
  display: flex;
  height: 10rem;
  transition: all 100ms linear;

  :hover {
    transform: scale(1.02);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  }

  > a {
    display: flex;
    padding: 1rem;
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
