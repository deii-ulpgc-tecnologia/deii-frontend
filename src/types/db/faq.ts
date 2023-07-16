import { HTMLField } from "../fields/HTMLField";
import { UUIDField } from "../fields/UUIDField";
import { PocketBaseModel, TagModel } from "./generics";

export interface FAQTags extends TagModel{
    icon : string
}

export interface FAQ extends PocketBaseModel{
    question : string,
    answer : HTMLField
    tags: UUIDField[]
}