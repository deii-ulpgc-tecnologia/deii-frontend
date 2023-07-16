import { Delegate } from "./delegate";
import { FAQ, FAQTag } from "./faq";
import { PocketBaseModel, TagModel } from "./generics";
import { New, NewTag } from "./new";

export const PocketBaseModelDummy : PocketBaseModel = {
    "id": "RECORD_ID",
    "collectionId": "BHKW36mJl3ZPt6z",
    "collectionName": "posts",
    "created": "2022-01-01 01:00:00.123Z",
    "updated": "2022-01-01 23:59:59.456Z",
}

export const TagModelDummy : TagModel = {
    ...PocketBaseModelDummy,
    name: "Dummy tag",
    color: "red",
}

export const DelegateDummy : Delegate = {
    ...PocketBaseModelDummy,
    name: "Ruben Santana",
    avatar : "icon",
    rol : "Delegado",
    belongsPresidency: true,
    isHonorary: true,
}

export const NewTagDummy: NewTag = {
    ...TagModelDummy,
}

export const NewDummy: New = {
    ...PocketBaseModelDummy,
    title: "Dummy title",
    thumbnail: "Dummy title",
    content: "<p>Dummy content</p>",
    tags: [
        NewTagDummy,
        NewTagDummy,
        NewTagDummy,
    ]
}


export const FAQTagDummy: FAQTag = {
    ...TagModelDummy,
    icon: "Dummy URL"
}

export const FAQDummy: FAQ = {
    ...PocketBaseModelDummy,
    question: "Dummy question",
    answer: "Dummy answer",
    tags: [
        FAQTagDummy,
        FAQTagDummy,
        FAQTagDummy
    ],
}
