import React, {Component} from "react";
import {Button, Card, Radio} from "antd";
import style from "./buttonDemo.module.css"
import {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    SearchOutlined,
    DownloadOutlined,
    LeftOutlined,
    RightOutlined
} from "@ant-design/icons"

class ButtonDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {loadingBoolean: true, size: "default"};

        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleRadioGroupChange = this.handleRadioGroupChange.bind(this);
    }

    handleRadioGroupChange(event) {
        this.setState({size: event.target.value})
    }


    handleCloseClick() {
        this.setState({loadingBoolean: false})
    }

    render() {
        let size = this.state.size;
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
                    <Button className={style.button} type={"primary"} loading={this.state.loadingBoolean}>确定</Button>
                    <Button className={style.button} shape={"circle"} type={"primary"}
                            loading={this.state.loadingBoolean}/>
                    <Button className={style.button} loading={this.state.loadingBoolean}>点击加载</Button>
                    <Button className={style.button} shape={"circle"} loading={this.state.loadingBoolean}/>
                    <Button className={style.button} type={"primary"} onClick={this.handleCloseClick}>关闭</Button>
                </Card>

                <Card className={style.card} title={"按钮组"}>
                    <Button.Group>
                        <Button className={style.button} icon={<LeftOutlined/>} type={"primary"}>后退</Button>
                        <Button className={style.button} icon={<RightOutlined/>} type={"primary"}>前进</Button>
                    </Button.Group>
                </Card>

                <Card className={style.card} title={"按钮大小"}>

                    <Radio.Group onChange={this.handleRadioGroupChange}>
                        <Radio value={"large"}>Largee</Radio>
                        <Radio value={"default"}>Defaultt</Radio>
                        <Radio value={"small"}>Smalll</Radio>
                    </Radio.Group>

                    <Button className={style.button} type={"primary"} size={size}>按钮1</Button>
                    <Button className={style.button} size={size}>按钮2</Button>

                </Card>
            </div>
        );
    }
}

export default ButtonDemo;
