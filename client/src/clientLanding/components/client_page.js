import {Link, Route} from "react-router-dom"
import React from 'react'
import ClientSignUp from '../../ClientSignUp/signup'
import ClientLandingPage from "../client_landing"

const ClientPage = () => {
   
    return (
        <body>
            <div className="header">
                <div className='title'>Anywhere Fitness</div>
                <div className='nav'>
                    <ul>Help</ul>
                    <ul>About</ul>
                </div>
            </div>  
            <div className="greet">Greeting</div>
            <div className="info">
                <h1>Browse classes</h1>
                <p>Explanation/ about app</p>
            </div>
            <footer>
                <Link to ='/ClientSignUp'><button className='forClients'>For Clients</button></Link>
                <Route exact path = "/ClientSignUp">
                    <ClientSignUp/>
                </Route>
                <button className='forInstructors'>For Instructors</button>
            </footer>
        </body>     
        )
}

export default ClientPage;