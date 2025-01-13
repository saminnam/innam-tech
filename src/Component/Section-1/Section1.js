import React from 'react';
import './Section1.css';

const Section1 = () => {
  return (
    <>
    <div className='sec-1 relative' id='home'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://img.freepik.com/premium-photo/automation-business-technology-management-workflow-diagram-with-gears-icons-with-flowchart-background_1085052-2737.jpg?semt=ais_hybrid" className="d-block w-100" alt="First Slide" />
            </div>
            {/* <div className="carousel-item" data-bs-interval="2000">
            <img src="https://cdn.prod.website-files.com/5f2b1efb0f881760ffdc5c96/65293ad388e7f519253c23b6_cuu_mexygabriel_design_banner-scaled.jpg" className="d-block w-100" alt="Second Slide" />
            </div>
            <div className="carousel-item">
            <img src="https://iticollege.edu/wp-content/uploads/2022/07/Information-Technology-2-768x359.jpeg" className="d-block w-100" alt="Third Slide" />
            </div> */}
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
            <h4 className='text-white fst-italic'>Digital Transformation</h4>
            <h3>ARTIFICIAL INTELLIGENCE | DATA ANALYTICS I AUTOMATION | </h3>
            <h3 className='text-dark fst-italic'> MODERNIZATION</h3>
        </div>
    </div>
    </>
  );
}

export default Section1;
