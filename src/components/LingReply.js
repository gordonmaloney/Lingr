import React, { Component, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postReply } from "./actions/newReplyAction";
import { Control, LocalForm, Errors } from "react-redux-form";
import { useDispatch } from "react-redux";
import MessagePosted from "./message-posted";

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddReply: (values) => dispatch(postReply(values)),
  };
};

function ReplyCorrect(lingCorrect) {
  const [reply, correct] = useState("reply");
  const [successMsg, correctSuccessMsg] = useState("notPosted");
  const dispatch = useDispatch();
  const toggle = () => {
    if (reply === "reply") {
      return correct("correction");
    }
    correct("reply");
  };

  const toggleSuccessMsg = () => {
    return correctSuccessMsg("Posted");
  };

  const handleSubmit = (values) => {
    document.getElementById("replyReply").value = "";
    document.getElementById("replyReply").placeholder =
      "Type your reply here...";
    document.getElementById("replyCorrection").value = lingCorrect.content;
    document.getElementById("replyCorrection").placeholder =
      lingCorrect.content;
    correct("reply");
    dispatch(postReply(values));
    toggleSuccessMsg();
  };

  const ReplyTypeButton = () => {
    if (reply === "reply") {
      return (
        <Control
          model=".replyType"
          id="replyType"
          name="replyType"
          defaultValue="reply"
          className="hide"
        />
      );
    } else if (reply === "correction") {
      return (
        <Control
          model=".replyType"
          id="replyType"
          name="replyType"
          defaultValue="correction"
          className="hide"
        />
      );
    }
  };

  return (
    <>
      <div>
        <LocalForm onSubmit={(values) => handleSubmit(values)}>
          <Button
            className={reply === "correction" ? "hide" : "show"}
            onClick={() => toggle()}
          >
            Add Correction
          </Button>
          <div className={reply === "correction" ? "show" : "hide"}>
            <Button onClick={() => toggle()}>Cancel Correction</Button>
            <span className="d-inline">
              {" "}
              <i>
                Protip: Make corrections in CAPITALS so folk can see where they
                went wrong
              </i>
            </span>
            <Control.text
              model=".parentId"
              id="parentId"
              name="parentId"
              defaultValue={lingCorrect.id}
              className="hide"
            />

            <Control.textarea
              model=".replyCorrection"
              id="replyCorrection"
              name="replyCorrection"
              defaultValue={lingCorrect.content}
              className="mb-1 mt-3 form-control"
              rows="2"
            />
          </div>

          <Control.textarea
            model=".replyReply"
            id="replyReply"
            name="replyReply"
            placeholder="Type your reply here..."
            className="mb-3 mt-3 form-control"
            rows="2"
            validators={{
              required,
              minLength: minLength(10),
            }}
          />
          <Errors
            className="text-danger"
            model=".replyReply"
            show="touched"
            component="div"
            messages={{
              required: "",
              minLength: "Must be at least 10 characters",
            }}
          />

          <ReplyTypeButton />
          <Button type="submit" color="primary" outline>
            Post
          </Button>
        </LocalForm>
      </div>

      {console.log(successMsg)}

      {successMsg === "notPosted" ? " " : <MessagePosted message="Reply" />}
    </>
  );
}

function Replies(props) {
  const LingReplies = props.replies.map((reply) => {
    if (reply.parentId === props.ling.id) {
      if (
        reply.replyType === "correction" &&
        reply.correctionBody !== props.ling.lingBody
      ) {
        return (
          <div key={reply.replyId} className="timeline-hover">
            <Card className="mb-3 reply-ling">
              <CardBody>
                <div className="correction" />
                <p className="ml-3 mb-3 correction-body">
                  <i>{reply.correctionBody}</i>
                </p>
                {reply.replyBody}
              </CardBody>
              <CardFooter className="text-right replySignOff">
                {reply.replyAuthor}
              </CardFooter>
            </Card>
          </div>
        );
      } else {
        return (
          <div key={reply.replyId} className="timeline-hover">
            <Card className="mb-3 reply-ling">
              <CardBody>
                <div className="reply" />
                {reply.replyBody}
              </CardBody>
              <CardFooter className="text-right replySignOff">
                {reply.replyAuthor}
              </CardFooter>
            </Card>
          </div>
        );
      }
    } else {
    }
  });
  return <div>{LingReplies}</div>;
}

class LingReply extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ling = this.props.lings.lings[this.props.match.params.id];
    return (
      <div key={ling.id}>
        <Card className="ling mb-3">
          <CardHeader>
            <span className="ling-date">{ling.lingLang}</span>
            <h3>
              {ling.userIcon} - {ling.userName}
            </h3>
          </CardHeader>
          <CardBody>{ling.lingBody}</CardBody>
          <div className="cor-pref-timeline">
            <center>
              Correction preference: <b>{ling.lingCorPref}</b>
            </center>
          </div>
          <CardFooter>
            <ReplyCorrect content={ling.lingBody} id={ling.id} />
          </CardFooter>
        </Card>

        <Replies ling={ling} replies={this.props.lings.replies} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lings: state.lings,
    replies: state.replies,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LingReply);
