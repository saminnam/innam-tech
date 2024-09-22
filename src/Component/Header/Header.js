import React, { useState } from "react";
import "./Header.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [showITServicesDropdown, setShowITServicesDropdown] = useState(false);
  const [showInsightsDropdown, setShowInsightsDropdown] = useState(false);

  return (
    <>
      <header className="position-relative">
        <nav className="navbar navbar-expand-lg bg-dark position-absolute top-10 z-3 w-100">
          <div className="container" id="header">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item btn">
                  <a href="#home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item btn">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                {/* IT Services Dropdown */}
                <li
                  className="nav-item dropdown btn"
                  onMouseEnter={() => setShowITServicesDropdown(true)}
                  onMouseLeave={() => setShowITServicesDropdown(false)}
                >
                  <a href="/" className="nav-link dropdown-toggle">
                    IT Services
                  </a>
                  {showITServicesDropdown && (
                    <ul className="dropdown-menu show">
                      <li>
                        <a className="dropdown-item" href="#">
                          Software Development
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Mobile App Development
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Web Design and Development
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Cybersecurity Solutions
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Digital Marketing
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          IT Automation Solutions
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Cloud Computing Services
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Web Hosting
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          SEO Services
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                {/* IT Services Dropdown ends */}
                <li className="nav-item btn">
                  <a href="#gallery" className="nav-link">
                    Gallery
                  </a>
                </li>
                {/* Insights Dropdown */}
                <li
                  className="nav-item dropdown btn"
                  onMouseEnter={() => setShowInsightsDropdown(true)}
                  onMouseLeave={() => setShowInsightsDropdown(false)}
                >
                  <a href="/" className="nav-link dropdown-toggle">
                    Insights
                  </a>
                  {showInsightsDropdown && (
                    <ul className="dropdown-menu show">
                      <li>
                        <a className="dropdown-item" href="#">
                          Business Strategy
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Digital Transformation
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Technology Trends
                        </a>
                      </li>
                      <li className="dropdown-divider my-0"></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Blog
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                {/* Insights Dropdown ends */}
                <li className="nav-item btn">
                  <a href="/" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="btn btn-light custom-btn btn-outline-none btn-lg fw-semibold"
              type="button"
            >
              Join Now
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
