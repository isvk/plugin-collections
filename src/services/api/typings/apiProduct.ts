import { IApiCategory } from "./apiCategory";

export interface IApiProduct {
    id: number;
    created_at: string;
    category: { id: IApiCategory["id"]; url: IApiCategory["url"] } | null;
    name: string;
    link: string;
    img_webp_150: { url: string } | null;
    img_webp_300: { url: string } | null;
    img_webp_600: { url: string } | null;
    img_jpeg_150: { url: string } | null;
    img_jpeg_300: { url: string } | null;
    img_jpeg_600: { url: string } | null;
}
