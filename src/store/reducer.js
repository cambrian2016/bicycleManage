import {combineReducers} from "redux";

import headerReducer from "../components/header/store/reducer"
import navLeftReducer from "../components/navLeft/store/reducer"


const reducer = combineReducers({
    header: headerReducer,
    navLeft: navLeftReducer
});

export default reducer;