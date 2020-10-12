import { Record } from "immutable";

export interface ICategory {
    id: number;
    sort: number;
    url: string;
    name: string;
    img: { url: string } | null;
}

const initialCategory: ICategory = {
    id: 0,
    sort: 1,
    url: "",
    name: "",
    img: null,
};

export default class Category extends Record(initialCategory) {}
