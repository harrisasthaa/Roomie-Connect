import React from 'react';
import {Row, Button} from 'react-bootstrap';

export default function DiscoverCard(props) { 

     function mapGender(gender) {
          if (gender === 3) return "Other";
          else if (gender === 2) return "Non-binary";
          else if (gender === 1) return "Female";
          else return "Male";
     }

     function log() {
          console.log(props.img_link);
     }

     /*
     const updateMatches = () => {
          etch('http://127.0.0.1:5000/getMatches', {
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
                   "full_time" : ["Internship", "Full-Time"].indexOf(fullTime.current.value),
                   "img_link" : profPic.current.value
               })
               })
               .then(resp => {
                   setUserEmail(email.current.value);
               });
               */

     return (
          <div id="outerCard" className="card mx-3">
               <div className="row g-0 m-2">
                    <div className="square col-md-3">
                         <Row className="m-4">
                              <img className="img-fluid rounded-circle" alt="Profile" src={props.img_link}/>
                         </Row>
                         <Row>
                              <div className = "text-center">
                                   <Button variant="danger" className="col-md-6">Pass</Button>
                                   <Button variant="success" className="col-md-6">Bunk</Button>
                              </div>
                         </Row>
                    </div>
                    <div className="col-md-3">
                         <div className="card-body">
                              <h2 className="card-title">{props.first_name} {props.last_name}</h2>
                              <p className="card-text">Gender: {mapGender(props.gender)}</p>
                              <p className="card-text">Age: {props.age}</p>
                              <p className="card-text">School: {props.university}</p>
                              <p className="card-text">Location: {props.location}</p>                  
                              <p className="card-text"><small className="text-muted">${props.price_lower} - ${props.price_upper}</small></p>
                         </div>
                    </div>
                    <div className="vr my-5"></div>
                    <div className="card-body col-md-4 mx-3">
                         <h2 className="card-title text-center">About Me</h2>
                         <p>{props.description}</p>
                    </div>
               </div>
          </div>

     )
}