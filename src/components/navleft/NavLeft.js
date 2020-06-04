import React, {Component} from "react";
import style from "./navLeft.module.css"
import menuList from "../../config/menuConfig"
import {Menu} from 'antd';
import Logo from "../../resource/assets/logo-ant.svg"


const SubMenu = Menu.SubMenu;

class NavLeft extends Component {

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuList);

        this.setState({
            menuTreeNode: menuTreeNode
        })
    }

    //菜单渲染
    renderMenu = (menuList) => {
        return menuList.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
            )
        });
    }


    render() {
        return (
            <div className={style.navLeftWrapper}>
                <div className={style.logo}>
                    <img className={style.logoImage} src={Logo} alt={"logo"}/>
                    <div className={style.logoInfo}>Imooc MS</div>
                </div>

                <Menu theme={"dark"}>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft;








