import React, {Component} from "react";
import {Button, Card} from "antd";
import style from "./buttonDemo.module.css"
import {PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, DownloadOutlined} from "@ant-design/icons"

class ButtonDemo extends Component {

    render() {
        return (
            <div>
                <Card className={style.card} title={"基础按钮"}>
                    <Button className={style.button} type={"primary"}>Imooc</Button>
                    <Button className={style.button}>Imooc</Button>
                    <Button className={style.button} type={"dashed"}>Imooc</Button>
                    <Button className={style.button} type={"danger"}>Imooc</Button>
                    <Button className={style.button} disabled={true}>Imooc</Button>
                </Card>

                <Card className={style.card} title={"图形按钮"}>
                    <Button className={style.button} icon={<PlusOutlined/>}>创建</Button>
                    <Button className={style.button} icon={<EditOutlined/>}>编辑</Button>
                    <Button className={style.button} icon={<DeleteOutlined/>}>删除</Button>
                    <Button className={style.button} shape={"circle"} icon={<SearchOutlined/>}/>
                    <Button className={style.button} type={"primary"} icon={<SearchOutlined/>}>搜索</Button>
                    <Button className={style.button} icon={<DownloadOutlined/>}>下载</Button>
                </Card>

                <Card className={style.card} title={"Loading按钮"}>
                    <Button className={style.button} type={"primary"} loading={true}>确定</Button>
                    <Button className={style.button} shape={"circle"} type={"primary"} loading={true}/>
                    <Button className={style.button} loading={true}>点击加载</Button>
                    <Button className={style.button} shape={"circle"} loading={true}/>
                    <Button className={style.button} type={"primary"} >关闭</Button>
                </Card>
            </div>
        );
    }
}

export default ButtonDemo;
