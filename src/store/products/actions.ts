import * as types from "./types";
import Product from "src/models/product";

export const loadProducts = () =>
    ({
        type: types.LOAD_PRODUCTS,
    } as const);

export const addProducts = (products: Product[]) =>
    ({
        type: types.ADD_PRODUCTS,
        products,
    } as const);
