import React, { Component } from "react";
import Ling from './LingComponent';
import { LINGS } from './Lings';
import { Card, CardHeader, Input } from 'reactstrap';

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
          <Card className="mb-3">
            <CardHeader className="text-right">
              <Input type="text" style={{width: "30%"}} className="ml-auto mb-2" placeholder="Filter Lings by language..."/>
            </CardHeader>
          </Card>

          <Ling lings={this.state.lings} />
      </>
    );
  }
}

export default Timeline;