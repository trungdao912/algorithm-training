import { Author } from "./author.model";

export interface Article {
  title:          string;
  slug:           string;
  body:           string;
  createdAt:      string;
  updatedAt:      string;
  tagList:        string[];
  description:    string;
  author:         Author;
  favorited:      boolean;
  favoritesCount: number;
}
