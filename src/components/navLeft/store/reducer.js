import * as actionTypes from "./actionTypes"

const defaultState = {
    menuList: [{
        "title": "首页",
        "key": "/home",
        "children": [
            {
                "title": "按钮",
                "key": "/ui/buttons"
            }
        ]
    }]
}


export default (state = defaultState, action) => {
    let stateNew = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case actionTypes.GET_MENU_LIST:
            stateNew.menuList = action.value;
            break;

        default:
            break;
    }

    return stateNew;
}
