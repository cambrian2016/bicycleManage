import React,{Component} from "react";
import style from './home.module.css'

class Home extends Component{

    render() {
        return (
            <div className={style.homeWrapper}>
                版权所有:慕课网&河畔一角(推荐使用谷歌浏览器,可以获得最佳操作体验) 技术支持:河畔一角
            </div>
        );
    }
}

export default Home;


