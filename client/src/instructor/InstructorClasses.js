import axiosWithAuth from '../utils/axiosWithAuth';
import React, {useEffect, useState} from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import Axios from 'axios';
const InstructorClasses = ()=>{

    const initialItem ={
        name: '',
        location: '',
        type: '',
        intensityLevel: '',
        startTime:'',
        duration: '',
        maxClassSize: '',
        attendees:'',
    }


    const [classes, setClasses]= useState([]);
    const [newClass, setNewClass]= useState(initialItem);
    const [signout, setSignout]= useState(false);

    const {id}= useParams();
    const {push}= useHistory();


    useEffect(()=>{
            axiosWithAuth()
            .get("/classes")
            .then(res=>{
                console.log("InstructorClasses.js : ", res.data);
                setClasses(res.data)
            })
            .catch(err=> console.log("instructorClasses.js error: ", err))
    },[])

    const handleChange = e => {
        setNewClass({...newClass, [e.target.name]: e.target.value})
    }

    const addNewClass = e =>{
        e.preventDefault();
        axiosWithAuth()
            .post(`/instructors/id/classes`, newClass)
            .then(res=>{
                console.log('what is this inside: ',res )
                setNewClass(initialItem);
                setClasses(res.data)
            })
            .catch(err=> console.log('add new class error: ', err))
    }

    
    const signOut = ()=>{
        if (signout===false){
            return push('/InstructorLogin')
        }
        else{
            return console.log('you are still logged in')
        }
    }
    return(
        <div>
            <h1>Instructor classes: </h1>
            <button onClick={signOut}>Sign out</button>
           
            <form onSubmit={addNewClass}>
                <h4>Add New Class</h4>
                    <input 
                        type="text"
                        name="name"
                        placeholder="name"
                        value={newClass.name}
                        onChange={handleChange}
                    
                    />
                    <input 
                        type="text"
                        name="location"
                        placeholder="location"
                        onChange={handleChange}
                        value={newClass.location}
                    />
                    <input 
                        type="text"
                        name="type"
                        placeholder="type"
                        onChange={handleChange}
                        value={newClass.type}
                    />
                    <input 
                        type="text"
                        name="intensityLevel"
                        placeholder="intensityLevel"
                        onChange={handleChange}
                        value={newClass.intensityLevel}
                    />
                    <input 
                        type="text"
                        name="startTime"
                        placeholder="startTime"
                        onChange={handleChange}
                        value={newClass.startTime}
                    />
                    <input 
                        type="text"
                        name="duration"
                        placeholder="duration"
                        onChange={handleChange}
                        value={newClass.duration}
                    />
                    <input 
                        type="number"
                        name="maxClassSize"
                        placeholder="maxClassSize"
                        onChange={handleChange}
                        value={newClass.maxClassSize}
                    />
                    <input 
                        type="text"
                        name="attendees"
                        placeholder="attendees"
                        onChange={handleChange}
                        value={newClass.attendees}
                    />
                    <button>Add New Class</button>

            </form>

            {classes.map((item,key)=>(
                <div key={item.id}>
               <Card style={{ width: '18rem', margin:' 0 auto', background: 'rgba(97, 136, 207, 0.534)'}}>
               <Card.Body>
                   <Card.Title>Name: {item.name }</Card.Title>
                        <ListGroup> Location: {item.location}</ListGroup>
                        <ListGroup> Type: {item.type}</ListGroup>
                        <ListGroup> Intensity Level: {item.intensityLevel}</ListGroup>
                        <ListGroup> Start Time: {item.startTime}</ListGroup>
                        <ListGroup> Duration: {item.duration}</ListGroup>
                        <ListGroup> Max Class Size: {item.maxClassSize}</ListGroup>
                        <ListGroup> Attendees: {item.attendees}</ListGroup>
                        <Button>Click for more information</Button>
               </Card.Body>
           </Card>
           </div>
            ))}
        </div>
    )
}
export default InstructorClasses;