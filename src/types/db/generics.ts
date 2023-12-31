import { UUIDField } from "@fields/UUIDField"
import { DateField } from "@fields/DateField"

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

export type FilterableItem = { tags: TagModel[] }

