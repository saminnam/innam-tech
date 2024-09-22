import React from 'react';
import './Section1.css';

const Section1 = () => {
  return (
    <>
    <div className='sec-1 relative' id='home'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://media.licdn.com/dms/image/D4D12AQFi6GSt7yZSJA/article-cover_image-shrink_600_2000/0/1702618998711?e=2147483647&v=beta&t=PMevJMa42l2oiJklC5Lfm2kEGsLe0rekDRUH9w1bIYM" className="d-block w-100" alt="First Slide" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img src="https://cdn.prod.website-files.com/5f2b1efb0f881760ffdc5c96/65293ad388e7f519253c23b6_cuu_mexygabriel_design_banner-scaled.jpg" className="d-block w-100" alt="Second Slide" />
            </div>
            <div className="carousel-item">
            <img src="https://iticollege.edu/wp-content/uploads/2022/07/Information-Technology-2-768x359.jpeg" className="d-block w-100" alt="Third Slide" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        <div className='sec-1-content text-center position'>
            <h4 className='text-white'>Technology Service</h4>
            <h1 className='text-dark fst-italic'>Digital Transformation</h1>
            <h3 className='text-white fs-4'>ARTIFICIAL INTELLIGENCE | DATA ANALYTICS I AUTOMATION | </h3>
            <h3 className='text-dark fst-italic fs-4'> MODERNIZATION</h3>
        </div>
    </div>
    </>
  );
}

export default Section1;
