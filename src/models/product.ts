import { Record } from "immutable";
import Category from "./category";

export interface IProduct {
    id: number;
    created_at: string;
    category: null | { id: Category["id"]; url: Category["url"] };
    name: string;
    link: string;
    img: null | { url: string };
}

const initialProduct: IProduct = {
    id: 0,
    created_at: "",
    name: "",
    link: "",
    category: null,
    img: null,
};

export default class Product extends Record(initialProduct) implements IProduct {}
