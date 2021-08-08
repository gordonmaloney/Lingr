import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer border-top py-2 mt-3">
          <center>
            <h4>Lingr - microblogging for language learners</h4>
            <br />
            <h5>
            <Link to="/about">
About</Link> 
{" "}|{" "}
<a href="https://www.facebook.com/" target="_blank">Facebook</a>
{" "}|{" "} 
<a href="https://twitter.com/" target="_blank">Twitter</a></h5>
          </center>
        </div>
    )
}


export default Footer