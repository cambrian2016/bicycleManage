import Jsonp from "jsonp"
import axios from "axios";
import {Modal} from "antd";

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            Jsonp(options.url, {
                param: "callback"
            }, function (err, response) {
                if (response.result) {
                    resolve(response);
                } else {
                    reject(response.message);
                }
            })
        })
    }

    static ajax(options) {
        let loading;
        if(options.data&&options.data.isShowLoading!==false){
            loading=document.getElementById("ajaxLoading");
            loading.style.display="block";
        }
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                message: "get",
                // baseURL: "https://www.easy-mock.com/mock/5ede15998f506f19c8299fd8/mockapi",
                baseURL: "http://localhost:3000/api",
                timeout: 5000,
                params: (options.data && options.data.params) || ""
            }).then((response)=>{
                if(options.data&&options.data.isShowLoading!==false){
                    loading=document.getElementById("ajaxLoading");
                    loading.style.display="none";
                }

                if (response.status===200){
                    let res=response.data;
                    if (res.success){
                        resolve(res);
                    }else {
                        Modal.info({
                            title:"提示",
                            content:res.message,
                        });
                    }
                }else {
                    reject(response.data.message);
                }
            })
        });
    }
}