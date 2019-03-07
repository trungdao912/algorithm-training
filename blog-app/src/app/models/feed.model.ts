import { Author } from "./author.model";

export interface Feed {
    title:          string;
    slug:           string;
    body:           string;
    createdAt:      string;
    updatedAt:      string;
    tagList:        any[];
    description:    string;
    author:         Author;
    favorited:      boolean;
    favoritesCount: number;
}