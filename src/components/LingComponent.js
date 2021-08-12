import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";

class Ling extends Component {
  LingsList() {
    return this.props.lings.lings.map((ling) => {
      if (this.props.lang === "Show All") {
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
              <CardFooter>
                <Link to={`/reply/${ling.id}`}>
                  {
                    ling.lingRepliesObj.filter(
                      (reply) => reply.replyType === "reply"
                    ).length
                  }{" "}
                  Replies
                </Link>{" "}
                |
                <Link to={`/reply/${ling.id}`}>
                  {" "}
                  {
                    ling.lingRepliesObj.filter(
                      (reply) => reply.replyType === "correction"
                    ).length
                  }{" "}
                  Corrections
                </Link>
                <span className="ling-date">{ling.lingDate}</span>
              </CardFooter>
              <CardBody className="ling-reply">
                <Link to={`/reply/${ling.id}`}>
                  <input
                    className="ling-reply"
                    type="text"
                    placeholder="Type your reply or correction here..."
                  />
                </Link>
              </CardBody>
            </Card>
          </div>
        );
      } else if (this.props.lang === ling.lingLang) {
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
              <CardFooter>
                <Link to={`/reply/${ling.id}`}>
                  {
                    ling.lingRepliesObj.filter(
                      (reply) => reply.replyType === "reply"
                    ).length
                  }{" "}
                  Replies
                </Link>{" "}
                |
                <Link to={`/reply/${ling.id}`}>
                  {" "}
                  {
                    ling.lingRepliesObj.filter(
                      (reply) => reply.replyType === "correction"
                    ).length
                  }{" "}
                  Corrections
                </Link>
                <span className="ling-date">{ling.lingDate}</span>
              </CardFooter>
              <CardBody className="ling-reply">
                <Link to={`/reply/${ling.id}`}>
                  <input
                    className="ling-reply"
                    type="text"
                    placeholder="Type your reply or correction here..."
                  />
                </Link>
              </CardBody>
            </Card>
          </div>
        );
      }
    });
  }

  render() {
    return <div>{this.LingsList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    lings: state.lings,
  };
}

export default connect(mapStateToProps)(Ling);