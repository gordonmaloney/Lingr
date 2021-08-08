import React from 'react';
import {Form, FormGroup, Label, Button, Input, Container, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <center>
                <h5 className="mt-5 mb-5">Lingr is a microblogging site for language learners.</h5>
            </center>
            <p>Sometimes you don't want to write out a whole long essay, but you still want to practice. Maybe you've just learned a new grammatical structure that you want to practice. Then this is for you.</p>
            <p>You can share short messages, and friendly native speakers can correct your mistakes - but you can even say how strict you'd like them to be, so don't worry about people jumping down your throat if you just want a bit of fun.</p>
            <p>Lingr is built using React, Redux and Reactstrap. If you have ideas for new features or would like to help with development, <i>by all means</i> be in touch!</p>

        </>
    )
}


export default About