export type CmsComponent = {
  __component: string;
};

export type ArticleContent = (
  | ComponentWritingArticleSection
  | ComponentWritingArticleImage
  | ComponentWritingArticleFullBleedImage
  | ComponentWritingArticleQuote
)[];

export type Image = {
  id: number;
  name: string;
  hash: string;
  sha256: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  created_at: string;
  updated_at: string;
};

export type Article = {
  id: number;
  content: ArticleContent;
  category: Category;
  title: string;
  preview: string;
  hero: Image;
  light_title: boolean;
  author: Author;
  slug: string;
  published_at: string;
  updated_at: string;
};

export type Author = {
  name: string;
  email?: string;
  biography?: string;
};

export type Category = {
  id: number;
  name: string;
};

export type ComponentWritingArticleSection = CmsComponent & {
  id: number;
  text: string;
  heading: string;
};

export type ComponentWritingArticleImage = CmsComponent & {
  id: number;
  caption: string | null;
  source: string | null;
  image: Image;
};

export type ComponentWritingArticleFullBleedImage = CmsComponent & {
  id: number;
};

export type ComponentWritingArticleQuote = CmsComponent & {
  id: number;
  quote: string;
  source: string;
};
