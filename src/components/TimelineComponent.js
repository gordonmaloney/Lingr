import React, { Component } from "react";
import Ling from './LingComponent';
//import { LINGS } from './Lings';
import { Card, CardHeader, Input } from 'reactstrap';
import { connect } from "react-redux";


class Timeline extends Component {
  constructor(props) {
      super(props);
      this.state = {
          lings: this.props.lings,
          filterLang: "Show All"
      }
  }

  filterHandler = (e) => {
    this.setState({filterLang: e.target.value})
  }

  render() {
    return (
      <>
          <Card className="mb-3">
            <CardHeader className="text-right">
              Filter by language 👇
              <Input 
                type="select"
                style={{width: "30%"}}
                className="ml-auto mb-2 mt-1"
                placeholder="Filter Lings by language..."
                onChange={this.filterHandler.bind(this)}
                >
                  <option>Show All</option>
                  <option>Scottish Gaelic</option>
                  <option>Spanish</option>
                  <option>German</option>
                  <option>Portuguese</option>
              </Input>

              
            </CardHeader>
          </Card>
          <Ling lings={this.state.lings} lang={this.state.filterLang} addLing={this.props.addLing} />
      </>
    );
  }
}


function mapStateToProps(state) {
  return {
    lings: state.lings,
  };
}

export default connect(mapStateToProps)(Timeline);