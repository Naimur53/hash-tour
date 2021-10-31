import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import SingleCard from '../SingleCard/SingleCard';
import Skeleton from '@mui/material/Skeleton';
import './Home.css'
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(result => setData(result))
    }, []);
    console.log(data);
    return (
        < >
            {/* banner  */}
            <Banner></Banner>

            {/* card container  */}

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
        </>
    );
};

export default Home;