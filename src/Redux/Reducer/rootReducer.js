import crudReducer from "./crudReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  crudReducer: crudReducer,
});
export default rootReducer;
