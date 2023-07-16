import { Delegate } from "./delegate";
import { PocketBaseModel } from "./generics";

export const PocketBaseModelDummy : PocketBaseModel = {
    "id": "RECORD_ID",
    "collectionId": "BHKW36mJl3ZPt6z",
    "collectionName": "posts",
    "created": "2022-01-01 01:00:00.123Z",
    "updated": "2022-01-01 23:59:59.456Z",
}

export const DelegateDummy : Delegate = {
    ...PocketBaseModelDummy,
    name: "Ruben Santana",
    avatar : "icon",
    rol : "Delegado",
    belongsPresidency: true,
    isHonorary: true,
}