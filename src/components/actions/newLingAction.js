export const newLing = (user) => {
    console.log("You created a new ling");
    return {
        type: "NEW_LING",
        payload: newLingBody
    }
};
