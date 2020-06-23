import {Link, Route} from "react-router-dom"
import React from 'react'
import Client from './clientlogin'

const ClientSignUp = () => {
   
    return (
        <div>
            <div className="head">
                <div className='title'>Anywhere Fitness</div>
            </div>  
           <Client/>
        </div>     
        )
}

export default ClientSignUp;