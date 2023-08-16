import { DateField } from "fields/DateField";
import { UUIDField } from "fields/UUIDField";

export interface PocketBaseModel {
    id: UUIDField,
    collectionId: UUIDField,
    collectionName: string,
    created: DateField,
    updated: DateField,
}

export interface TagModel extends PocketBaseModel {
    color: string,
    name: string
}
