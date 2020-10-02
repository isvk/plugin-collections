import * as types from "./types";
import Main from "src/models/main";
import { loadStatus } from "../loadStatus";

export const loadAll = () =>
    ({
        type: types.LOAD_ALL,
    } as const);

export const addMain = (main: Main) =>
    ({
        type: types.ADD_MAIN,
        main,
    } as const);

export const setStatus = (status: loadStatus) =>
    ({
        type: types.SET_STATUS,
        status,
    } as const);
