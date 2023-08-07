import { URLField } from "../fields/URLField";
import { PocketBaseModel } from "./generics";


export interface SocialNetwork extends PocketBaseModel{
    url : URLField,
    network : {
        name : string,
        icon : string
    }
}

export interface Delegate extends PocketBaseModel{
    name : string,
    avatar : URLField,
    rol?: string,
    belongsPresidency : boolean,
    isHonorary: boolean,
    socialNetworks: SocialNetwork[]
}
