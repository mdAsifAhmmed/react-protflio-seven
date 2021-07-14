import React from "react";
import "./Slick__Item.css";
// import Slick_com from "./Slick__Item";
import Slider from "react-slick";
import Cards from "./Slick_Card";
import Slick_Data from "./Slick_Data";
const Slick_App = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    button: false,
    autoplay: true,
    speed: 500,
    // slidesToShow: 1,
    // adaptiveHeight: true,
    // slidesToScroll: 1
  };
  return (
    <>
      <section>
        <div className="Slick_whapper">
          <div className="containers">
            <div className="container">
              <Slider {...settings}>
                <div>
                  <Cards
                    imgSrc={Slick_Data[0].imgSrc}
                    TeamName={Slick_Data[0].name}
                    TeamDates={Slick_Data[0].pera}
                  />
                </div>{" "}
                <div>
                  <Cards
                    imgSrc={Slick_Data[1].imgSrc}
                    TeamName={Slick_Data[1].name}
                    TeamDates={Slick_Data[1].pera}
                  />
                </div>{" "}
                <div>
                  <Cards
                    imgSrc={Slick_Data[2].imgSrc}
                    TeamName={Slick_Data[2].name}
                    TeamDates={Slick_Data[2].pera}
                  />
                </div>{" "}
                <div>
                  <Cards
                    imgSrc={Slick_Data[3].imgSrc}
                    TeamName={Slick_Data[3].name}
                    TeamDates={Slick_Data[3].pera}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slick_App;
