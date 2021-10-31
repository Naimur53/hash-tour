import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className='bg-dark'>
                <div className='container'>
                    <div className="row py-5">
                        <div className="col-md-6">
                            <h2 className='text-warning'>Hash Tour</h2>
                        </div>
                        <div className="col-md-3 text-white">
                            <ul className='list-unstyled' >
                                <li className='mb-2'>About Tour</li>
                                <li className='mb-2'>Read our blog </li>
                                <li className='mb-2'>Sign up to see details</li>
                                <li className='mb-2'>Add your info</li>
                            </ul>
                        </div>
                        <div className="col-md-3  text-white">
                            <ul className='list-unstyled'>
                                <li className='mb-2'>Get help</li>
                                <li className='mb-2'>Read FAQs</li>
                                <li className='mb-2'>View all cities</li>
                                <li className='mb-2'>Tour center near me</li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-white d-flex justify-content-between pt-4'>
                        <small>Copyright &#169; 2021 Hash tour</small>
                        <ul className='list-unstyled list-inline'>
                            <li className="list-inline-item mx-3">Privacy Policy</li>
                            <li className="list-inline-item mx-3">Terms of Use</li>
                            <li className="list-inline-item mx-3">Pricing</li>

                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;