import React, {Component} from "react";
import style from './loginDemo.module.css'
import {Card, Form, Input, Button, Checkbox, Select} from "antd";
import {Option} from "antd/lib/mentions";

class LoginDemo extends Component {

    constructor(props) {
        super(props);

        this.handleFillForm = this.handleFillForm.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSelectChange=this.handleSelectChange.bind(this);
    }

    formRef = React.createRef();

    handleFillForm() {
        this.formRef.current.setFieldsValue({
            note: "Hello worldd",
            gender: "male"
        });
    }

    handleReset() {
        this.formRef.current.resetFields();
    }

    handleSelectChange(value){
        let noteNew="";
        if (value==="male"){
            noteNew="Hi man";
        }else if (value==="female"){
            noteNew="Hi lady";
        }else {
            noteNew="Hi other";
        }
        this.formRef.current.setFieldsValue({
            note:noteNew
        });
    }

    handleFinish(value){
        console.log("value",value);
    }


    render() {

        return (
            <div>
                <Card>
                    <Form ref={this.formRef} onFinish={this.handleFinish}>
                        <Form.Item
                            name={"note"}
                            label={"Note"}
                            rules={[
                                {
                                    required: true
                                },
                                {
                                    min: 5,
                                    message: "至少五个字符"
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name={"gender"}
                            label={"Gender"}
                            rules={[
                                {
                                    required: true
                                }
                            ]}
                        >
                            <Select
                                placeholder={"select a option andr change input text abow"}
                                onChange={this.handleSelectChange}
                            >
                                <Option value={"male"}>male</Option>
                                <Option value={"female"}>female</Option>
                                <Option value={"other"}>other</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                        >
                            {
                                ({getFieldValue})=>{
                                    if (getFieldValue("gender")==="other"){
                                        return (
                                            <Form.Item
                                                name={"customizeGender"}
                                                label={"Customize Gender"}
                                                rules={[
                                                    {
                                                        required:true,
                                                    }
                                                ]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                        );
                                    }else {
                                        return null;
                                    }
                                }
                            }
                        </Form.Item>

                        <Form.Item>
                            <Button
                                className={style.button}
                                type={"primary"}
                                htmlType={"submit"}
                            >
                                Submit
                            </Button>
                            <Button
                                className={style.button}
                                htmlType={"button"}
                                onClick={this.handleReset}
                            >
                                Reset
                            </Button>
                            <Button
                                className={style.button}
                                htmlType={"button"}
                                type={"link"}
                                onClick={this.handleFillForm}
                            >
                                Fill Form
                            </Button>
                        </Form.Item>

                    </Form>
                </Card>
            </div>
        );
    }
}

export default LoginDemo;


