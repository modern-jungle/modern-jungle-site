import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { ComponentWritingArticleSection } from "../../../types";

type ArticleSectionProps = {
  section: ComponentWritingArticleSection;
};

const ArticleSectionWrapper = styled.section``;

const ArticleSection = (props: ArticleSectionProps) => {
  return (
    <ArticleSectionWrapper>
      {props.section.heading && <h3>{props.section.heading}</h3>}
      <ReactMarkdown>{props.section.text}</ReactMarkdown>
    </ArticleSectionWrapper>
  );
};

export default ArticleSection;
