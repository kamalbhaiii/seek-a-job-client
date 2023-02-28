import { combineReducers } from "redux";
import selectedReducer from "./selectedReducer";
import jobReducer from "./jobReducer";

const reducers = combineReducers({
    selectedReducer,
    jobReducer
})

export default reducers;