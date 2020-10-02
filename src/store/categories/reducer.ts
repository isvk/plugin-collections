import { List } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Category from "src/models/category";

export type TStoreCategory = List<Category>;

const reducer = (state: TStoreCategory = List([]), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_CATEGORIES:
            return state;

        case types.ADD_CATEGORIES:
            action.categories.forEach((item: Category) => {
                state = state.push(item);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
