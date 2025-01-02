import { AuthorType } from "./AuthorType";

export type PostType = {
  _id: number;
  title: string;
  summary: string;
  content: string;
  cover: string;
  createdAt: string | number | Date;
  author: AuthorType;
};
