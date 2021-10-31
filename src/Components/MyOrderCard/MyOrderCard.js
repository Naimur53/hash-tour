import React from 'react';
import './MyOrderCard.css'
const MyOrderCard = props => {
    const { img, date, itemName, address, _id, status } = props.info;
    console.log(props.info);
    return (
        <div className="card bg-transparent text-white mb-3" >
            <div className="card-details-wrapper">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img-fluid h-100 rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title text-capitalize fw-light fs-4">{itemName}</h5>
                            <p className="card-text text-capitalize fw-lighter fs-5"> Address: {address}</p>
                            <p className="card-text text-capitalize fw-lighter fs-5">Date: {date}</p>
                            <p className="card-text text-capitalize fw-light fs-5">Status:<span className={status === 'Pending' ? 'text-warning fw-bold' : 'text-success fw-bold'}> {status}</span></p>
                            <button onClick={() => props.handleDelete(_id)} className="btn text-danger border border-danger w-100">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyOrderCard;