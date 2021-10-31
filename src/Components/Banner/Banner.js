import React from 'react';
import './Banner.css';
import video from './media/video1.mp4'
const Banner = () => {
    return (
        <div>
            <section className='banner-container'>
                <video src={video} autoPlay muted loop></video>
                <h2>Its Hash<br />  <span> Tour</span> <small className='fs-3 mt-4'>The best site for tour checkOut <a className='text-warning' href="#service">our service</a></small> </h2>
            </section>
        </div>
    );
};

export default Banner;