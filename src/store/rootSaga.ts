import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import mainSaga from "src/store/main/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([mainSaga(services)]);
    };
};
