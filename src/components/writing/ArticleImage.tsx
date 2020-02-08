import React from "react";
import styled from "styled-components";
import { ComponentWritingArticleImage } from "../../../types";
import { getAssetPath } from "../../utils/getAssetPath";

type ArticleImageProps = {
  image: ComponentWritingArticleImage;
};

const ArticleImageWrapper = styled.figure``;

const ArticleImage = (props: ArticleImageProps) => {
  const {
    caption,
    image: { url }
  } = props.image;
  return (
    <ArticleImageWrapper>
      <img src={getAssetPath(url)} alt={caption} />
      {caption && <figcaption>{caption}</figcaption>}
    </ArticleImageWrapper>
  );
};

export default ArticleImage;
