import React from "react";
import './Footer.css';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer mt-5 pt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-3 mb-2">
          <h4 className="text-danger">Get In Touch</h4>
          <div className="d-flex">
            <div className="icon fs-6 text-light">
              <CiLocationOn />
            </div>
            <p className="text-light">
              City Centre, 66, 3rd Floor, Thirumalai Pillai Rd, T.Nagar, Chennai
            </p>
          </div>
          <div className="d-flex">
            <div className="icon fs-6 text-light">
              <FaPhoneAlt />
            </div>
            <p className="text-light">+91-863 767 5438</p>
          </div>
          <div className="d-flex">
            <div className="icon fs-6 text-light">
            <CiMail />
            </div>
            <p className="text-light">info@innaminnovative.com</p>
          </div>
          <div className="d-flex">
            <div className="fs-2 pe-2">
            <FaWhatsapp className="icons wt"/>
            </div>
            <div className="fs-2 pe-2">
            <FaFacebook className="icons fb"/>
            </div>
            <div className="fs-2 pe-2">
            <AiOutlineYoutube className="icons yt"/>
            </div>
            <div className="fs-2 pe-2">
            <FaInstagram className="icons it"/>
            </div>
            <div className="fs-2 pe-2">
            <FaLinkedin className="icons lk"/>
            </div>
          </div>
        </div>
        <div className="col-2 mb-5 pb-5">
          <h4 className="text-danger">Popular Links</h4>
          <div className="d-flex">
            <div className="icon fs-6 text-light">
              <FaChevronRight />
            </div>
            <p className="info">About Us</p>
          </div>
          <div className="d-flex">
            <div className="icon fs-6 text-light">
              <FaChevronRight />
            </div>
            <p className="info">Gallery</p>
          </div>
        </div>
        <div className="col-2 mt-4">
          <h4 className="text-danger">Useful Links</h4>
          <div className="d-flex">
            <div className="icon fs-6 text-light">
              <FaChevronRight />
            </div>
            <p className="info">Terms of use</p>
          </div>
          <div className="d-flex">
            <div className="icon fs-6 text-light">
              <FaChevronRight />
            </div>
            <p className="info">Privacy policy</p>
          </div>
          <div className="d-flex">
            <div className="icon fs-6 text-light">
              <FaChevronRight />
            </div>
            <p className="info">Cookies</p>
          </div>
          <div className="d-flex">
            <div className="icon fs-6 text-light">
              <FaChevronRight />
            </div>
            <p className="info">Help</p>
          </div>
          <div className="d-flex">
            <div className="icon fs-6 text-light">
              <FaChevronRight />
            </div>
            <p className="info">FAQs</p>
          </div>
        </div>
        <div className="col-2 mb-4">
          <h4 className="text-danger pb-2">News Letter</h4>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-3"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary w-100 rounded" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
