import React from 'react';
import {Form, Button} from 'react-bootstrap';



function Profile(props) {
    return <div className="mx-3">
        <h1 className="text-center mt-3">Profile Page</h1>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="first name">First Name</Form.Label>
                <Form.Control id="first name"></Form.Control>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label htmlFor="last name">Last Name</Form.Label>
                <Form.Control id="last name"></Form.Control>
            </Form.Group>    
            <Form.Group className="mb-3">
                <Form.Label htmlFor="age">Age</Form.Label>
                <Form.Control id="age"></Form.Control>
            </Form.Group>  
            <Form.Group className="mb-3"> 
                <Form.Label htmlFor="gender">Gender</Form.Label>
                <Form.Select id="gender">
                <option></option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-Binary</option>
            </Form.Select>
            </Form.Group> 
            <Form.Group className="mb-3">     
                <Form.Label htmlFor="university">University</Form.Label>
                <Form.Control id="university"></Form.Control>
            </Form.Group>   
            <Form.Group className="mb-3">  
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id="email"/>
            </Form.Group> 
        </Form>
        <Button variant="primary" type="submit">
            Update Profile
        </Button>
    </div>
}

export default Profile;