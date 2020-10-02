import bottle from "src/services";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { addMain, loadAll, setStatus } from "./actions";
import { addCategories } from "src/store/categories/actions";
import { addProducts } from "src/store/products/actions";
import { loadStatus } from "../loadStatus";
import { IApiCategory } from "src/services/api/typings/apiCategory";
import { IApiProduct } from "src/services/api/typings/apiProduct";

function* loadAllAsync(services: typeof bottle, action: ReturnType<typeof loadAll>) {
    try {
        let response = yield call(services.container.ApiAll.loadAll);

        response.products.sort(function (a: IApiProduct, b: IApiProduct) {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });

        response.categories.sort(function (a: IApiCategory, b: IApiCategory) {
            return a.sort - b.sort;
        });

        yield put(addCategories(response.categories));
        yield put(addProducts(response.products));
        yield put(addMain({ ...response.main, status: loadStatus.isLoaded }));
    } catch (e) {
        yield put(setStatus(loadStatus.isErrorServer));
    }
}

export default function* mainSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_ALL, loadAllAsync, services);
}
