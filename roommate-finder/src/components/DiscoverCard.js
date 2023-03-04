import React from 'react';

export default function DiscoverCard(props) {

     let imageURL; 

     return (
          <div className="card mb-3">
               <div className="row g-0">
                    <div className="col-md-4">
                          <img src="" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                         <div className="card-body">
                              <h5 className="card-title">{props.name}</h5>
                              <p className="card-text"></p>
                              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                         </div>
                    </div>
               </div>
          </div>

     )
}