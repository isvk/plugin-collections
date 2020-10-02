import { List } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Product from "src/models/product";

export type TStoreProduct = List<Product>;

const reducer = (state: TStoreProduct = List([]), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_PRODUCTS:
            return state;

        case types.ADD_PRODUCTS:
            action.products.forEach((item: Product) => {
                state = state.push(item);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
