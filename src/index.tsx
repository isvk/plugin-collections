import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./store/rootReducer";
import rootSaga from "./store/rootSaga";
import services from "./services";
import * as serviceWorker from "./serviceWorker";
import * as packageJson from "../package.json";
import App from "./App";

import "reset-css";
import "./index.css";

export const history = createBrowserHistory({ basename: packageJson.homepage });
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);
sagaMiddleware.run(rootSaga(services));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();
