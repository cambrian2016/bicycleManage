import * as actionTypes from "./actionTypes";
import Util from "../../../util/util"

const defaultState = {
    userName: "奥陶",
    systemTime: "2020-1-1 10:10:10",
    weather: "晴天 无风",
    weatherImage: ""
};


export default (state = defaultState, action) => {
    let stateNew = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionTypes.GET_USER_NAME :
            stateNew.userName = action.value;
            break;

        case actionTypes.GET_SYSTEM_TIME:
            stateNew.systemTime = Util.formatDate(new Date().getTime());
            break

        case actionTypes.GET_WEATHER:
            let weatherJson = action.value;
            let weather = weatherJson.weather + " " + weatherJson.wd + weatherJson.ws;
            let weatherImage = weatherJson.img1;
            stateNew.weather = weather;
            stateNew.weatherImage = weatherImage;
            break

        default:
            break;
    }
    return stateNew;
}

