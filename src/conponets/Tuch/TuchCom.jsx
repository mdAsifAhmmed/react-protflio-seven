import React from "react";
import Maps from "./Maps";

const TuchCom = () => {
  return (
    <>
      <div className="Tuch_conten row">
        <div className="conteckUs  col-sm-12 col-md-12 col-lg-6">
          <div className="conteck_hadding">
            <h4>Let’s Get Excited Work With Me</h4>
            <p>
              Are constantly thriving . It’s not enough trust in the cleaning.
            </p>
          </div>
          <div className="conteck_body">
            <span className="mini_input">
              <input type="text" placeholder="Your Name*" />
              <input type="email" placeholder="Your Email*" />
            </span>
            <input
              className="single__input"
              type="text"
              placeholder="Your Subject*"
            />
            <textarea
              rows="4"
              cols="50"
              placeholder="Your message..."
            ></textarea>
            <button className="Send_btn">
              <a href="#">Send Messages</a>
            </button>
          </div>
        </div>
        <div className="maps col-sm-12 col-md-12 col-lg-6">
          <Maps />
        </div>
      </div>
    </>
  );
};

export default TuchCom;
