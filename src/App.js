import React from 'react';
import {Col, Row} from "antd";
import "antd/dist/antd.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import NavLeft from "./components/navleft/NavLeft";
import Home from "./pages/home/Home"
import "./reset.css"
import style from "./app.module.css"
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <Row className={style.appWrapper}>
                <Col className={style.navLeftWrapper} span="3" >
                    <NavLeft/>
                </Col>
                <Col className={style.main} span="21">
                    <Header/>
                    <Row className={style.content}>
                        <Home/>
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        </Provider>
    );
}

export default App;
