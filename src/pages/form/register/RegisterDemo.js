import React, {Component} from "react";
import style from './registerDemo.module.css'
import {
    Card,
    Form,
    Input,
    InputNumber,
    Button,
    Radio,
    Select,
    Switch,
    DatePicker,
    TimePicker,
    Upload,
    Checkbox
} from "antd";
import {UserOutlined, LockOutlined, LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import moment from "moment";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16
    }
};

const offsetLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};

const dateFormat = 'YYYY-MM-DD';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}


class RegisterDemo extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {};
    }


    formRef = React.createRef();

    handleSubmit() {
        console.log(this.formRef.current.getFieldsValue());
    }

    handleChange(info) {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        let FormItem = Form.Item;
        const uploadButton = (
            <div>
                {
                    this.state.loading ? <LoadingOutlined/> : <PlusOutlined/>
                }
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Card title={"注册表单"}>
                    <Form ref={this.formRef}>
                        <FormItem
                            label={"用户名"}
                            name={"userName"}
                            {...layout}
                            rules={[
                                {
                                    required: true,
                                    message: "用户名不能为空"
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined/>} placeholder={"请输入用户名"}/>
                        </FormItem>

                        <FormItem
                            label={"密码"}
                            name={"password"}
                            {...layout}
                            rules={[
                                {
                                    required: true,
                                    message: "密码不能为空"
                                },
                                {
                                    type: "number",
                                    message: "密码只能为数字",
                                    transform(value) {
                                        return Number(value);
                                    }
                                }
                            ]}
                        >
                            <Input prefix={<LockOutlined/>} placeholder={"请输入密码"} type={"password"}/>
                        </FormItem>

                        <FormItem
                            label={"性别"}
                            name={"sex"}
                            {...layout}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Radio.Group defaultValue={"female"}>
                                <Radio value={"male"}>男</Radio>
                                <Radio value={"female"}>女</Radio>
                            </Radio.Group>
                        </FormItem>

                        <FormItem
                            label={"年龄"}
                            name={"age"}
                            initialValue={18}
                            {...layout}
                            rules={[
                                {
                                    required: true,
                                    message: "请输入年龄"
                                },
                                {
                                    type: "number",
                                    message: "请输入数字",
                                    transform(value) {
                                        return Number(value);
                                    }
                                }
                            ]}
                        >
                            <InputNumber placeholder={"请输入年龄"}/>
                        </FormItem>

                        <FormItem
                            label={"当前状态"}
                            name={"status"}
                            initialValue={"3"}
                            {...layout}
                        >
                            <Select>
                                <Select.Option value={"1"}>幼年期1期</Select.Option>
                                <Select.Option value={"2"}>幼年期2期</Select.Option>
                                <Select.Option value={"3"}>成长期</Select.Option>
                                <Select.Option value={"4"}>成熟期</Select.Option>
                                <Select.Option value={"5"}>完全体</Select.Option>
                                <Select.Option value={"6"}>究极体</Select.Option>
                                <Select.Option value={"7"}>超究极体</Select.Option>
                            </Select>
                        </FormItem>

                        <FormItem
                            label={"爱好"}
                            name={"hobby"}
                            initialValue={["3", "6"]}
                            {...layout}
                        >
                            <Select mode={"multiple"}>
                                <Select.Option value={"1"}>唱歌</Select.Option>
                                <Select.Option value={"2"}>跳舞</Select.Option>
                                <Select.Option value={"3"}>rap</Select.Option>
                                <Select.Option value={"4"}>打篮球</Select.Option>
                                <Select.Option value={"5"}>红色警戒3</Select.Option>
                                <Select.Option value={"6"}>钢铁雄心4</Select.Option>
                                <Select.Option value={"7"}>太阳神三国杀</Select.Option>
                            </Select>
                        </FormItem>

                        <FormItem
                            label={"是否已婚"}
                            name={"marriedBoolean"}
                            initialValue={true}
                            {...layout}
                        >
                            <Switch checkedChildren={"是"} unCheckedChildren={"否"}/>
                        </FormItem>

                        <FormItem
                            label={"生日"}
                            name={"birthday"}
                            {...layout}
                        >
                            <DatePicker
                                showTime
                                defaultValue={moment('2015-06-06', dateFormat)}/>
                        </FormItem>

                        <FormItem
                            label={"联系地址"}
                            name={"address"}
                            initialValue={"浙江 宁波"}
                            {...layout}
                        >
                            <Input.TextArea/>
                        </FormItem>

                        <FormItem
                            label={"早起时间"}
                            name={"weakUpTime"}
                            {...layout}
                        >
                            <TimePicker
                                showTime
                                defaultValue={moment('2015-06-06', dateFormat)}/>
                        </FormItem>

                        <FormItem
                            label={"头像"}
                            name={"userImage"}
                            {...layout}
                        >
                            <Upload
                                listType={"picture-card"}
                                showUploadList={false}
                                onChange={this.handleChange}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            >
                                {
                                    this.state.imageUrl ?
                                        <img src={this.state.imageUrl} alt="avatar" style={{width: '100%'}}/> :
                                        uploadButton
                                }
                            </Upload>
                        </FormItem>

                        <FormItem
                            {...offsetLayout}
                        >
                            <Checkbox>
                                我已经阅读<a href={"#"}>慕课协议</a>
                            </Checkbox>
                        </FormItem>

                        <FormItem
                            {...offsetLayout}
                        >
                            <Button type={"primary"} onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default RegisterDemo;
