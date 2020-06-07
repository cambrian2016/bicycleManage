import React, {Component} from "react";
import style from './messagesDemo.module.css'
import {Button, Card, message} from "antd";

class MessagesDemo extends Component {

    handleOpenMessage(notificationType) {
        message[notificationType]("上个月考勤22天，迟到3天，实发工资5000元  123");
    }

    render() {
        return (
            <div>
                <Card className={style.card} title={"全局Message"}>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenMessage("success")}>Success</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenMessage("loading")}>Loading</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenMessage("info")}>Info</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenMessage("warning")}>Warning</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenMessage("error")}>Error</Button>
                </Card>

            </div>
        );
    }
}

export default MessagesDemo;


