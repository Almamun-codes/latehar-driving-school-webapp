import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="bg-warning pt-3 row">
        <div className="col-4">
          <img src="./logo.png" className="h-75 img-fluid" alt="logo" />
        </div>
        <div className="col-4">
          <h3>Servies</h3>
          <p>
            <NavLink className="text-decoration-none text-dark" to="/service">
              courses
            </NavLink>
          </p>
          <p>
            <NavLink
              className="text-decoration-none text-dark"
              to="/instructors"
            >
              instructors
            </NavLink>
          </p>
          <p>
            <NavLink className="text-decoration-none text-dark" to="/about">
              about us
            </NavLink>
          </p>
        </div>
        <div className="col-4">
          <h3>Address</h3>
          <p>343,street name, city, country</p>
          <p>phone: 0123456789</p>
          <p>mail: somethin@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
