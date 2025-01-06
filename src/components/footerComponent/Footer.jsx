import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center py-4">
          {/* Left Section */}
          <div className="col-lg-4 col-md-12 text-center text-lg-start">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Kiran K P, Inc. All rights
              reserved.
            </p>
          </div>

          {/* Middle Section */}
          <div className="col-lg-4 col-md-12 text-center">
            <p className="footer-text">
              Data provided by <span className="highlight">BBC</span> and{" "}
              <span className="highlight">Cambridgeshire-live</span>.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-lg-4 col-md-12 text-center text-lg-end">
            <ul className="social-links list-unstyled d-flex justify-content-center justify-content-lg-end">
              <li className="ms-3">
                <a
                  href="https://www.linkedin.com/in/kiran-k-p-6716a018b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://www.instagram.com/kiran_kumararavel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
