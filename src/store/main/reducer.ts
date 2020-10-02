import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Main from "src/models/main";

export type TStoreMain = Main;

const reducer = (state: TStoreMain = new Main(), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.LOAD_ALL:
            return state;

        case types.ADD_MAIN:
            return action.main;

        case types.SET_STATUS:
            return state.set("status", action.status);

        default:
            return state;
    }
};

export default reducer;
