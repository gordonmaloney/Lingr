export const postLing = (ling, lang, cor, id) => {
  console.log("You created a new ling. Body = ", ling, " Language = ",  lang, " Correction Preference = ", cor);
  return {
    type: "POST_LING",
    payload: {
        lingBody : ling,
        id : id,
        lingLang : lang,
        lingDate : (new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ", " + new Date().toLocaleDateString()),
        userIcon : "😎",
        userName : "Gordon Maloney",
        lingRepliesObj : []
    },
  };
};
