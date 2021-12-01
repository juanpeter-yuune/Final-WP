import React from 'react';
import { Link } from 'react-router-dom';

const SchoolDetails = (props) => {
  

  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  
                </div>
                <div className="col-md-6">
                    <div className="small mb-1">Release Date: </div>
                    
                    <div className="fs-5 mb-5">
                          <span>Status: {props.school.status}</span>
                    </div>
                    <p className="lead">{props.school.overview}</p>
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default SchoolDetails;
