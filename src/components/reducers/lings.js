import * as ActionTypes from "../actions/ActionTypes";
import { lings } from "../../mocks/lings";

function LingsReducer(
  state = {
    lings,
  },
  action
) {
  console.log(action)

  switch (action.type) {
    case ActionTypes.POST_LING:
      return {
        ...state,
        lings: [...state.lings, {...action.payload}],
      };
    case ActionTypes.POST_REPLY:
      return {
        ...state
      }
    default:
      console.log(state)
      return state
  }
}

export default LingsReducer;
