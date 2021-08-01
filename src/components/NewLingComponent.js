import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function NewLingComponent() {
    return (
        <Form>
            <FormGroup>
                <Label for="ling-text">Ling Text</Label>
                <Input type="textarea" placeholder="Type your ling here..."></Input>
                <Label for="ling-lang-select">Select your language</Label>
                <Input type="text" placeholder="E.g. German, Spanish, French..."></Input>
                <Label for="correction-pref">Correction Preference</Label>
                <Input type="select" name="correction-pref" id="correction-pref">
                    <option>...</option>
                    <option>Strict - please correct any errors</option>
                    <option>Relaxed - only correct more significant mistakes</option>
                    <option>Chill - please don't correct me</option>
                </Input>
            </FormGroup>
        </Form>


    )
}


export default NewLingComponent;