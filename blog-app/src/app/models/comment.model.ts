import { Author } from "./author.model";

export interface Comment {
  id:        number;
  createdAt: string;
  updatedAt: string;
  body:      string;
  author:    Author;
}
