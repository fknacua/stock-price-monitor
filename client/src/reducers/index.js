import { combineReducers } from "redux";
import stocks from './stock.rdc';
import appParams from './params.rdc';

export default combineReducers({
    stocks,
    appParams
})