import React from "react";
import "./Sub__hadding.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Sub__Hadding = () => {
  return (
    <div className="navbar__whapper">
      <div className="container">
        <div className="row  Sub__hadding">
          <div className="col-8 col-md-6 col-sm-6 col-lg-8 Sub__hadding_left">
            <div className="Sub__hadding__icon">
              <h2>Logo</h2>
            </div>
            <ui className="nav Hover_Effate">
              <li className="nav-item">
                <a href="#" className="nav-link navbar__item">
                  Home
                </a>
              </li>
              <li
                onClick={() =>
                  window.scrollTo({
                    top: 800,
                    behavior: "smooth",
                  })
                }
                className="nav-item"
              >
                <a href="#" className="nav-link navbar__item">
                  Abut
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link navbar__item">
                  Services
                </a>
              </li>
              <li
                onClick={() =>
                  window.scrollTo({
                    top: 2200,
                    behavior: "smooth",
                  })
                }
                className="nav-item"
              >
                <a href="#" className="nav-link navbar__item">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link navbar__item">
                  Client
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link navbar__item">
                  Blog
                </a>
              </li>
              <li
                onClick={() =>
                  window.scrollTo({
                    bottom: 0,
                    behavior: "smooth",
                  })
                }
                className="nav-item"
              >
                <a href="#" className="nav-link navbar__item">
                  Contact
                </a>
              </li>
            </ui>
          </div>
          <div className="col-4 col-sm-6 col-md-6 col-lg-4 Sub__hadding_left__icon">
            <ui>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <GiWorld />
                </a>
              </li>
            </ui>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub__Hadding;
