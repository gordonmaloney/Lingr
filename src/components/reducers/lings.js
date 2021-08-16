import * as ActionTypes from "../actions/ActionTypes";
import { lings } from "../../mocks/lings";
import { replies } from '../../mocks/replies'

function LingsReducer(
  state = {
    lings,
    replies
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
      return {
        ...state,
        replies: [{...action.payload}, ...state.replies],
      };
    default:
      return state;
  }
}

export default LingsReducer;