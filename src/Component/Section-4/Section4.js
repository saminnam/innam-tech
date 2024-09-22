import React from "react";
import "./Section4.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Section4 = () => {
  return (
    <div className="sec-4 py-5 mt-5">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <h3>Empowering Talent Transformations</h3>
            <p className="text-secondary">
              Embrace the talent revolution to remain relevant in the future.
            </p>
            <button
              className="btn btn-lg btn-primary fw-light btn-outline-none"
              type="button"
            >
              Explore
            </button>
            <h6 className="py-2 fs-6 text-dark">Insights</h6>
            <div className="row">
              <div className="col-6">
                <ul className="list-group list-group-flush">
                  <li className="fs-6 list-group-item info-list">
                    <FaLongArrowAltRight className="text-primary" />
                    Improving productivity
                  </li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="fs-6 list-group-item info-list">with digital field</li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="fs-6 list-group-item info-list">workforce management.</li>
                </ul>
              </div>
              <div className="col-6">
              <ul className="list-group list-group-flush">
                  <li className="fs-6 list-group-item bg-tertiary info-list">
                    <FaLongArrowAltRight className="text-primary" />
                    Developing talent for 
                  </li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="fs-6 list-group-item bg-tertiary info-list">our digital future.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://i.pinimg.com/736x/b9/2a/fe/b92afe50dea8eb10f2026feb27876d5d.jpg"
              className="img-fluid mt-4"
              alt="Motivational Quote"
              data-aos="fade-up-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
