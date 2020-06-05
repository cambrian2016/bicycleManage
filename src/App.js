import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Main from "./Main"
import Login from "./pages/login/Login"
import Button from "./pages/ui/button/Button";
import NoMatch from "./pages/nomatch/NoMatch";

class App extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/order/detail"} component={Login}/>
                    <Route path={"/"} render={() =>
                        <Main>
                            <Switch>
                                <Route path={"/ui/buttons"} component={Button}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Main>
                    }/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;



