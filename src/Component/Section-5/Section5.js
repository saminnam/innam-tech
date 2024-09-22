import React from "react";
import { FaUser } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineTimeline } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";

const Section5 = () => {
  return (
    <div className="sec-5 pt-5 mt-5">
      <div className="container-fluid">
        <h2 className="text-center" data-aos="fade-up">Why Work With <span className="text-danger">Innam</span> Innovative?</h2>
        <div className="row justify-content-center align-items-center pt-4">
          <div className="col-1">
            <div className="icon text-end" data-aos="fade-down-right">
              <FaUser />
            </div>
          </div>
          <div className="col-4">
            <h5 className="text-danger" data-aos="fade-up">Startup Culture</h5>
            <p className="fs-6" data-aos="fade-up">Startup culture is defined by innovation, agility, and a focus on growth, often within a collaborative and fast-paced environment. It emphasizes adaptability.</p>
          </div>
          <div className="col-1">
            <div className="icon text-end" data-aos="fade-down-left">
            <TbWorldSearch />
            </div>
          </div>
          <div className="col-4">
            <h5 className="text-danger" data-aos="fade-up">Cross Domain Expertise</h5>
            <p className="fs-6" data-aos="fade-up">Cross-domain expertise involves the ability to apply knowledge and skills from one field to solve problems in another, fostering innovative solutions.</p>
          </div>
        </div>
        <div className="row justify-content-center align-items-cente">
          <div className="col-1">
            <div className="icon text-end" data-aos="fade-down-right">
            <GiReceiveMoney />
            </div>
          </div>
          <div className="col-4">
            <h5 className="text-danger" data-aos="fade-up">Cost Effective Solutions</h5>
            <p className="fs-6" data-aos="fade-up">Cost-effective solutions focus on delivering high value at a lower cost, optimizing resources without compromising quality. They are designed to maximize efficiency and minimize expenses.</p>
          </div>
          <div className="col-1">
            <div className="icon text-end" data-aos="fade-down-left">
            <MdOutlineTimeline />
            </div>
          </div>
          <div className="col-4">
            <h5 className="text-danger" data-aos="fade-up">Process Scalability</h5>
            <p className="fs-6" data-aos="fade-up">Process scalability refers to the ability of a business process to handle increasing workloads or demands efficiently without compromising performance. </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-cente">
          <div className="col-1">
            <div className="icon text-end" data-aos="fade-down-right">
            <FaHandshake />
            </div>
          </div>
          <div className="col-4">
            <h5 className="text-danger" data-aos="fade-up">Affiliations & Partnerships</h5>
            <p className="fs-6" data-aos="fade-up">Affiliations and partnerships are strategic collaborations between organizations that enhance capabilities and expand reach. </p>
          </div>
          <div className="col-1">
            <div className="icon text-end" data-aos="fade-down-left">
            <TbBulbFilled />
            </div>
          </div>
          <div className="col-4">
            <h5 className="text-danger" data-aos="fade-up">Security</h5>
            <p className="fs-6" data-aos="fade-up">Security is the foundation of trust in any system, ensuring the protection of data, assets, and operations from unauthorized access and threats. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
