import { Article } from "types";
import { buildUrl } from "./buildUrl";

export function getArticlePath(article: Article) {
  return buildUrl(article.category.name, article.slug);
}
