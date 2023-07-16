import { HTMLField } from "../fields/HTMLField";
import { PocketBaseModel, TagModel } from "./generics";

export interface FAQTag extends TagModel{
    icon : string
}

export interface FAQ extends PocketBaseModel{
    question : string,
    answer : HTMLField
    tags: FAQTag[]
}
