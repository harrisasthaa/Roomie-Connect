import React from 'react';
import {useState, useRef} from 'react';
import {Form, Button} from 'react-bootstrap';


function Profile(props) {


    const universities = ['Harvard University',    'Massachusetts Institute of Technology (MIT)',    'Stanford University',    'California Institute of Technology (Caltech)',    'University of Cambridge',    'University of Oxford',    'ETH Zurich - Swiss Federal Institute of Technology',    'University of Chicago',    'Princeton University',    'Yale University',    'University of California, Berkeley (UCB)',    'Columbia University',    'University of California, Los Angeles (UCLA)',    'University of Michigan-Ann Arbor',    'University of Pennsylvania',    'Cornell University',    'Duke University',    'University of Toronto',    'University of Wisconsin-Madison',    'University of Tokyo'];
    const majors = [    'Accounting',    'Agricultural Business Management',    'Animal Sciences',    'Applied Mathematics',    'Art',    'Astronomy',    'Biochemistry',    'Biomedical Engineering',    'Chemical Engineering',    'Chemistry',    'Civil Engineering',    'Computer Engineering',    'Computer Science',    'Dance',    'Economics',    'Electrical Engineering',    'Elementary Education',    'English',    'Environmental Sciences',    'Finance',    'Genetics',    'Geography',    'Geology',    'History',    
                     'Industrial and Systems Engineering',    'International Studies',    'Journalism and Mass Communication',    'Kinesiology',    'Linguistics',    'Management and Human Resources',    'Marketing',    'Materials Science and Engineering',    'Mathematics',    'Mechanical Engineering',    'Medical Microbiology and Immunology',    'Music',    'Neurobiology',    'Nursing',    'Nutritional Sciences',    'Philosophy',    'Physics',    'Political Science',    'Psychology',    'Real Estate and Urban Land Economics',    'Sociology',    'Spanish',    'Statistics',    'Theatre and Drama',    'Zoology'];

    const locations = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA', 'Austin, TX', 'Jacksonville, FL', 'Fort Worth, TX', 'Columbus, OH', 'San Francisco, CA', 'Charlotte, NC', 'Indianapolis, IN', 'Seattle, WA', 'Denver, CO', 'Washington, D.C., DC'];
    const interests = [    'Reading',    'Writing',    'Hiking',    'Cooking',    'Traveling',    'Photography',    'Playing musical instruments',    'Watching movies',    'Playing sports',    'Gardening',    'Volunteering',    'Learning new languages',    'Painting',    'Yoga',    'Mediation',    'Dancing',    'Singing',    'Sculpting',    'Playing board games',    'Programming',    'Listening to music',    'Collecting stamps',    'Collecting coins',    'Fishing',    'Horseback riding']
 

    const firstName = useRef();
    const lastName = useRef();
    const age = useRef();
    const gender = useRef();
    const university = useRef();
    const email = useRef();
    const aboutMe = useRef();
    const interest1 = useRef();
    const interest2 = useRef();
    const interest3 = useRef();
    const location = useRef();
    const major = useRef();
    const friendship = useRef();
    const genderPref = useRef();
    const quiet = useRef();
    const quietPref = useRef();
    const phone = useRef();
    const priceLower = useRef();
    const priceUpper = useRef();
    const fullTime = useRef();

    const updateUserData = () => {
        if(!firstName.current.value || !lastName.current.value || !age.current.value || 
           !gender.current.value || !university.current.value || !email.current.value || !aboutMe.current.value
           || !interest1.current.value || !interest2.current.value || !interest3.current.value
            || !location.current.value || !major.current.value || !friendship.current.value
            || !genderPref.current.value || !quiet.current.value || !quietPref.current.value || !phone.current.value){
            alert("Please fill out all fields");
        }
        else{
            
            fetch('http://127.0.0.1:5000/createUser', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Request-Method": '*'
            },
            body: JSON.stringify({
                "city_state" : location.current.value,
                "gender" : ['Male', 'Female', 'Non-Binary', 'Other'].indexOf(gender.current.value),
                "gender_p" : ['Male', 'Female', 'Any'].indexOf(genderPref.current.value),
                "interest1" : interest1.current.value,
                "interest2" : interest2.current.value,
                "interest3" : interest3.current.value,
                "major" : major.current.value,
                "friend" : ['Unimportant', 'Important'].indexOf(friendship.current.value),
                "price_lower": parseInt(priceLower.current.value),
                "price_upper" : parseInt(priceUpper.current.value),
                "quiet" : ['Quiet', 'Loud'].indexOf(quiet.current.value),
                "quiet_p" : ['Quiet', 'Loud'].indexOf(quietPref.current.value),
                "first_name" : firstName.current.value,
                "last_name" : lastName.current.value,
                "phone" : phone.current.value,
                "age" : age.current.value,
                "university" : university.current.value,
                "email" : email.current.value,
                "about_me" : aboutMe.current.value,
                "full_time" : ["Internship", "Full-Time"].indexOf(fullTime.current.value)
            })
            }).then(resp => resp.json())
            .then(resp => {
                if(resp.status !== 200){
                    alert("Update failed");
                }
            });
        }
    }

    return <div className="mx-3">
        <h1 className="text-center my-4">Profile</h1>
        <Form className = "col-md-6 offset-md-3">
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
                <Form.Select id="university" ref={university}>
                    <option></option>
                    {universities.map((uni) => <option key={uni}>{uni}</option>)}
                </Form.Select>
            </Form.Group>   
            <Form.Group className="mb-3">  
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" id="email" ref={email}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="about me">About Me</Form.Label>
                <Form.Control id="about me" ref={aboutMe}></Form.Control>
            </Form.Group> 
               <Form.Group className="mb-3">
                <Form.Label htmlFor="interest1">Interest 1</Form.Label>
                <Form.Select id="interest1" ref={interest1}>
                    <option></option>
                    {interests.map((int) => <option key={int}>{int}</option>)}
                </Form.Select>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label htmlFor="interest2">Interest 2</Form.Label>
                <Form.Select id="interest2" ref={interest2}>
                    <option></option>
                    {interests.map((int) => <option key={int}>{int}</option>)}
                </Form.Select>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label htmlFor="interest3">Interest 3</Form.Label>
                <Form.Select id="interest3" ref={interest3}>
                    <option></option>
                    {interests.map((int) => <option key={int}>{int}</option>)}
                </Form.Select>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label htmlFor="location">Location</Form.Label>
                <Form.Select id="location" ref={location}>
                    <option></option>
                    {locations.map((loc) => <option key={loc}>{loc}</option>)}
                </Form.Select>
            </Form.Group> 
            <Form.Group className="mb-3">     
                <Form.Label htmlFor="major">Major</Form.Label>
                <Form.Select id="major" ref={major}>
                    <option></option>
                    {majors.map((maj) => <option key={maj}>{maj}</option>)}
                </Form.Select>
            </Form.Group>   
            <Form.Group className="mb-3">
                <Form.Label htmlFor="friendship">Importance of Roommate Friendship</Form.Label>
                <Form.Select id="friendship" ref={friendship}>
                <option></option>
                <option>Important</option>
                <option>Unimportant</option>
                </Form.Select>
            </Form.Group> 
               <Form.Group className="mb-3">
                <Form.Label htmlFor="gender pref">Roommate Gender Preference</Form.Label>
                <Form.Select id="gender pref" ref={genderPref}>
                <option></option>
                <option>Male</option>
                <option>Female</option>
                <option>Any</option>
                </Form.Select>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label htmlFor="quiet">Describe Your Noise Level</Form.Label>
                <Form.Select id="quiet" ref={quiet}>
                <option></option>
                <option>Loud</option>
                <option>Quiet</option>
                </Form.Select>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label htmlFor="quietPref">Describe Your Ideal Roomate Noise Level</Form.Label>
                <Form.Select id="quietPref" ref={quietPref}>
                <option></option>
                <option>Loud</option>
                <option>Quiet</option>
                </Form.Select>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label htmlFor="phone">Phone Number</Form.Label>
                <Form.Control id="phone" ref={phone}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="priceLower">Lower Price Range</Form.Label>
                <Form.Control id="priceLower" ref={priceLower}></Form.Control>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label htmlFor="priceUpper">Upper Price Range</Form.Label>
                <Form.Control id="priceUpper" ref={priceUpper}></Form.Control>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label htmlFor="fullTime">Time of Stay</Form.Label>
                <Form.Select id="fullTime" ref={fullTime}>
                <option></option>
                <option>Internship</option>
                <option>Full-Time</option>
                </Form.Select>
            </Form.Group>
        </Form>
        <Button className="col-md-2 offset-md-5 mb-3" variant="primary" type="submit" onClick={updateUserData}>
            Update Profile
        </Button>
    </div>
}

export default Profile;