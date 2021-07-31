import React from "react";
import { Button } from 'reactstrap';

function Menu() {
let userLoggedIn = true;

  if (userLoggedIn) {
  return (
    <>
          <Button color="primary" className="menu-btn">New Ling</Button>
          <br />
          <Button color="primary" className="menu-btn">Notifications</Button>
          <br />
          <Button color="primary" className="menu-btn">Profile</Button>
          <br />
          <Button color="primary" className="menu-btn">Log-out</Button>
    </>
  );} else {
    return (
      <>
        <Button color="primary" className="menu-btn">Log-in</Button>
      </>
    )
  }
}

export default Menu;
