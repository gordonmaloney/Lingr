export const postReply = (values) => {
  console.log("You posted a new reply: ", values);
  return {
    type: "POST_REPLY",
    payload: {
      parentId: values.parentId,
      replyId: "new-id",
      replyAuthor: "Gordon Maloney",
      replyType: values.replyType,
      correctionBody: values.replyCorrection,
      replyBody: values.replyReply,
    },
  };
};
