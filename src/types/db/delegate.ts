import { URLField } from "../fields/UrlField";
import { PocketBaseModel } from "./generics";

export interface Delegate extends PocketBaseModel{
    name : string,
    avatar : URLField,
    rol : string,
    belongsPresidency : boolean,
    isHonorary: boolean
}