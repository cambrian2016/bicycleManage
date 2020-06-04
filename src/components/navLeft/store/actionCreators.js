import * as actionTypes from "./actionTypes"
import axios from "axios";

const getMenuListAction = (menuList) => ({
    type: actionTypes.GET_MENU_LIST,
    value: menuList
})

export const getMenuList = () => {
        return (dispatch) => {
            axios.get("/api/menuList.json").then((response) => {
                const data = response.data;

                if (data.success) {
                    console.log(data);
                    dispatch(getMenuListAction(data.data.menuList));
                }
            }).catch(() => {
                console.log("error");
            });
        }
    }
;
