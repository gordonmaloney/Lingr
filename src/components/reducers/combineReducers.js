import { combineReducers } from "redux";
import LingsReducer from "./lings";

const allReducers = combineReducers({
  lings: LingsReducer,
});

export default allReducers;
