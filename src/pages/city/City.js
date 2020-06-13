import React, {Component} from "react";
import {Card, Button, Table, Form, Select, Modal} from "antd";
import Utils from "./../../util/util"
import style from "./city.module.css"
import Axios from "axios";

const FormItem = Form.Item;
const SelectOption = Select.Option;

class City extends Component {

    params = {
        page: 1,
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: null,
            pagination: null,
            showOpenCity: false
        };

        this.getOpenCityMock = this.getOpenCityMock.bind(this);
    }


    componentDidMount() {
        this.getOpenCityMock();
    }

    getOpenCityMock() {
        Axios.get("/openCityMock").then((response) => {
            console.log("openCityMock  =  ", response);
            let dataSource = response.data.data.openCityList;
            dataSource = dataSource.map((item) => {
                item.key = item.id;
                return item;
            });
            this.setState({
                dataSource: dataSource,
                pagination: Utils.pagination(response.data.data, (current) => {
                    this.params.page = current;
                    this.getOpenCityMock();
                })
            });
        })
    }

    handleOpenCity = () => {
        this.setState({
            showOpenCity: true
        })
    };

    handleSubmit = () => {

    };

    render() {

        const columns = [
            {
                title: "城市ID",
                dataIndex: "id"
            },
            {
                title: "城市名称",
                dataIndex: "name"
            },
            {
                title: "用车模式",
                dataIndex: "mode",
                render(mode) {
                    return mode === 1 ? "停车点" : "禁停区";
                }
            },
            {
                title: "营运模式",
                dataIndex: "opMode",
                render(opMode) {
                    return opMode === 1 ? "自营" : "加盟";
                }
            },
            {
                title: "授权加盟商",
                dataIndex: "franchiseeName"
            },
            {
                title: "城市管理员",
                dataIndex: "cityAdmins",
                render(cityAdmins) {
                    return cityAdmins.map((item) => {
                        return item.userName
                    }).join(",");
                }
            },
            {
                title: "城市开通时间",
                dataIndex: "openTime"
            },
            {
                title: "操作时间",
                dataIndex: "updateTime",
                render(updateTime) {
                    return Utils.formatDate(updateTime);
                }
            },
            {
                title: "操作人",
                dataIndex: "sysUserName"
            }
        ];

        return (
            <div>
                <Card className={style.card}>
                    <FilterForm/>
                </Card>

                <Card className={style.card}>
                    <Button type={"primary"} onClick={this.handleOpenCity}>开通城市</Button>
                </Card>

                <Table
                    columns={columns}
                    dataSource={this.state.dataSource}
                    pagination={this.state.pagination}
                />

                <Modal
                    title={"开通城市"}
                    visible={this.state.showOpenCity}
                    onCancel={() => {
                        this.setState({showOpenCity: false})
                    }}
                    onOk={this.handleSubmit}
                >
                    <OpenCityForm/>
                </Modal>
            </div>
        );
    }
}

class FilterForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    formRef = React.createRef();

    handleSubmit() {
        console.log("this.formRef.current.get = ", this.formRef.current.getFieldsValue());
    }

    handleOnReset = () => {
        this.formRef.current.setFieldsValue({
            auth_status: "1"
        });
    };


    render() {
        return (
            <Form layout={"inline"}
                  ref={this.formRef}>
                <FormItem
                    label={"城市"}
                    name={"city_id"}
                >
                    <Select placeholder={"全部"}>
                        <SelectOption value={""}>
                            全部
                        </SelectOption>
                        <SelectOption value={"1"}>
                            北京市
                        </SelectOption>
                        <SelectOption value={"2"}>
                            天津市
                        </SelectOption>
                        <SelectOption value={"3"}>
                            深圳市
                        </SelectOption>
                    </Select>
                </FormItem>

                <FormItem
                    label={"用车模式"}
                    name={"mode"}
                >
                    <Select placeholder={"全部"}>
                        <SelectOption value={""}>
                            全部
                        </SelectOption>
                        <SelectOption value={"1"}>
                            指定停车点模式
                        </SelectOption>
                        <SelectOption value={"2"}>
                            禁停区模式
                        </SelectOption>
                    </Select>
                </FormItem>

                <FormItem
                    label={"运营模式"}
                    name={"op_mode"}
                >
                    <Select placeholder={"全部"}>
                        <SelectOption value={""}>
                            全部
                        </SelectOption>
                        <SelectOption value={"1"}>
                            自营
                        </SelectOption>
                        <SelectOption value={"2"}>
                            加盟
                        </SelectOption>
                    </Select>
                </FormItem>

                <FormItem
                    label={"加盟商授权状态"}
                    name={"auth_status"}
                >
                    <Select placeholder={"全部"}>
                        <SelectOption value={""}>
                            全部
                        </SelectOption>
                        <SelectOption value={"1"}>
                            已授权
                        </SelectOption>
                        <SelectOption value={"2"}>
                            未授权
                        </SelectOption>
                    </Select>
                </FormItem>

                <FormItem>
                    <Button type={"primary"} className={style.button} onClick={this.handleSubmit}>查询</Button>
                    <Button onClick={this.handleOnReset}>重置</Button>
                </FormItem>
            </Form>
        );
    }
}

class OpenCityForm extends Component {
    render() {
        const formItemLayout = {
            labelCol: {
                span: 5
            },
            wrapperCol: {
                span: 19
            }
        };

        return (
            <Form layout={"horizontal"}>
                <FormItem label={"选择城市"} {...formItemLayout} name={"cityId"}>
                    <Select>
                        <SelectOption value={""}>全部</SelectOption>
                        <SelectOption value={"1"}>北京市</SelectOption>
                        <SelectOption value={"2"}>天津市</SelectOption>
                    </Select>
                </FormItem>

                <FormItem label={"营运模式"}{...formItemLayout} name={"opMode"}>
                    <Select>
                        <SelectOption value={"1"}>自营</SelectOption>
                        <SelectOption value={"2"}>加盟</SelectOption>
                    </Select>
                </FormItem>

                <FormItem label={"用车模式"}{...formItemLayout} name={"mode"}>
                    <Select>
                        <SelectOption value={"1"}>指定停车点</SelectOption>
                        <SelectOption value={"2"}>禁停区</SelectOption>
                    </Select>
                </FormItem>
            </Form>
        );
    }
}

export default City;


