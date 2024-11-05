import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="d-flex justify-content-spacearound align-items-center py-3  border-top bg-dark text-white">
        <div className="col-lg-4 col-md-4 d-flex align-items-center px-5">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          ></a>
          <span className="mb-3 mb-md-0">&copy; Kiran K P, Inc</span>
        </div>
        <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center info">
          Data provided by BBC and Cambridgeshire-live
        </div>
        <ul className="nav col-lg-4 col-md-4 justify-content-end list-unstyled d-flex footer-links px-5">
          <li className="ms-3">
            <Link to="https://www.linkedin.com/in/kiran-k-p-6716a018b/">
              <i className="fa fa-brands fa-linkedin"></i>
            </Link>
          </li>

          <li className="ms-3">
            <Link to="https://www.instagram.com/kiran_kumararavel/">
              <i className="fa fa-brands fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
