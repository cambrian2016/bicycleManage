import React, {Component} from "react";
import style from './highTable.module.css'
import {Card, Modal, Table, Button, message, Badge} from "antd";


class HighTableDemo extends Component {

    constructor(props) {
        super(props);


        this.state = {dataSource: null, dataSource2: null};
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

    handleDelete = (item) => {
        console.log(item.key);
        let id = item.key;
        Modal.confirm({
            title: "确认",
            content: "当前选择项的id= "+id,
            onOk: () => {
                message.success("删除成功");
            }
        });
    };

    render() {
        let columns = [
            {
                title: "id",
                dataIndex: "key",
                width: 80
            },
            {
                title: "用户名",
                dataIndex: "userName",
                width: 80
            },
            {
                title: "性别",
                dataIndex: "sex",
                width: 80,
                render(sex) {
                    return sex === "male" ? "男" : "女"
                }
            },
            {
                title: "状态",
                dataIndex: "state",
                width: 80,
                render(state) {
                    let config = {
                        "0": "闲鱼",
                        "1": "暴鲤龙"
                    };
                    return config[state];
                }
            },
            {
                title: "爱好",
                dataIndex: "hobby",
                width: 80,
                render(hobby) {
                    return "没日没夜玩 " + hobby;
                }
            },
            {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            },
            {
                title: "地址",
                width: 80,
                dataIndex: "address"
            },
            {
                title: "早起时间",
                dataIndex: "time",
                width: 80
            }
        ];

        let columns2 = [
            {
                title: "id",
                dataIndex: "key",
                width: 80,
                fixed: "left"
            },
            {
                title: "用户名",
                dataIndex: "userName",
                width: 80,
                fixed: "left"
            },
            {
                title: "性别",
                dataIndex: "sex",
                width: 80,
                render(sex) {
                    return sex === "male" ? "男" : "女"
                }
            },
            {
                title: "状态",
                dataIndex: "state",
                width: 80,
                render(state) {
                    let config = {
                        "0": "闲鱼",
                        "1": "暴鲤龙"
                    };
                    return config[state];
                }
            },
            {
                title: "爱好",
                dataIndex: "hobby",
                width: 80,
                render(hobby) {
                    return "没日没夜玩 " + hobby;
                }
            },
            {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            },
            {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            },
            {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            },
            {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            },
            {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            }, {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            }, {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            }, {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            }, {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            }, {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            },
            {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            },
            {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            },
            {
                title: "地址",
                width: 80,
                dataIndex: "address"
            },
            {
                title: "早起时间",
                dataIndex: "time",
                width: 80
            }
        ];

        let columns3 = [
            {
                title: "id",
                dataIndex: "key",
                width: 80
            },
            {
                title: "用户名",
                dataIndex: "userName",
                width: 80
            },
            {
                title: "性别",
                dataIndex: "sex",
                width: 80,
                render(sex) {
                    return sex === "male" ? "男" : "女"
                }
            },
            {
                title: "状态",
                dataIndex: "state",
                width: 80,
                render(state) {
                    let config = {
                        "0": "闲鱼",
                        "1": "暴鲤龙"
                    };
                    return config[state];
                }
            },
            {
                title: "爱好",
                dataIndex: "hobby",
                sorter: (a, b) => {
                    return a.hobby.length - b.hobby.length
                },

                width: 80,
                render(hobby) {
                    return "没日没夜玩 " + hobby;
                }
            },
            {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            },
            {
                title: "地址",
                width: 80,
                dataIndex: "address"
            },
            {
                title: "早起时间",
                dataIndex: "time",
                width: 80
            }
        ];

        let columns4 = [
            {
                title: "id",
                dataIndex: "key",
                width: 80
            },
            {
                title: "用户名",
                dataIndex: "userName",
                width: 80
            },
            {
                title: "性别",
                dataIndex: "sex",
                width: 80,
                render(sex) {
                    return sex === "male" ? "男" : "女"
                }
            },
            {
                title: "状态",
                dataIndex: "state",
                width: 80,
                render(state) {
                    let config = {
                        "0": <Badge status={"error"} text={"闲鱼"}/>,
                        "1": <Badge status={"success"} text={"暴鲤龙"}/>
                    };
                    return config[state];
                }
            },
            {
                title: "爱好",
                dataIndex: "hobby",
                width: 80,
                render(hobby) {
                    return "没日没夜玩 " + hobby;
                }
            },
            {
                title: "生日",
                width: 80,
                dataIndex: "birthday"
            },
            {
                title: "地址",
                width: 80,
                dataIndex: "address"
            },
            {
                title: "早起时间",
                dataIndex: "time",
                width: 80
            },
            {
                title: "操作",
                render:(text, item)=> {
                    return <Button type={"primary"} onClick={() => {
                        this.handleDelete(text, item)
                    }}>删除</Button>;
                },
                width: 80
            }
        ];

        return (
            <
                div>
                < Card
                    title={"高级表格_表头固定"}
                    className={style.card}>
                    < Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={
                            {
                                y: 200
                            }
                        }
                    />
                </Card>

                <Card title={"高级表格_左侧固定"} className={style.card}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x: 500}}
                    />
                </Card>

                <Card title={"高级表格_排序"} className={style.card}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>

                <Card title={"高级表格_ 操作按钮"} className={style.card}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        );
    }
}

export default HighTableDemo;


