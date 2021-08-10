export const postLing = (ling, lang, cor) => {
  console.log("You created a new ling. Body = ", ling, " Language = ",  lang, " Correction Preference = ", cor);
  return {
    type: "NEW_LING",
    payload: {
      ling,
    },
  };
};