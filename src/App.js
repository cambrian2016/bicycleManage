import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Main from "./Main"
import Login from "./pages/login/Login"
import ButtonDemo from "./pages/ui/button/ButtonDemo";
import NoMatch from "./pages/nomatch/NoMatch";
import ModalsDemo from "./pages/ui/modals/ModalsDemo";
import LoadingsDemo from "./pages/ui/loadings/LoadingsDemo";
import NotificationsDemo from "./pages/ui/notification/notificationsDemo";
import MessagesDemo from "./pages/ui/messages/MessagesDemo";
import TabsDemo from "./pages/ui/tabs/TabsDemo";

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
                                <Route path={"/ui/buttons"} component={ButtonDemo}/>
                                <Route path={"/ui/modals"} component={ModalsDemo}/>
                                <Route path={"/ui/loadings"} component={LoadingsDemo}/>
                                <Route path={"/ui/notifications"} component={NotificationsDemo}/>
                                <Route path={"/ui/messages"} component={MessagesDemo}/>
                                <Route path={"/ui/tabs"} component={TabsDemo}/>

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



