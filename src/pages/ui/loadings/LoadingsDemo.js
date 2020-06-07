import {Card, Spin, Alert} from "antd";
import style from './loadingsDemo.module.css'
import React, {Component} from "react";
import {LoadingOutlined,SyncOutlined} from "@ant-design/icons"
import {
    DeleteOutlined,
} from "@ant-design/icons"

class LoadingsDemo extends Component {

    render() {
        return (
            <div>
                <Card className={style.card} title={"Spin用法"}>
                    <Spin size={"small"}/>
                    <Spin/>
                    <Spin size={"large"}/>
                    <Spin size={"small"} indicator={<LoadingOutlined/>}/>
                    <Spin indicator={<LoadingOutlined/>} spinning={true}/>
                </Card>

                <Card className={style.card} title={"内容遮罩"}>
                    <Spin tip={"加载中"}>
                        <Alert message={"React223"}
                               description={"欢迎来到React学习班"}
                               type={"info"}/>
                    </Spin>

                    <Spin tip={"加载中"} indicator={<LoadingOutlined/>}>
                        <Alert message={"React223"}
                               description={"欢迎来到React学习班"}
                               type={"warning"}/>
                    </Spin>


                    <Alert message={"React223"}
                           description={"欢迎来到React学习班"}
                           type={"error"}/>
                </Card>
            </div>
        );
    }
}

export default LoadingsDemo;
