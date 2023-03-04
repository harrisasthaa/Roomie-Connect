import React from 'react';

export default function DiscoverCard(props) {

     let imageURL; 

     return (
          <div className="card mb-3">
               <div className="row g-0">
                    <div className="col-md-4">
                          <img src="" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-4">
                         <div className="card-body">
                              <h2 className="card-title">{props.first_name} {props.last_name}</h2>
                              <p className="card-text">Gender: {props.gender}</p>
                              <p className="card-text">Age: {props.age}</p>
                              <p className="card-text">School: {props.school}</p>
                              <p className="card-text">Location: {props.city}, {props.state}</p>                  
                              <p className="card-text"><small className="text-muted">${props.min_price} - ${props.max_price}</small></p>
                              <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                   <button type="button" className="btn btn-danger">Pass</button>
                                   <button type="button" className="btn btn-success">Bunk</button>
                             </div>
                         </div>
                    </div>
               </div>
          </div>

     )
}