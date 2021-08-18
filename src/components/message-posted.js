import React from "react";

export default function MessagePosted(props) {
    return (
      <div className="success-msg">{props.message} posted successfully</div>
    );
}
