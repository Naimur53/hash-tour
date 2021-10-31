import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import SingleCard from '../SingleCard/SingleCard';
import Skeleton from '@mui/material/Skeleton';
import './Home.css'
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://bloodcurdling-skeleton-61887.herokuapp.com/services')
            .then(res => res.json())
            .then(result => setData(result))
    }, []);
    console.log(data);
    return (
        < >
            {/* banner  */}
            <Banner></Banner>
            {/* service container  */}
            <Container id='service' className='py-5'>
                <h1 className='text-center mb-5 display-4 fw-bold text-secondary'>Choose Your Tour</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        data.length === 0 && [...Array(9).keys()].map(num =>
                            <div key={num}>
                                <Skeleton variant="rectangular" className='mb-3' height={300} sx={{ bgcolor: 'grey.900' }} animation="wave" />
                            </div>)
                    }
                    {
                        data.map(singleData => <SingleCard key={singleData._id} info={singleData}></SingleCard>)
                    }
                </div>
            </Container>
            {/* bottom benner  */}
            <div className="bottom-banner">
                <div className=' container h-100'>
                    <h1 className='text-center mb-5 display-4 fw-bold text-secondary py-5'>Choose  Tour Type</h1>
                    <div className='row mt-auto'>
                        <div className="col h-100">
                            <div className="icon-container h-100 d-flex flex-column justify-content-center align-items-center">
                                <img className='img-fluid  ' src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-1-hover.png" alt="" />
                                <p className="text-white mt-2 fs-4 fw-light">Self-Guided</p>

                            </div>
                        </div>
                        <div className="col  h-100">
                            <div className="icon-container h-100 d-flex flex-column justify-content-center align-items-center">
                                <img className='img-fluid  ' src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-2-hover.png" alt="" />
                                <p className="text-white mt-2 fs-4 fw-light">Self-Guided</p>

                            </div>
                        </div>
                        <div className="col  h-100">
                            <div className="icon-container h-100 d-flex flex-column justify-content-center align-items-center">
                                <img className='img-fluid  ' src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-3-hover.png" alt="" />
                                <p className="text-white mt-2 fs-4 fw-light">Self-Guided</p>

                            </div>
                        </div>
                        <div className="col  h-100">
                            <div className="icon-container h-100 d-flex flex-column justify-content-center align-items-center">
                                <img className='img-fluid  ' src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-4-hover.png" alt="" />
                                <p className="text-white mt-2 fs-4 fw-light">Self-Guided</p>

                            </div>
                        </div>
                        <div className="col-md-2 h-100">
                            <div className="icon-container h-100 d-flex flex-column justify-content-center align-items-center">
                                <img className='img-fluid  ' src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/h1-custom-icon-5-hover.png" alt="" />
                                <p className="text-white mt-2 fs-4 fw-light">Self-Guided</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container fluid className='pb-5'>
                <h1 className='text-center mb-5 display-4 fw-bold text-secondary py-5'>Up Coming Service</h1>
                <div className="clip-container mx-auto">
                    <div className="clip clip1">
                        <div className="content text-warning fw-lighter py-4">
                            <h2 className='fw-light'>Best place to visit in winter</h2>
                            <p>Details coming...</p>
                        </div>
                    </div>
                    <div className="clip clip2">
                        <div className="content content text-warning fw-lighter py-4">
                            <h2 className='fw-light'>All about winter</h2>
                            <p>Details coming...</p>
                        </div>
                    </div>
                    <div className="clip clip3">
                        <div className="content content text-warning fw-lighter py-4">
                            <h2 className='fw-light'>Wait for the winter</h2>
                            <p>Details coming...</p>

                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;