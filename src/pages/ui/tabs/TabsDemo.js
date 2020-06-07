import React, {Component} from "react";
import style from './tabsDemo.module.css'
import {Button, Card, Tabs, message} from "antd";
import {AndroidOutlined, AppleOutlined, WindowsOutlined} from "@ant-design/icons"

const {TabPane} = Tabs;

class TabsDemo extends Component {

    newTabIndex = 0;

    constructor(props) {
        super(props);

        this.onEdit=this.onEdit.bind(this);
        this.handleEditTabChange=this.handleEditTabChange.bind(this);
    }


    handleTabChange(key) {
        message.info("你点击的是第" + key + "个页面");
    }

    handleEditTabChange(activityKey){
        this.setState({activityKey:activityKey});
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { tabPanes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        const newPanes = [...tabPanes];
        newPanes.push({ title: 'New Tab'+this.newTabIndex, content: 'Content of new Tab'+this.newTabIndex, key: activeKey });
        this.setState({
            tabPanes: newPanes,
            activeKey,
        });
    };

    remove = targetKey => {
        const { tabPanes, activeKey } = this.state;
        let newActiveKey = activeKey;
        let lastIndex;
        tabPanes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = tabPanes.filter(pane => pane.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        this.setState({
            tabPanes: newPanes,
            activeKey: newActiveKey,
        });
    };

    componentWillMount() {
        const tabPanes = [
            {
                title: "Tab1",
                content: "This is tab one",
                key: "1"
            },
            {
                title: "Tab2",
                content: "This is tab two",
                key: "2"
            },
            {
                title: "Tab3",
                content: "This is tab three",
                key: "3"
            },
            {
                title: "Tab4",
                content: "This is tab four",
                key: "4"
            },
        ];

        this.setState({
            tabPanes: tabPanes
        })
    }

    render() {
        return (
            <div>
                <Card className={style.card} title={"Tab标签"}>
                    <Tabs defaultActiviteKey={"1"} onChange={this.handleTabChange}>
                        <TabPane tab={"Tab 11"} key={"1"}>
                            Content ot tab pane 1
                        </TabPane>
                        <TabPane tab={"Tab 22"} key={"2"}>
                            Content ot tab pane 2
                        </TabPane>
                        <TabPane tab={"Tab 33"} key={"3"}>
                            Content ot tab pane 3
                        </TabPane>
                    </Tabs>
                </Card>

                <Card className={style.card} title={"带图标Tab标签"}>
                    <Tabs defaultActiviteKey={"1"} onChange={this.handleTabChange}>
                        <TabPane tab={<span><AndroidOutlined/>Tab 11</span>} key={"1"}>
                            Content ot tab pane 1
                        </TabPane>
                        <TabPane tab={<span><WindowsOutlined/>Tab 22</span>} key={"2"} disabled={true}>
                            Content ot tab pane 2
                        </TabPane>
                        <TabPane tab={<span><AppleOutlined/>Tab 33</span>} key={"3"}>
                            Content ot tab pane 3
                        </TabPane>
                    </Tabs>
                </Card>

                <Card className={style.card} title={"可增减Tab标签"}>
                    <Tabs
                        defaultActiviteKey={"1"}
                        onChange={this.handleEditTabChange}
                        activiteKey={this.state.activityKey}
                        onEdit={this.onEdit}
                        type={"editable-card"}>
                        {
                            this.state.tabPanes.map((item) =>
                                <TabPane tab={item.title} key={item.key}>
                                    {item.content}
                                </TabPane>
                            )
                        }

                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default TabsDemo;


