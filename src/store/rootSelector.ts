import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import Product from "src/models/product";
import { getStatus } from "./main/selectors";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const mainState = (state: Readonly<IStore>) => state.main;
export const categoryState = (state: Readonly<IStore>) => state.categories;
export const productState = (state: Readonly<IStore>) => state.products;

export const mainGetStatus = createSelector(mainState, getStatus);

export const productsGetCategoryByUrl = createSelector(productState, propsFirstSelector, (products, urlCategory) =>
    products.filter((product: Product) =>
        urlCategory ? product.category && product.category.url === urlCategory : true
    )
);
