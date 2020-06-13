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
import GalleryDemo from "./pages/ui/gallary/galleryDemo";
import CarouselDemo from "./pages/ui/carousel/CarouselDemo";
import LoginDemo from "./pages/form/login/LoginDemo";
import RegisterDemo from "./pages/form/register/RegisterDemo";
import BaseTableDemo from "./pages/table/base/BasicTableDemo"
import HighTableDemo from "./pages/table/high/HighTableDemo";

import "./mock/tableListMock"
import "./mock/openCityMock"
import "./mock/orderListMock"
import City from "./pages/city/City";
import Order from "./pages/order/Order";


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
                                <Route path={"/ui/gallery"} component={GalleryDemo}/>
                                <Route path={"/ui/carousel"} component={CarouselDemo}/>

                                <Route path={"/form/login"} component={LoginDemo}/>
                                <Route path={"/form/reg"} component={RegisterDemo}/>

                                <Route path={"/table/basic"} component={BaseTableDemo}/>
                                <Route path={"/table/high"} component={HighTableDemo}/>

                                <Route path={"/city"} component={City}/>

                                <Route path={"/order"} component={Order}/>

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



