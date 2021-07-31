import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

function Ling(props) {
    const LingsList = props.lings.map(ling => {
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
                    <a href="#">{ling.lingReplies} Replies</a> |
                    <a href="#">{ling.lingCorrections} Corrections</a> |
                    <a href="#">{ling.lingShares} Shares</a>
                    <span className="ling-date">
                        {ling.lingDate}
                    </span>
                </CardFooter>
                <CardBody className="ling-reply">
                    <input className="ling-reply" type="text" placeholder="Type your reply or correction here..." />
                </CardBody>
            </Card>
        </div>
        );    
    })

        return (
            <div>
                {LingsList}
            </div>
        )
}


export default Ling;