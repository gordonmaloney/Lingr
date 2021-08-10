import * as ActionTypes from "../actions/ActionTypes";
import {POST_LING} from '../actions/lings'

const addLingReduced = (state, action) => {
    switch (action.type){
        case POST_LING:
            return console.log(state)
    }
}

export default addLingReduced