import React from 'react';
import { Col, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleCard.css'

const SingleCard = props => {
    const { name, img, des, price, _id } = props.info;
    return (
        <Col>
            <div className="single-card-wrapper bg-transparent border-0 text-white card h-100">
                <div className='img-container'>
                    <img src={img} className="card-img-top" alt="img" />
                </div>
                <div className="card-content d-flex flex-column pt-3  justify-content-between p-0 card-body">
                    <div className="card-text-container px-2">
                        <h5 className="card-title fw-light fs-4 text-capitalize">{name}</h5>
                        <p className="card-text fw-lighter fs-5">{des?.slice(0, 60)}</p>
                        <p className="card-text fw-lighter fs-3 mb-3"><span className='fs-2 '>$</span>{price}</p>
                    </div>
                    <Nav.Link as={Link} className='card-btn btn btn-warning w-100 text-secondary' to={`/placeOrder/${_id}`}><i className="fas fa-truck"></i> Order</Nav.Link>
                </div>
            </div>
        </Col>
    );
};

export default SingleCard;