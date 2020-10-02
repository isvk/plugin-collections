import { IApiCategory } from "./apiCategory";

export interface IApiProduct {
    id: number;
    created_at: string;
    category: null | { id: IApiCategory["id"]; url: IApiCategory["url"] };
    name: string;
    link: string;
    img: null | { url: string };
}
