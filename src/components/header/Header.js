import React, {Component} from "react";
import {Col, Row} from "antd";
import style from "./header.module.css"
import Util from "../../util/util"
import axios from "../../http/axios"

class Header extends Component {

    componentWillMount() {
        this.setState({
            userName: "河畔一角"
        });

        setInterval(() => {
            let sysTime = Util.formatDate(new Date().getTime());
            this.setState({
                sysTime: sysTime
            })
        }, 100);
    }

    componentDidMount() {
        axios.jsonp({
            url: "http://222.190.151.215:8093/njqxfxapp/queryWeather!m"
        }).then((response) => {
            if (response.result) {
                let weather = response.weather;
                console.log("weather  =  ", weather);
                this.setState({weather: weather.weather + " " + weather.wd + weather.ws,
                weatherImage: weather.img1});
            }
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
                        <span className={style.date}>{this.state.sysTime}</span>
                        <img className={style.weatherImage} src={this.state.weatherImage}/>
                        <span className={style.weatherDetail}>
                            {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;



