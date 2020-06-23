import React, {useState, useEffect} from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import {Link, Route} from "react-router-dom"


const Client = () => {
    const [post, setPost] = useState()
    const [clientState, setClientState] = useState({
        name: '',
        password: '',
      })

      

      const formSchema = Yup.object().shape({
        name: Yup.string().min(2, "Requires at least 2 characters"),
        password: Yup.string().min(8, "Requires a minimum of 8 characters")
    })

    
    const [errors, setErrors] = useState({
        name: '',
        password: ''
    });
    
   

   


    const validateChange = (e) => {
        if(e.target.name === 'name' || e.target.name === 'password'){
            Yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(isValid => {
                setErrors({...errors, [e.target.name]: ""})
            })
            .catch(err => {
                console.log(err.errors)
                setErrors({...errors, [e.target.name]:err.errors[0]})
                
            })
        }

    }

    const handleChange = e => {
        e.persist()
        setClientState({...clientState, [e.target.name]: e.target.value})
        validateChange(e)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('https://reqres.in/api/users', clientState)
        .then(res => {
            console.log(res.data)
            setPost(res.data);
            setClientState({
                name: '',
                password: ''
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class='name'>
                <label htmlFor="name">
                    User Name:
                    <input type='text' name='name' value={clientState.name} onChange={handleChange} />
                    {errors.name.length > 2 ? <p className="error">{errors.name}</p>: null}
                </label>
            </div>
            <div className="password">
                <label htmlFor="password">
                    Password:
                    <input type='text' value={clientState.password} name='password' onChange={handleChange} />
                    {errors.password.length > 2 ? <p className="error">{errors.password}</p>: null}
                </label>
            </div>
            
            <div className="submit">
                <input data-cy="submit" type='submit' />
            </div>
        </form>
    )
}

export default Client;