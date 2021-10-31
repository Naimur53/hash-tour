import React from 'react';

const CardDetails = props => {
    const { name, img, price, des } = props.data;
    return (
        <div className="card h-100 card-details-wrapper text-white shadow mb-3" >
            <img src={img} className="img-fluid rounded-start" alt="img" />
            <div className="card-body">
                <h5 className="card-title fs-4 fw-light">{name}</h5>
                <p className="card-text fs-5 fw-lighter">{des}</p>
                <p className="card-text fs-4 fw-light">Price: ${price}</p>
            </div>
        </div>
    );
};

export default CardDetails;