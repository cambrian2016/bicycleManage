import React,{Component} from "react";
import style from './footer.module.css'

class Footer extends Component{

    render() {
        return (
            <div className={style.footerWrapper}>
                版权所有:慕课网&河畔一角(推荐使用谷歌浏览器,可以获得最佳操作体验) 技术支持:河畔一角
            </div>
        );
    }
}

export default Footer;


