import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import CountUp from "react-countup";

const Section6 = () => {
  // State to track if the user has hovered over the section
  const [startCount, setStartCount] = useState(false);

  return (
    <div
      className="sec-6 py-5 my-5 bg-black"
      onMouseEnter={() => setStartCount(true)}  // Start counting on mouse enter
    >
      <div className="row py-5 my-3 justify-content-center align-items-center">
        {/* Our Clients */}
        <div className="col-2">
          <div className="d-flex justify-content-center align-items-center">
            <div className="icon text-danger fs-1 pe-3">
              <IoLocation />
            </div>
            <h2 className="text-light pt-3">
              {startCount && <CountUp end={1} duration={3} suffix="+" />}
            </h2>
          </div>
          <p className="text-center ps-5 text-light fs-6">Our Clients</p>
        </div>

        {/* Workers */}
        <div className="col-2">
          <div className="d-flex justify-content-center align-items-center">
            <div className="icon text-danger fs-2 pe-3">
              <FaUser />
            </div>
            <h2 className="text-light pt-3">
              {startCount && <CountUp end={80} duration={3} suffix="+" />}
            </h2>
          </div>
          <p className="text-center ps-5 text-light fs-6">Workers</p>
        </div>

        {/* Happy Clients */}
        <div className="col-2">
          <div className="d-flex justify-content-center align-items-center">
            <div className="icon text-danger fs-1 pe-3">
              <MdGroups />
            </div>
            <h2 className="text-light pt-3">
              {startCount && <CountUp end={170} duration={3} suffix="+" />}
            </h2>
          </div>
          <p className="text-center ps-5 ms-4 text-light fs-6">Happy Clients</p>
        </div>

        {/* Projects Completed */}
        <div className="col-2">
          <div className="d-flex justify-content-center align-items-center">
            <div className="icon text-danger pe-3">
              <GrStatusGood />
            </div>
            <h2 className="text-light pt-3">
              {startCount && <CountUp end={220} duration={3} suffix="+" />}
            </h2>
          </div>
          <p className="text-center ps-5 ms-4 text-light fs-6">Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
