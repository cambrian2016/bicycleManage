import React, {Component} from "react";
import {Col, Row} from "antd";
import style from "./header.module.css"

class Header extends Component {

    componentWillMount() {
        this.setState({
            userName: "河畔一角"
        });
    }

    render() {
        return (
            <div className={style.headerWrapper}>
                <Row className={style.headerTop}>
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a className={style.logout} href={"#"}>退出</a>
                    </Col>
                </Row>

                <Row className={style.breadCrumb}>
                    <Col span="4" className={style.breadCrumbTitle}>
                        首页
                    </Col>
                    <Col span="20" className={style.weather}>
                        <span className={style.date}>2018-05-04</span>
                        <span className={style.weatherDetail}>晴转多云</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;



