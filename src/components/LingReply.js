import React, {Component, useState} from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'; 
import { LINGS } from './Lings';
import { Link } from 'react-router-dom';



function ReplyCorrect(lingCorrect) {
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

        <input className="ling-reply my-2" type="text" placeholder="Type your reply here..." />
        </div>
        <div className={reply === "correct" ? "show" : "hide"}>
        <Button onClick={() => toggle()}>Reply</Button>

        <input className="ling-reply my-2" type="text" placeholder={lingCorrect.content} />
        </div>
        </>
    )
}


function Replies(props) {
    const LingReplies = props.ling.lingRepliesObj.map(reply => {
        return (  
            <div key={reply.replyId}>      
                <Card className="mb-3 reply-ling">
                    <CardBody>
                        <div className={reply.replyType} />
                        {reply.replyBody}
                    </CardBody>
                    <CardFooter className="text-right replySignOff">
                        {reply.replyAuthor}
                    </CardFooter>
                </Card>
            </div>
            )
    })
    return (
        <div>
           {LingReplies}
        </div>
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

                <Replies ling={ling}/>
            </div>
            );    
}
}
    
export default LingReply