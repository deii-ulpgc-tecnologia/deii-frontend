import { HTMLField } from "../fields/HTMLField";
import { URLField } from "../fields/URLField";
import { PocketBaseModel, TagModel } from "./generics";

export interface NewTag extends TagModel{}

export interface New extends PocketBaseModel{
    title : string,
    thumbnail: URLField,
    content : HTMLField,
    tags : NewTag[]
}
