import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import categories, { TStoreCategory } from "./categories/reducer";
import products, { TStoreProduct } from "./products/reducer";
import main, { TStoreMain } from "./main/reducer";

export interface IStore {
    router: typeof connectRouter;
    main: TStoreMain;
    categories: TStoreCategory;
    products: TStoreProduct;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        main,
        categories,
        products,
    });

export default createRootReducer;
