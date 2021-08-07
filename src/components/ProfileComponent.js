import React from 'react';
import {Form, FormGroup, Label, Button, Input, Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <>
            <Form>
                <FormGroup>
                    <Container>
                        <Row>
                            <Col sm="2">
                                <Label>Name:</Label>
                            </Col>
                            <Col>
                              <Input type="text" />
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col sm="2">
                                <Label>Icon:</Label>
                            </Col>
                            <Col>
                              <Input type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label for="correction-pref">Correction Preference:</Label>
                                <Input type="select" name="correction-pref" id="correction-pref">
                                    <option>...</option>
                                    <option>Strict - please correct any errors</option>
                                    <option>Relaxed - only correct more significant mistakes</option>
                                    <option>Chill - please don't correct me</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label>Languages:</Label>
                                <Input type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/">
                                    <center>
                                        <Button className="mt-3" color="primary" outline>Save</Button>
                                    </center>
                                </Link> 
                            </Col>
                        </Row>
                    </Container>

                </FormGroup>
            </Form>
        </>
    )
}


export default Profile