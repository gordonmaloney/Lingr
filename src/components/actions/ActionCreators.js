import * as ActionTypes from './ActionTypes';

export const addLing = (newLingBody, newLingLang ) => ({
    type: ActionTypes.POST_LING,
    payload: {
        id: 10,
        userIcon: "😎",
        userName: "Gordon Maloney",
        lingBody: newLingBody,
        lingDate: new Date().toISOString(),
        lingLang: newLingLang,
        lingRepliesObj: []
    }
});