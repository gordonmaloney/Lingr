import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Header() {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <center>
                        <h1>Lingr</h1>
                        <h3><u>microblogging for language learners</u></h3>
                    </center>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export default Header