import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Top.css';
import { FaRegClock } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";

const Top = () => {
  return (
    <div className='container-fluid'>
      <div className='content_top'>
      <div className='row'>
        <div className='col-5 logo-top text-center'>
            <a href='#'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIzCwuOWdgHkFuq83JM4PcDzWp6mnNSGkGw&s' width={150} height={60}/>
            </a>
            <h5 className='text-primary fst-italic'>INFO TECH <span className='text-dark'>PVT LTD</span></h5>
        </div>
        <div className='col d-flex align-items-center'>
            <div className='icon-top pe-2'>
            <FaRegClock />
            </div>
            <div className='pt-4'>
                <h6 className='text-small'>Opening Hour</h6>
                <p className='text-small'>Mon-SAT, 9:00AM-7:00PM</p>
            </div>
        </div>
        <div className='col d-flex align-items-center'>
            <div className='icon-top pe-2'>
            <FiPhoneCall />
            </div>
            <div className='pt-4'>
                <h6 className='text-small'>Call us</h6>
                <p className='text-small'>+91-8637675438</p>
            </div>
        </div>
        <div className='col d-flex align-items-center'>
            <div className='icon-top pe-2'>
            <MdMarkEmailUnread />
            </div>
            <div className='pt-4'>
                <h6 className='text-small'>Email Us</h6>
                <p className='text-small'>@saminnaminnovative.com</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Top;
