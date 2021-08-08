import React from "react";
import { Button, Row, Col } from "reactstrap";
import NewLingModal from "./NewLingModal";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogInOutClick = this.handleLogInOutClick.bind(this);
    this.state = { isLoggedIn: true };
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
                <NewLingModal />
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
          <Col xs="2" sm="12">
            <Button
              color="primary"
              className="menu-btn"
              outline
              onClick={this.handleLogInOutClick}
            >
              ▶️<span className="d-none d-sm-inline"> Log-in</span>
            </Button>
          </Col>
        </>
      );
    }
  }
}

export default Menu;
