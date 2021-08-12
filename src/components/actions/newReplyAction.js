export const postReply = () => {
  console.log("You posted a new reply");
  return {
    type: "POST_REPLY",
    payload: {
      replyId: 50,
      replyAuthor: "reply tester",
      replyType: "correction",
      correctionBody: "correction test",
      replyBody: "reply test",
    },
  };
};
