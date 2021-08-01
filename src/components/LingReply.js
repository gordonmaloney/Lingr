import React, {Component, useState} from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'; 
import { LINGS } from './Lings';
import { Link } from 'react-router-dom';



function ReplyCorrect(lingCorrect) {
    console.log(lingCorrect)
    const [reply, correct] = useState("reply");

    const toggle = () => {
        if (reply === "reply") {
            return correct("correct")
        }
        correct ("reply")
    }

    return (
        <>
        <div className={reply === "reply" ? "show" : "hide"}>
        <Button onClick={() => toggle()}>Correct</Button>

            <input className="ling-reply" type="text" placeholder="Type your reply here..." />
        </div>
        <div className={reply === "correct" ? "show" : "hide"}>
        <Button onClick={() => toggle()}>Reply</Button>

        <input className="ling-reply" type="text" placeholder={lingCorrect.content} />
        </div>
        </>
    )
}

class LingReply extends Component {

    render() {    
    const ling = LINGS[this.props.match.params.id]
        return (
            <div key={ling.id}>
                <Card className="ling mb-3">
                    <CardHeader>
                    <span className="ling-date">
                        {ling.lingLang}
                    </span>
                    <h3>{ling.userIcon} - {ling.userName}</h3>
                    </CardHeader>
                    <CardBody>
                        {ling.lingBody}
                    </CardBody>
                    <CardFooter>
                        <ReplyCorrect content={ling.lingBody}/>
                    <Link to="/">
                        <Button color="primary">Post</Button>
                    </Link>
                    </CardFooter>



                </Card>
            </div>
            );    
}
}
    
export default LingReply