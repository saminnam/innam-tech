import React from 'react';
import './Section2.css';
import { MdOutlineShortText } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
  return (
    <div className='sec-2' id='gallery'>
      <div className='container'>
        <div className='topic d-flex align-items-center justify-content-center'>
          <div className='icon text-primary'>
            <MdOutlineShortText />
          </div>
          <h4 className='fs-5 text-primary m-0 mt-2' data-aos="fade-up">THE NEXT</h4>
          <div className='icon text-primary'>
            <MdOutlineShortText />
          </div>
        </div>
        <h2 className='fs-5 text-center'>
          We bring you powerful advantages to navigate your digital transformation
        </h2>
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-5 d-flex flex-column align-items-center'>
            <img
              src='https://wallpapers.com/images/hd/information-technology-3d-circuit-symbol-s7hpo0fa1vr1k5ru.jpg'
              className='img-fluid mb-3 rounded img'
              alt='Main Image'
               data-aos="fade-right"
            />
            <div className='row pt-3'>
              <div className='col-6 d-flex justify-content-center'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhzQnXSoKQ9tYe58yCn43vCj0DkYTt84eRg&s'
                  className='img-fluid rounded img'
                  alt='Sub Image 1'
                  data-aos="fade-left"
                />
              </div>
              <div className='col-6 d-flex justify-content-center'>
                <img
                  src='https://png.pngtree.com/thumb_back/fh260/background/20230722/pngtree-reflections-on-office-desk-close-up-of-computer-screen-and-supplies-image_3783611.jpg'
                  className='img-fluid rounded img'
                  alt='Sub Image 2'
                   data-aos="fade-up"
                />
              </div>
            </div>
          </div>
          <div className='col-md-3 d-flex justify-content-start'>
            <img
              src='https://preview.redd.it/got-myself-a-3rd-monitor-for-studying-coding-v0-yzc1l6fs76gd1.jpeg?width=640&crop=smart&auto=webp&s=2f821992ed8935426f713d40917b537d22347a70'
              width={270}
              height={480}
              className='img rounded'
              alt='Secondary Image'
               data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
