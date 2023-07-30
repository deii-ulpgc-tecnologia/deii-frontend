import { Delegate, SocialNetwork } from "./delegate";
import { Faq, FaqTag } from "./faq";
import { PocketBaseModel, TagModel } from "./generics";
import { News, NewsTag } from "./new";

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

export const SocialNetworkDummy: SocialNetwork = {
    ...PocketBaseModelDummy,
    network: {
        icon: "AiFillInstagram",
        name: "instagram"
    },
    url: "https://youtu.be/dQw4w9WgXcQ"
}

export const DelegateDummy : Delegate = {
    ...PocketBaseModelDummy,
    name: "Dummy Name",
    avatar : "icon",
    rol : "Delegado",
    belongsPresidency: true,
    isHonorary: true,
    socialNetworks: [SocialNetworkDummy, SocialNetworkDummy]
}

export const NewsTagDummy: NewsTag = {
    ...TagModelDummy,
}

export const NewsDummy: News = {
    ...PocketBaseModelDummy,
    title: "Dummy title",
    thumbnail: "Dummy title",
    content: "<p>Dummy content</p>",
    author: DelegateDummy,
    tags: [
        NewsTagDummy,
        NewsTagDummy,
        NewsTagDummy,
    ]
}


export const FaqTagDummy: FaqTag = {
    ...TagModelDummy,
    icon: "Dummy URL",
    description: "This is a description about this FAQ tag that will help our\
    users find useful information."
}

export const FaqDummy: Faq = {
    ...PocketBaseModelDummy,
    question: "Dummy question",
    answer: "Dummy answer",
    tags: [
        FaqTagDummy,
        FaqTagDummy,
        FaqTagDummy
    ],
}
