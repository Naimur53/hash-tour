import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className='text-white '>
                            <h1 className='fw-light display-2'>The best site for Tourist</h1>
                            <p className='fs-3 fw-lighter mt-4'>We have almost 5000 visitor and 5 Start rating on our site  </p>
                            <small className='fw-light fs-5'>First take service than believe</small>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/PmJMyPW/5495-removebg-preview.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;