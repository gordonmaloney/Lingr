import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lings: this.props.lings,
      replies: this.props.replies,
    };
  }

  NotificationsList() {
    console.log(this.props.lings.lings);
    return this.props.lings.replies.map((reply) => {
      return this.props.lings.lings
        .filter((ling) => ling.userName === "Gordon Maloney")
        .map((ling) => {
          if (ling.id === reply.parentId) {
            console.log(reply);

            if (reply.replyType === "correction") {
              return (
                <Link to={`/reply/${ling.id}`} className="reply-no-link">
                  <div key={reply.replyId}>
                    <Card className="reply-ling ml-0">
                        <CardHeader className="pb-2">{ling.userName}</CardHeader>
                      <CardBody>{ling.lingBody}</CardBody>
                      </Card>
                      <Card className="ml-5 mr-5 mb-3"><CardBody>
                        <div className={reply.replyType} />
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
                </Link>
              );
            } else {
              return (
                <Link to={`/reply/${ling.id}`} className="reply-no-link">
                  <div key={reply.replyId}>
                  <Card className="reply-ling ml-0">
                        <CardHeader className="pb-2">{ling.userName}</CardHeader>
                      <CardBody>{ling.lingBody}</CardBody>
                      </Card>
                      <Card className="ml-5 mr-5 mb-3"><CardBody>
                        {reply.replyBody}
                      </CardBody>
                      <CardFooter className="text-right replySignOff">
                        {reply.replyAuthor}
                      </CardFooter>
                      </Card>
                  </div>
                </Link>
              );
            }
          }
        });
    });
  }

  render() {
    return (
      <div>
        <center>
          <h3 className="my-3">Notifications</h3>
        </center>
        {this.NotificationsList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lings: state.lings,
  };
}

export default connect(mapStateToProps)(Notifications);
