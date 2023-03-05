import React from 'react';
import { Row, Badge } from 'react-bootstrap';

export default function MatchesCard(props) {

     function mapGender(gender) {
          if (gender === 3) return "Other";
          else if (gender === 2) return "Non-binary";
          else if (gender === 1) return "Female";
          else return "Male";
     }

     return (
          <div id="outerCard" className="card mx-3">
               <div className="row g-0 m-2">
                    <div className="square col-md-3">
                         <Row className="m-4">
                              <img className="img-fluid rounded-circle" alt="Profile" src={props.img_link}/>
                         </Row>
                         <Row>
                              <div className="text-center">
                                <h5>
                                    Contact Info: <Badge bg="secondary">({props.phone.toString().slice(0,3)}) {props.phone.toString().slice(3,6)}-{props.phone.toString().slice(6)}</Badge>
                                </h5>
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
                         <p>{props.about_me}</p>
                    </div>
               </div>
          </div>

     )
}