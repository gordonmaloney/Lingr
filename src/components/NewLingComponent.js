import React, { Component } from "react";
import { Label, Row, Button, ModalBody } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

import { connect } from "react-redux";
import { postLing } from "./actions/newLingAction";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddLing: (newLingBody, newLingLang, newLingCorPref, id) =>
      dispatch(postLing(newLingBody, newLingLang, newLingCorPref, id)),
  };
};

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
    this.props.close();
    this.props.handleAddLing(
      values.newLingBody,
      values.newLingLang,
      values.newLingCorPref,
      this.props.lings.lings.length
    );
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
                  validators={{
                    required,
                    minLength: minLength(10),
                    maxLength: maxLength(250),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".newLingBody"
                  show="touched"
                  component="div"
                  messages={{
                    required: "",
                    minLength: "Must be at least 10 characters",
                    maxLength: "Must be 250 characters or less",
                  }}
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
                  validators={{
                    required,
                  }}
                >
                  <option>...</option>
                  <option>Scottish Gaelic</option>
                  <option>Spanish</option>
                  <option>German</option>
                  <option>Portuguese</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".newLingLang"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Select a language",
                  }}
                />
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
                  validators={{
                    required,
                  }}
                >
                  <option>...</option>
                  <option>Strict - please correct any errors</option>
                  <option>
                    Relaxed - only correct more significant mistakes
                  </option>
                  <option>Chill - please don't correct me</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".newLingCorPref"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Select your correction preference",
                  }}
                />
              </Row>

              <Row className="d-flex flex-row-reverse border-top pt-3">
                <Button color="secondary" onClick={this.props.close} outline>
                  Cancel
                </Button>

                <Button type="submit" color="primary" outline className="mx-2">
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    lings: state.lings,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLingComponent);
