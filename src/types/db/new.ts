import { HTMLField } from "../fields/HTMLField";
import { UUIDField } from "../fields/UUIDField";
import { URLField } from "../fields/UrlField";
import { PocketBaseModel, TagModel } from "./generics";

export interface NewTag extends TagModel{}

export interface New extends PocketBaseModel{
    title : string,
    thumbnail: URLField,
    content : HTMLField,
    tags : UUIDField[]
}