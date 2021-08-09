import React from "react";
import { Button, Row, Col } from "reactstrap";
import NewLingModal from "./NewLingModal";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor(props, postLing) {
    super(props);
    this.handleLogInOutClick = this.handleLogInOutClick.bind(this);
    this.state = { isLoggedIn: true };
    this.postLing = postLing
  }

  handleLogInOutClick() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn === true) {
      return (
        <>
          <Row className="mb-3">
            <Col xs="4" sm="12">
              <Link to="/">
                <NewLingModal postLing={this.postLing} />
              </Link>
            </Col>
            <Col xs="2" sm="12">
              <Link to="/">
                <Button color="primary" className="menu-btn" outline>
                  📰<span className="d-none d-md-inline"> Timeline</span>
                </Button>
              </Link>
            </Col>
            <Col xs="2" sm="12">
              <Link to="/notifications">
                <Button color="primary" className="menu-btn" outline>
                  🔔<span className="d-none d-md-inline"> Notifications</span>
                </Button>
              </Link>
            </Col>
            <Col xs="2" sm="12">
              <Link to="/profile">
                <Button color="primary" className="menu-btn" outline>
                  🧍<span className="d-none d-md-inline"> Profile</span>
                </Button>
              </Link>
            </Col>
            <Col xs="2" sm="12">
              <Link to="/">
                <Button
                  color="primary"
                  className="menu-btn"
                  outline
                  onClick={this.handleLogInOutClick}
                >
                  ◀️<span className="d-none d-md-inline"> Log-out</span>
                </Button>
              </Link>
            </Col>
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Row className="mb-3">
            <Col xs="6" sm="12">
              <Link to="/about">
                <Button color="primary" className="menu-btn" outline>
                  ❓
                  <span className="d-inline d-sm-none d-md-inline"> About</span>
                </Button>
              </Link>
            </Col>
            <Col xs="6" sm="12">
              <Button
                color="primary"
                className="menu-btn"
                outline
                onClick={this.handleLogInOutClick}
              >
                ▶️
                <span className="d-inline d-sm-none d-md-inline"> Log-in</span>
              </Button>
            </Col>
          </Row>
        </>
      );
    }
  }
}

export default Menu;
