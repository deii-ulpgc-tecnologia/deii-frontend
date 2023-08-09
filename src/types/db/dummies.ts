import { Delegate, SocialNetwork } from "./delegate";
import { Faq, FaqTag } from "./faq";
import { PocketBaseModel, TagModel } from "./generics";
import { News, NewsTag } from "./new";

export const PocketBaseModelDummy: PocketBaseModel = {
    "id": "RECORD_ID",
    "collectionId": "BHKW36mJl3ZPt6z",
    "collectionName": "posts",
    "created": "2022-01-01 01:00:00.123Z",
    "updated": "2022-01-01 23:59:59.456Z",
}

export const TagModelDummy: TagModel = {
    ...PocketBaseModelDummy,
    name: "Dummy tag",
    color: "red",
}

export const SocialNetworkDummy1: SocialNetwork = {
    ...PocketBaseModelDummy,
    network: {
        icon: "AiFillInstagram",
        name: "Instagram"
    },
    url: "https://youtu.be/dQw4w9WgXcQ"
}
export const SocialNetworkDummy2: SocialNetwork = {
    ...PocketBaseModelDummy,
    network: {
        icon: "AiFillGithub",
        name: "GitHub"
    },
    url: "https://youtu.be/dQw4w9WgXcQ"
}
export const SocialNetworkDummy3: SocialNetwork = {
    ...PocketBaseModelDummy,
    network: {
        icon: "AiFillYoutube",
        name: "Youtube"
    },
    url: "https://youtu.be/dQw4w9WgXcQ"
}
export const DelegateDummy: Delegate = {
    ...PocketBaseModelDummy,
    name: "Ruben Santana",
    avatar: "https://img.ecartelera.com/noticias/71900/71983-c.jpg",
    rol: "Delegado",
    belongsPresidency: true,
    isHonorary: false,
    socialNetworks: [SocialNetworkDummy1, SocialNetworkDummy2, SocialNetworkDummy3]
}

export const NewsTagDummy: NewsTag = {
    ...TagModelDummy,
}

export const NewsDummy: News = {
    ...PocketBaseModelDummy,
    title: "Dummy title",
    thumbnail: "https://img.freepik.com/foto-gratis/perrito-joven-posando-alegre_155003-28765.jpg",
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
