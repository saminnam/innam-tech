import React from "react";
import "./Section3.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className="sec-3 pt-5 mt-5" id="about">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <img
              src="https://png.pngtree.com/png-vector/20201111/ourmid/pngtree-fitness-motivational-quote-png-image_2414888.jpg"
              className="img-fluid"
               data-aos="fade-up-right"
            />
          </div>
          <div className="col-md-4">
            <h2>Digital Operating Models</h2>
            <p className="text-secondary">Adopt accelerators to evolve your way of working.</p>
            <button className="btn btn-lg btn-primary fw-light btn-outline-none" type="button">
              Explore
            </button>
            <h6 className="py-2 fs-6 text-secondary">Case Study</h6>
            <ul className="list-group list-group-flush">
              <li className="fs-6 list-group-item">
                <FaLongArrowAltRight className="text-primary" />
                Powering Radial's
              </li>
            </ul>
            <div className="row">
              <div className="col-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <FaLongArrowAltRight className="text-primary" />
                    journey
                  </li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <FaLongArrowAltRight className="text-primary" />
                    Energy Group's
                  </li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <FaLongArrowAltRight className="text-primary" />
                    journey
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <FaLongArrowAltRight className="text-primary" />
                    Digital Transformation
                  </li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <FaLongArrowAltRight className="text-primary" />
                    Accelerating Citizens
                  </li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <FaLongArrowAltRight className="text-primary" />
                    Customer Experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
