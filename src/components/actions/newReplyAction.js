export const postReply = (values) => {
  console.log("You posted a new reply: ", values);
  return {
    type: "POST_REPLY",
    payload: {
      replyId: "new-id",
      replyAuthor: "reply tester",
      replyType: "correction",
      correctionBody: values.replyCorrection,
      replyBody: values.replyReply,
    },
  };
};
