import * as types from "./types";
import Category from "src/models/category";

export const loadCategories = () =>
    ({
        type: types.LOAD_CATEGORIES,
    } as const);

export const addCategories = (categories: Category[]) =>
    ({
        type: types.ADD_CATEGORIES,
        categories,
    } as const);
