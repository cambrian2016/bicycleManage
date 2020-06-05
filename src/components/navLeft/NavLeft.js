import React, {Component} from "react";
import style from "./navLeft.module.css"
import {Menu} from 'antd';
import Logo from "../../resource/assets/logo-ant.svg"
import * as actionCreators from "./store/actionCreators";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const SubMenu = Menu.SubMenu;

class NavLeft extends Component {

    componentDidMount() {
        this.props.getMenuList();
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
            } else if (item) {
                return (
                    <Menu.Item title={item.title} key={item.key}>
                        <NavLink to={item.key}>
                            {item.title}
                        </NavLink>
                    </Menu.Item>
                )
            }
        });
    };


    render() {
        const menuTreeNode = this.renderMenu(this.props.menuList);

        return (
            <div className={style.navLeftWrapper}>
                <div className={style.logo}>
                    <img className={style.logoImage} src={Logo} alt={"logo"}/>
                    <div className={style.logoInfo}>Imooc MS</div>
                </div>

                <Menu theme={"dark"}>
                    {menuTreeNode}
                </Menu>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        menuList: state.navLeft.menuList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMenuList() {
            dispatch(actionCreators.getMenuList());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLeft);







