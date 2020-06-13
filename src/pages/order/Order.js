import React, {Component} from "react";
import {Card, Button, Table, Form, Select, Modal, DatePicker} from "antd";
import Utils from "./../../util/util"
import style from "./order.module.css"
import Axios from "axios";

const FormItem = Form.Item;
const SelectOption = Select.Option;

class Order extends Component {

    state = {};

    params={
        page:1
    };

    componentDidMount() {
        this.getOrderList();
    }

    getOrderList = () => {
        let _this=this;
        Axios.get("/orderListMock").then((response) => {
            console.log("orderListMock  =  ", response);
            let dataSource = response.data.data.orderList;
            dataSource = dataSource.map((item) => {
                item.key = item.id;
                return item;
            });
            this.setState({
                dataSource: dataSource,
                pagination: Utils.pagination(response.data.data, (current) => {
                    _this.params.page = current;
                    _this.getOrderList();
                })
            });
        })
    };

    render() {
        const columns = [
            {
                title: "订单编号",
                dataIndex: "orderSn"
            },
            {
                title: "车辆编号",
                dataIndex: "bikeSn"
            },
            {
                title: "用户名",
                dataIndex: "userName"
            },
            {
                title: "手机号",
                dataIndex: "mobile"
            },
            {
                title: "里程",
                dataIndex: "distance"
            },
            {
                title: "行驶时长",
                dataIndex: "totalTime"
            },
            {
                title: "状态",
                dataIndex: "status"
            },
            {
                title: "开始时间",
                dataIndex: "startTime"
            },
            {
                title: "结束时间",
                dataIndex: "endTime"
            },
            {
                title: "订单金额",
                dataIndex: "totalFee"
            },
            {
                title: "实付金额",
                dataIndex: "userPay"
            },
        ];

        return (
            <div>
                <Card className={style.card}>
                    <FilterForm/>
                </Card>

                <Card className={style.card}>
                    <Button className={style.button}>订单详情</Button>
                    <Button className={style.button}>结束订单</Button>
                </Card>

                <Card className={style.card}>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={this.state.pagination}
                    />
                </Card>
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
                    label={"开始时间"}
                    name={"startTime"}
                >
                    <DatePicker showTime format={"yyyy-MM-dd HH:mm:ss"}/>
                </FormItem>

                <FormItem
                    label={"结束时间"}
                    name={"endTime"}
                >
                    <DatePicker showTime format={"yyyy-MM-dd HH:mm:ss"}/>
                </FormItem>

                <FormItem
                    label={"订单状态"}
                    name={"opMode"}
                >
                    <Select placeholder={"全部"}>
                        <SelectOption value={""}>
                            全部
                        </SelectOption>
                        <SelectOption value={"1"}>
                            进行中
                        </SelectOption>
                        <SelectOption value={"2"}>
                            结束行程
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


export default Order;


