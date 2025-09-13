import axios from 'axios'
import { useEffect, useState } from 'react';

function SignUpPage(){


    return(
        <div className="container">
            <h3>SignUp Page</h3>
            <form>
                <input type="text" placeholder="Enter Your Email" onChange={"#"}></input><br/>
                <input type="button" value="Enter Valid Email" className="btn btn-outline-primary"/>
            </form>
        </div>
    )
}
export default SignUpPage;