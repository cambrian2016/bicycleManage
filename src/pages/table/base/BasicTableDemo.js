import React, {Component} from "react";
import {Card, Modal, Table, Button, message} from "antd";
import style from "./baseTable.module.css"
import Axios from "../../../http/axios";
import util from "../../../util/util"
import axios from "axios"

class BasicTableDemo extends Component {

    params = {
        page: 1,
    };

    constructor(props) {
        super(props);

        this.state = {dataSource: null, dataSource2: null};

        this.getTableList = this.getTableList.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // let dataSource = [
        //     {
        //         key: "0",
        //         userName: "寒武纪",
        //         sex: "male",
        //         state: "1",
        //         hobby: "篮球",
        //         birthday: "1991-01-01",
        //         address: "俄罗斯",
        //         time: "01:01"
        //     },
        //     {
        //         key: "1",
        //         userName: "奥陶纪",
        //         sex: "female",
        //         state: "1",
        //         hobby: "足球",
        //         birthday: "1991-01-02",
        //         address: "加拿大",
        //         time: "01:02"
        //     },
        //     {
        //         key: "2",
        //         userName: "志留纪",
        //         sex: "male",
        //         state: "0",
        //         hobby: "乒乓球",
        //         birthday: "1991-01-03",
        //         address: "中国",
        //         time: "01:03"
        //     },
        //     {
        //         key: "3",
        //         userName: "泥盆纪",
        //         sex: "male",
        //         state: "1",
        //         hobby: "羽毛球",
        //         birthday: "1991-01-04",
        //         address: "美国",
        //         time: "02:01"
        //     },
        //     {
        //         key: "4",
        //         userName: "石炭纪",
        //         sex: "male",
        //         state: "1",
        //         hobby: "篮球",
        //         birthday: "1991-01-02",
        //         address: "巴西",
        //         time: "01:01"
        //     },
        // ];

        // this.setState({
        //     dataSource: dataSource
        // });

        setInterval(() => {
            return (
                axios.get("/tableListMock").then((response) => {
                    console.log("mock response  =  ", response);
                    let dataSource = response.data.data.tableList;
                    this.setState({
                        dataSource: dataSource
                    });
                })
            );
        }, 1000);
    }

    componentWillMount() {
        this.getTableList();
    }

    getTableList() {
        let _this = this;
        Axios.ajax({
            url: "/tableList.json",
            data: {
                params: {
                    page: this.params.page,
                },
                isShowLoading: true
            }
        }).then((response) => {
            if (response.success) {
                this.setState({
                    dataSource2: response.data.tableList,
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: util.pagination(response.data.data, (current) => {
                        //todo
                        console.log(current);
                        _this.params.page = current;
                        this.getTableList();
                    })
                })
            }
        });
    }

    onRowClick(record, index) {
        let selectKey = [index + ""];
        Modal.info({
            title: "当前点击的是",
            content: "姓名：" + record.userName + " 爱好：" + record.hobby
        });
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record,
        })
    }

    onSelectChange(selectedRowKeys) {
        this.setState({
            selectedRowKeys
        })
    }

    handleDelete() {
        let rows = this.state.selectedRows;

        let ids = [];
        rows.map((item) => {
            ids.push(item.key);
        });

        Modal.confirm({
            title: "删除提示",
            content: "你确定要删除这些数据么" + ids.join(","),
            onOk: () => {
                message.success("删除成功");
                this.getTableList();
            }
        });
    };

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
                dataIndex: "sex",
                render(sex) {
                    return sex === "male" ? "男" : "女"
                }
            },
            {
                title: "状态",
                dataIndex: "state",
                render(state) {
                    let config = {
                        "0": "幼年期",
                        "1": "成长期"
                    };
                    return config[state];
                }
            },
            {
                title: "爱好",
                dataIndex: "hobby",
                render(hobby) {
                    return hobby;
                }
            },
            {
                title: "生日",
                dataIndex: "birthday"
            },
            {
                title: "家庭地址",
                dataIndex: "address"
            },
            {
                title: "起床时间",
                dataIndex: "time"
            }
        ];

        console.log("this.state.selectKey = ", this.state.selectedRowKeys);

        const rowSelection = {
            type: "radio",
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.onSelectChange
        };

        const rowCheckSelection = {
            type: "checkbox",
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys: selectedRowKeys,
                    selectedRows: selectedRows
                })
            }
        };

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

                <Card title={"表格_单选"} className={style.card}>
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                },
                                onMouseEnter: () => {
                                    console.log("onMouseEnter")
                                }
                            }
                        }}
                    />
                </Card>

                <Card title={"表格_多选"} className={style.card}>
                    <div>
                        <Button onClick={this.handleDelete}>
                            删除
                        </Button>
                    </div>
                    <Table
                        bordered
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>

                <Card title={"表格_分页"} className={style.card}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        );
    }
}

export default BasicTableDemo;