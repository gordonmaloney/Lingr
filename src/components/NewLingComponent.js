import React, { Component } from "react";
import { Label, Input, Row, Button, ModalBody } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

class NewLingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newLingBody: "",
      newLingLang: "",
      newLingCorPref: "",
      touched: {
        newLingBody: false,
        newLingLang: false,
        newLingCorPref: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }

  render() {
    return (
      <React.Fragment>
        <ModalBody>
          <div className="container">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="newLingLang">Type your ling here</Label>

                <Control.textarea
                  model=".newLingBody"
                  id="newLingBody"
                  name="newLingBody"
                  placeholder="Type your ling here..."
                  className="mb-3 form-control"
                  rows="3"
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="newLingLang">Select your language</Label>
                <br />
                <Control.select
                  model=".newLingLang"
                  id="newLingLang"
                  name="newLingLang"
                  type="select"
                  className="mb-3 form-control"
                >
                  <option>...</option>
                  <option>Scottish Gaelic</option>
                  <option>Spanish</option>
                  <option>German</option>
                  <option>Portuguese</option>
                </Control.select>
              </Row>
              <Row className="form-group">
                <Label htmlFor="newLingCorPref">Correction Preference</Label>
                <br />
                <Control.select
                  type="select"
                  name="newLingCorPref"
                  id="newLingCorPref"
                  model=".newLingCorPref"
                  className="mb-3 form-control"
                >
                  <option>...</option>
                  <option>Strict - please correct any errors</option>
                  <option>
                    Relaxed - only correct more significant mistakes
                  </option>
                  <option>Chill - please don\'t correct me</option>
                </Control.select>
              </Row>

              <Row className="d-flex flex-row-reverse border-top pt-3">
                <Button color="secondary" onClick={this.props.close} outline>
                  Cancel
                </Button>

                <Button
                  type="submit"
                  color="primary"
                  outline
                  onClick={this.props.close}
                  className="mx-2"
                >
                  Post Ling
                </Button>
              </Row>
            </LocalForm>
          </div>
        </ModalBody>
      </React.Fragment>
    );
  }
}

export default NewLingComponent;
