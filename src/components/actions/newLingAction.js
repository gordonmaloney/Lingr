export const postLing = (ling, lang, cor, id) => {
  console.log("You created a new ling. Body = ", ling, " Language = ",  lang, " Correction Preference = ", cor);
  return {
    type: "POST_LING",
    payload: {
        lingBody : ling,
        id : id,
        lingLang : lang,
        lingDate : new Date().toISOString(),
        userIcon : "😎",
        userName : "Gordon Maloney",
        lingRepliesObj : []
    },
  };
};
