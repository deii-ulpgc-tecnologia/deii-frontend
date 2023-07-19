import { HTMLField } from "../fields/HTMLField";
import { URLField } from "../fields/URLField";
import { PocketBaseModel, TagModel } from "./generics";

export interface FaqTag extends TagModel{
    icon : URLField,
    description : string
}

export interface Faq extends PocketBaseModel{
    question : string,
    answer : HTMLField
    tags: FaqTag[]
}
