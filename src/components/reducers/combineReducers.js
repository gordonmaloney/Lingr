import { combineReducers } from "redux";
import LingsReducer from "./lings";
// import addLingReduced from "./actionReducer";

const allReducers = combineReducers({
  lings: LingsReducer,
  // addLingReduced: addLingReduced
});

export default allReducers;