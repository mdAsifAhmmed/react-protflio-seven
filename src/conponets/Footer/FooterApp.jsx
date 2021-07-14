import React from "react";
import "./Footer.css";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { RiMessage2Line, RiDribbbleLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const FooterApp = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="footer_whapper row">
              <div className="footer_Card col-md-3 col-sm-6 col-lg-3">
                <h3>
                  About <span>Me</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore.
                </p>
              </div>
              <div className="footer_Card col-md-3 col-sm-6 col-lg-3">
                <h3>
                  Contact <span>Us</span>
                </h3>
                <ui className="footer_Us">
                  <li>
                    <GoLocation className="icon" />
                    New York NY 10018, US
                  </li>
                  <li>
                    <FiPhone className="icon" />
                    +1 212-695-1962
                  </li>
                  <li>
                    <RiMessage2Line className="icon" />
                    Sample@gmail.com
                  </li>
                </ui>
              </div>
              <div className="footer_Card col-md-3 col-sm-6 col-lg-3">
                <h3>
                  My <span>Socials</span>
                </h3>
                <ui className="footer_sosal">
                  <li>
                    <FaFacebookF className="icon" />
                    Facebook
                  </li>
                  <li>
                    <FaLinkedinIn className="icon" />
                    Linkedin
                  </li>
                  <li>
                    <RiDribbbleLine className="icon" />
                    Dribble
                  </li>
                  <li>
                    <AiOutlineTwitter className="icon" />
                    Twitter
                  </li>
                  <li>
                    <FaInstagram className="icon" />
                    Instagram
                  </li>
                </ui>
              </div>
            </div>
            <div className="footer_dow row">
              <span className="col-sm-6 col-md-6 col-lg-6">
                Copyright © 2019. Template has been designed by{" "}
                <small>Retrina</small>
              </span>
              <span
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="footer__Back col-sm-6 col-md-6 col-lg-6"
              >
                Back To Top
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterApp;
