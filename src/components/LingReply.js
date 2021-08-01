import React, {Component} from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'; 
import { LINGS } from './Lings';
import { Link } from 'react-router-dom'

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
                    <CardFooter className="ling-reply">
                        <input className="ling-reply" type="text" placeholder="Type your reply or correction here..." />
                    
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