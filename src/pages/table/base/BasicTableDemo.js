import React, {Component} from "react";
import {Card, Table} from "antd";
import style from "./baseTable.module.css"
import Axios from "axios";

class BasicTableDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {dataSource: null, dataSource2: null};

        this.getTableList=this.getTableList.bind(this);
    }

    componentDidMount() {
        let dataSource = [
            {
                key: "0",
                userName: "寒武纪",
                sex: "male",
                state: "1",
                hobby: "篮球",
                birthday: "1991-01-01",
                address: "俄罗斯",
                time: "01:01"
            },
            {
                key: "1",
                userName: "奥陶纪",
                sex: "female",
                state: "1",
                hobby: "足球",
                birthday: "1991-01-02",
                address: "加拿大",
                time: "01:02"
            },
            {
                key: "2",
                userName: "志留纪",
                sex: "male",
                state: "0",
                hobby: "乒乓球",
                birthday: "1991-01-03",
                address: "中国",
                time: "01:03"
            },
            {
                key: "3",
                userName: "泥盆纪",
                sex: "male",
                state: "1",
                hobby: "羽毛球",
                birthday: "1991-01-04",
                address: "美国",
                time: "02:01"
            },
            {
                key: "4",
                userName: "石炭纪",
                sex: "male",
                state: "1",
                hobby: "篮球",
                birthday: "1991-01-02",
                address: "巴西",
                time: "01:01"
            },
        ];

        this.setState({
            dataSource: dataSource
        });

    }

    componentWillMount() {
        this.getTableList();
    }

    getTableList() {
        Axios.get("https://www.easy-mock.com/mock/5ede15998f506f19c8299fd8/mockapi/table/list")
            .then((response) => {
                console.log("response.status =",response.status);
                if (response.status==="200"){
                    this.setState({dataSource2:response.data.data.tableList})
                }
            })
            .catch();
    }

    render() {
        let columns = [
            {
                title: "id",
                dataIndex: "key"
            },
            {
                title: "用户名",
                dataIndex: "userName"
            },
            {
                title: "性别",
                dataIndex: "sex"
            },
            {
                title: "状态",
                dataIndex: "state"
            },
            {
                title: "爱好",
                dataIndex: "hobby"
            },
            {
                title: "生日",
                dataIndex: "birthday"
            },
            {
                title: "地址",
                dataIndex: "address"
            },
            {
                title: "早起时间",
                dataIndex: "time"
            }
        ];

        console.log("this.state.dataSource2 = "+this.state.dataSource2);

        return (
            <div>
                <Card title={"基础表格"} className={style.card}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>

                <Card title={"动态数据渲染表格"} className={style.card}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
            </div>
        );
    }
}

export default BasicTableDemo;