import React from "react";
import { Route, Switch } from "react-router";
import MainPage from "./components/MainPage/MainPage";

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/category/:urlCategory" component={MainPage} />
        </Switch>
    );
};

export default App;
