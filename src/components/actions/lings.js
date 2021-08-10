/*
DELETE THIS

import { LINGS } from "../Lings";
import * as ActionTypes from "./ActionTypes";

export const Lings = (state = LINGS, action) => {
  switch (action.type) {
    case ActionTypes.POST_LING:
      const ling = action.payload;
      ling.id = state.length;
      ling.lingDate = new Date().toISOString();
      ling.userIcon = "😎";
      ling.userName = "Gordon Maloney";
      return state.concat(ling);
    default:
      console.log(state)
      return state;
  }
};

*/
