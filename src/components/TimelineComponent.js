import React, { Component } from "react";
import Ling from './LingComponent';
import { LINGS } from './Lings';

class Timeline extends Component {
  constructor(props) {
      super(props);
      this.state = {
          lings: LINGS,
      }
  }

  render() {
    return (
      <>
          <Ling lings={this.state.lings} />
      </>
    );
  }
}

export default Timeline;