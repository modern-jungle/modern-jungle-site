import styled from "@emotion/styled"

type ImageContainerProps = {
  type?: "cover" | "contain"
}

export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  overflow: hidden;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    object-fit: ${props => props.type || "cover"};
  }
`
