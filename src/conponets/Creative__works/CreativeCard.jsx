import React from "react";
import "./Creative.css";
const CreativeCard = (props) => {
  return (
    <>
      <div className="cards col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card__whapper">
          <div className="bg__img">
            <img src={props.img} alt="hove_img" />
          </div>
          <div className="card__hov">
            <div className="card__hov__whapper">
              <div>
                <div className="card__icon">
                  <span>{props.iconl}</span>
                  <span>{props.icons}</span>
                </div>
                <div className="card__titel">
                  <h4>{props.titel}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeCard;
