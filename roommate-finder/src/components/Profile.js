import React from 'react';
import {useState, useRef} from 'react';
import {Form, Button} from 'react-bootstrap';


function Profile(props) {

    //const [userUpdate, setUserUpdate] = useState({});

    const firstName = useRef();
    const lastName = useRef();
    const age = useRef();
    const gender = useRef();
    const university = useRef();
    const email = useRef();

    const updateUserData = () => {
        if(!firstName.current.value || !lastName.current.value || !age.current.value || 
           !gender.current.value || !university.current.value || !email.current.value){
            alert("Please fill out all fields");
        }
        else{
            //Post
        }
    }

    return <div className="mx-3">
        <h1 className="text-center mt-3">Profile Page</h1>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="first name">First Name</Form.Label>
                <Form.Control id="first name" ref={firstName}></Form.Control>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label htmlFor="last name">Last Name</Form.Label>
                <Form.Control id="last name" ref={lastName}></Form.Control>
            </Form.Group>    
            <Form.Group className="mb-3">
                <Form.Label htmlFor="age">Age</Form.Label>
                <Form.Control id="age" ref={age}></Form.Control>
            </Form.Group>  
            <Form.Group className="mb-3"> 
                <Form.Label htmlFor="gender">Gender</Form.Label>
                <Form.Select id="gender" ref={gender}>
                <option></option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-Binary</option>
                <option>Other</option>
            </Form.Select>
            </Form.Group> 
            <Form.Group className="mb-3">     
                <Form.Label htmlFor="university">University</Form.Label>
                <Form.Control id="university" ref={university}></Form.Control>
            </Form.Group>   
            <Form.Group className="mb-3">  
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id="email" ref={email}/>
            </Form.Group> 
        </Form>
        <Button variant="primary" type="submit" onClick={updateUserData}>
            Update Profile
        </Button>
    </div>
}

export default Profile;