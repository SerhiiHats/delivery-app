import {combineReducers} from "redux";
import {countReducer} from "../components/CardProduct/countReducer";

export default combineReducers({
  quantityItems: countReducer,
});
