import React from "react";
import { Button } from 'reactstrap';
import NewLingModal from './NewLingModal';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogInOutClick = this.handleLogInOutClick.bind(this);
    this.state = {isLoggedIn: true};
  }

  handleLogInOutClick() {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

render() {
  const isLoggedIn = this.state.isLoggedIn;
  if (isLoggedIn === true) {
    return (
      <>
            <Link to="/">
              <NewLingModal />
            </Link>
            <Link to="/notifications"> 
              <Button color="primary" className="menu-btn">Notifications</Button>
            </Link>
            <br />
            <Link to="/profile"> 
              <Button color="primary" className="menu-btn">Profile</Button>
            </Link>
            <br />
            <Link to="/">
              <Button color="primary" className="menu-btn" onClick={this.handleLogInOutClick}>Log-out</Button>
            </Link>
      </>
    );} else {
      return (
        <>
          <Button color="primary" className="menu-btn" onClick={this.handleLogInOutClick}>Log-in</Button>
        </>
      )
    }
  }
}

export default Menu;
