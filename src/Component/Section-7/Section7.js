import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

const Section7 = () => {
  return (
    <div className='sec-7 py-5 my-5'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-4'>
          <h4 className='text-danger'>Location</h4>
          <h2 className='fst-italic'><span className='text-primary'>INNAM</span> INFO TECH PVT LTD</h2>
          <p>IT Infrastructure & Software Development</p>
          <div className='d-flex'>
            <div className='icon pe-3 text-danger'>
              <IoLocationOutline />
            </div>
              <div className='d-block'>
              <p className='my-0'>City Center, No:66, Thrumalai pillai</p>
              <p className='my-0'>Road, T.Nagar, Chennai</p>
              <p className='mt-0'><span className='text-dark fw-bold'>Call:</span> +91-8637675438</p>
              </div>
          </div>
          <div style={{ overflow: 'hidden', resize: 'none', maxWidth: '100%', width: '400px', height: '300px' }}>
            <div id="g-mapdisplay" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
              <iframe
                style={{ height: '100%', width: '100%', border: 0 }}
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=chrompet&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className="card">
            <div className="card-header">
              <h4 className='text-center'>Enquiry Now</h4>
            </div>
            <div className="card-body">
              <div className="form-group pb-3">
                <label htmlFor="name" className='pb-2'>Full Name <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your full name" required />
              </div>
              <div className="form-group pb-3">
                <label htmlFor="phone" className='pb-2'>Mobile no. <span className="text-muted">(Optional)</span></label>
                <input type="number" className="form-control" id="phone" placeholder="+91 8564723156" />
              </div>
              <div className="form-group pb-3">
                <label htmlFor="email" className='pb-2'>Email <span className="text-danger">*</span></label>
                <input type="email" name="email" id="email" className="form-control" placeholder="you@gmail.com" aria-describedby="emailHelp" required />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group pb-3">
                <label htmlFor="message" className='pb-2'>Message</label>
                <textarea name="message" id="message" rows="3" placeholder="Enter any message here..." className="form-control"></textarea>
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary btn-block" type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
