import React from 'react';
import { Link } from 'react-router-dom';

const SchoolItem = (props) => {
    const imageUrl = " https://datasekolahapi.herokuapp.com/api/data";

    return(
    <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder"></h5>
                  
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" >View Details</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SchoolItem;
