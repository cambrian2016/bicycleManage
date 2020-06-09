import * as actionTypes from "./actionTypes"
import axios from "../../../http/axios";

export const getUserNameAction = () => ({
    type: actionTypes.GET_USER_NAME,
    value: "寒武"
});

export const getSystemTimeAction = () => ({
    type: actionTypes.GET_SYSTEM_TIME,
});

const getWeatherAction = (weatherJson) => ({
    type: actionTypes.GET_WEATHER,
    value: weatherJson
});

export const getWeather = () => {
        return (dispatch) => {
            axios.jsonp({
                url: "http://222.190.151.215:8093/njqxfxapp/queryWeather!m"
            }).then((response) => {
                if (response.result) {
                    let weatherJson = response.weather;
                    dispatch(getWeatherAction(weatherJson));
                }
            });
        }
    }
;
