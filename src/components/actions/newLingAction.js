export const postLing = (ling) => {
    console.log("You created a new ling");
    return {
        type: "NEW_LING",
        payload: ling
    }
};
