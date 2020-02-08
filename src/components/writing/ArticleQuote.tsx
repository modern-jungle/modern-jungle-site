import React from "react";
import { ComponentWritingArticleQuote } from "../../../types";

type ArticleSectionProps = {
  quote: ComponentWritingArticleQuote;
};

const ArticleSection = (props: ArticleSectionProps) => {
  return (
    <blockquote>
      <p>{props.quote.quote}</p>
      <footer>
        <cite>— {props.quote.source}</cite>
      </footer>
    </blockquote>
  );
};

export default ArticleSection;
