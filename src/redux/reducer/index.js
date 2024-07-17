import { combineReducers } from "redux";
import productReducer from "./ProductReducer";

const rootReducers = combineReducers({
    product: productReducer,
});
export default rootReducers;