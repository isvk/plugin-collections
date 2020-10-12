import { Record } from "immutable";
import Category from "./category";

export interface IProduct {
    id: number;
    created_at: string;
    category: { id: Category["id"]; url: Category["url"] } | null;
    name: string;
    link: string;
    img_webp_150: { url: string } | null;
    img_webp_300: { url: string } | null;
    img_webp_600: { url: string } | null;
    img_jpeg_150: { url: string } | null;
    img_jpeg_300: { url: string } | null;
    img_jpeg_600: { url: string } | null;
}

const initialProduct: IProduct = {
    id: 0,
    created_at: "",
    name: "",
    link: "",
    category: null,
    img_webp_150: null,
    img_webp_300: null,
    img_webp_600: null,
    img_jpeg_150: null,
    img_jpeg_300: null,
    img_jpeg_600: null,
};

export default class Product extends Record(initialProduct) implements IProduct {}
