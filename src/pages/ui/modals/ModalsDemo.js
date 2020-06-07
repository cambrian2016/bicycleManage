import React, {Component} from "react";
import {Button, Card, Modal} from "antd";
import style from "./modalsDemo.module.css";


class ModalsDemo extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleInfoClick = this.handleInfoClick.bind(this);

        this.state = {
            showMode1Boolean: false,
            showMode2Boolean: false,
            showMode3Boolean: false,
            showMode4Boolean: false,
        }
    }

    handleClick(showMode) {
        this.setState({[showMode + "Boolean"]: true});
    }

    handleInfoClick(showType) {
        Modal[showType]({
            title: "确定",
            content: "你确定你学会了React了么么",
            onOk() {
                console.log("okkk")
            },
            onCancel() {
                console.log("onCancel")
            }
        });
    }

    render() {
        return (
            <div>
                <Card className={style.card} title={"基础模态框"}>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleClick("showMode1")}>Open</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleClick("showMode2")}>自定义页脚</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleClick("showMode3")}>顶部20px弹框</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleClick("showMode4")}>水平垂直居中</Button>
                    <Modal
                        title={"this is title"}
                        visible={this.state.showMode1Boolean}
                        onCancel={() => {
                            this.setState({showMode1Boolean: false})
                        }}>
                        <p>欢迎学习慕课新推出的React高级课程11111</p>
                    </Modal>

                    <Modal
                        title={"React"}
                        visible={this.state.showMode2Boolean}
                        okText={"好的"}
                        cancelText={"算了"}
                        onCancel={() => {
                            this.setState({showMode2Boolean: false})
                        }}>
                        <p>欢迎学习慕课新推出的React高级课程222</p>
                    </Modal>

                    <Modal
                        title={"React"}
                        visible={this.state.showMode3Boolean}
                        okText={"好的"}
                        style={{marginTop: "150px"}}
                        cancelText={"算了"}
                        onCancel={() => {
                            this.setState({showMode3Boolean: false})
                        }}>
                        <p>欢迎学习慕课新推出的React高级课程333</p>
                    </Modal>

                    <Modal
                        title={"React"}
                        visible={this.state.showMode4Boolean}
                        okText={"好的"}
                        centered={true}
                        cancelText={"算了"}
                        onCancel={() => {
                            this.setState({showMode4Boolean: false})
                        }}>
                        <p>欢迎学习慕课新推出的React高级课程4444</p>
                    </Modal>
                </Card>

                <Card className={style.card} title={"基础模态框"}>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleInfoClick("confirm")}>Confirmm</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleInfoClick("info")}>Infoo</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleInfoClick("success")}>Successs</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleInfoClick("warning")}>Warningg</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleInfoClick("error")}>Errorr</Button>
                </Card>
            </div>
        );
    }
}

export default ModalsDemo;


