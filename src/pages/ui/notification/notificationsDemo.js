import React, {Component} from "react";
import style from './notificationsDemo.module.css'
import {Card, Button, notification} from "antd";

class NotificationsDemo extends Component {

    handleOpenNotification(notificationType,placementType) {
        notification[notificationType]({
            message: "发工资了",
            description: "上个月考勤22天，迟到3天，实发工资5000元，",
            placement:placementType
        });
    }

    render() {
        return (
            <div>
                <Card className={style.card} title={"通知提醒框"}>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenNotification("open")}>Open</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenNotification("success")}>Success</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenNotification("info")}>Info</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenNotification("warning")}>Warning</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenNotification("error")}>Error</Button>
                </Card>

                <Card className={style.card} title={"通知提醒框 位置"}>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenNotification("open","topLeft")}>Open</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenNotification("success","topRight")}>Success</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenNotification("info","bottomLeft")}>Info</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenNotification("warning","bottomRight")}>Warning</Button>
                    <Button className={style.button} type={"primary"}
                            onClick={() => this.handleOpenNotification("error")}>Error</Button>
                </Card>
            </div>
        );
    }
}

export default NotificationsDemo;


