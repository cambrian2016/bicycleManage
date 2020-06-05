import React, {Component} from "react";
import {Col, Row} from "antd";
import style from "./header.module.css"
import {connect} from "react-redux"
import * as actionCreators from "./store/actionCreators"

class Header extends Component {

    componentWillMount() {
        this.props.getUserName();

        setInterval(this.props.getSystemTime, 1000);
    }

    componentDidMount() {
        //防止多次请求
        if (this.props.weather === "") {
            this.props.getWeather();
        }
    }

    render() {
        return (
            <div className={style.headerWrapper}>
                <Row className={style.headerTop}>
                    <Col span="24">
                        <span>欢迎，{this.props.userName}</span>
                        <a className={style.logout} href={"#"}>退出</a>
                    </Col>
                </Row>

                <Row className={style.breadCrumb}>
                    <Col span="4" className={style.breadCrumbTitle}>
                        首页
                        <div className={style.breadCrumbTriangle}/>
                    </Col>
                    <Col span="20" className={style.weather}>
                        <span className={style.date}>{this.props.systemTime}</span>
                        <img className={style.weatherImage} src={this.props.weatherImage}/>
                        <span className={style.weatherDetail}>
                            {this.props.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.header.userName,
        systemTime: state.header.systemTime,
        weather: state.header.weather,
        weatherImage: state.header.weatherImage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserName() {
            dispatch(actionCreators.getUserNameAction());
        },
        getSystemTime() {
            dispatch(actionCreators.getSystemTimeAction());
        },
        getWeather() {
            dispatch(actionCreators.getWeather());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
