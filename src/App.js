import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Menu from './components/MenuComponent';
import Timeline from './components/TimelineComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Row>
          <Col sm="3">
            <Menu />
          </Col>
          <Col sm="9">
            <Timeline />
          </Col>
        </Row>     
        <Footer />
      </Container>
    </>
  );
}

export default App;
