import React from 'react';
import {Form, Button} from 'react-bootstrap';


function Profile(props) {
    return <div>
        <h1>Profile Page</h1>
        <Form>
            <Form.Label htmlFor="first name">First Name</Form.Label>
            <Form.Control id="first name"></Form.Control>
            <Form.Label htmlFor="last name">Last Name</Form.Label>
            <Form.Control id="last name"></Form.Control>
            <Form.Label htmlFor="age">Age</Form.Label>
            <Form.Control id="age"></Form.Control>
            <Form.Label htmlFor="gender">Gender</Form.Label>
            <Form.Select id="gender">
                <option></option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-Binary</option>
            </Form.Select>
            <Form.Label htmlFor="university">University</Form.Label>
            <Form.Control id="university"></Form.Control>
        </Form>
        <Button>Update Profile</Button>
    </div>
}

export default Profile;