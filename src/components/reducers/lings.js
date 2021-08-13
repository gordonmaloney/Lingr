import * as ActionTypes from "../actions/ActionTypes";
import { lings } from "../../mocks/lings";

function LingsReducer(
  state = {
    lings,
  },
  action
) {
  console.log(action);

  switch (action.type) {
    case ActionTypes.POST_LING:
      return {
        ...state,
        lings: [...state.lings, { ...action.payload }],
      };
    case ActionTypes.POST_REPLY:
      console.log(...state.lings[5].lingRepliesObj);
      console.log(action.payload);
      return {
        ...state,
        //lings: [...state.lings[5].lingRepliesObj, {...action.payload}],
      };
    default:
      return state;
  }
}

export default LingsReducer;
