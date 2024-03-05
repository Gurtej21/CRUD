import React, { useState } from 'react';
import { Button,Form } from 'semantic-ui-react'
import axios from "axios";


export default function Create() {
    
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    
    console.log(FirstName);
    console.log(LastName);
    const sendDataToAPI = () => {
    axios.post("https://65e3361e88c4088649f57e17.mockapi.io/crud", {
        FirstName,
        LastName
    })

    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                     <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                
                <Button type='submit' onClick={sendDataToAPI} >Submit</Button>
            </Form>
        </div>
    )
}