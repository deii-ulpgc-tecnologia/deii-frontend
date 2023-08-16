import { HTMLField } from "../fields/HTMLField";
import { URLField } from "../fields/URLField";
import { Delegate } from "./delegate";
import { PocketBaseModel, TagModel } from "./generics";

export interface NewsTag extends TagModel{}

export interface News extends PocketBaseModel{
    title : string,
    thumbnail: URLField,
    content : HTMLField,
    tags : NewsTag[], 
    author: Delegate
}
