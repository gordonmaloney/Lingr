import React from "react";
import { Container, Row, Col } from "reactstrap";
import Menu from "./components/MenuComponent";
import Timeline from "./components/TimelineComponent";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Notifications from "./components/NotificationsComponent";
import Profile from "./components/ProfileComponent";
import LingReply from "./components/LingReply";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";



function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Row>
            <Col sm="2" md="3">
              <Menu />
            </Col>
            <Col sm="9">
              <Switch>
                <Route exact path="/">
                  <Timeline />
                </Route>
                <Route exact path="/notifications">
                  <Notifications />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
                <Route path="/reply/:id" component={LingReply} XXX />
                <Route path="/about">
                  {" "}
                  <About />{" "}
                </Route>
                <Route path="/">
                  <Timeline />
                </Route>
              </Switch>
            </Col>
          </Row>
          <Footer className="mt-5" />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
