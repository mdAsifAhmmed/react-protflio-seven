import React, { useState } from "react";
// import CreativeCom from "./CreativeCom";
import Creative_Json from "./Creative_Json";
import CreativeCard from "./CreativeCard";

const CreativeRuter = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="Ruter__btn">
        <div className="container">
          <div className="Ruter__btns">
            <ui>
              <li
                onClick={() => setActive(0)}
                className={` item ${active === 0 ? "activeColor" : undefined}`}
              >
                All
              </li>
              <li
                onClick={() => setActive(1)}
                className={` item ${active === 1 ? "activeColor" : undefined}`}
              >
                Web Design
              </li>
              <li
                onClick={() => setActive(2)}
                className={` item ${active === 2 ? "activeColor" : undefined}`}
              >
                Mobile Design
              </li>
              <li
                onClick={() => setActive(3)}
                className={` item ${active === 3 ? "activeColor" : undefined}`}
              >
                Graphic
              </li>
            </ui>
          </div>
        </div>
        <div className="container">
          <div className="container_whapper row">
            {active === 0
              ? Creative_Json.map((val) => (
                  <CreativeCard
                    img={val.img}
                    iconl={val.iconl}
                    icons={val.icons}
                    titel={val.titel}
                  />
                ))
              : undefined}

            {active === 1
              ? Creative_Json.slice(2, 4).map((val) => (
                  <CreativeCard
                    img={val.img}
                    iconl={val.iconl}
                    icons={val.icons}
                    titel={val.titel}
                  />
                ))
              : undefined}

            {active === 2
              ? Creative_Json.slice(4, 2).map((val) => (
                  <CreativeCard
                    img={val.img}
                    iconl={val.iconl}
                    icons={val.icons}
                    titel={val.titel}
                  />
                ))
              : undefined}

            {active === 3
              ? Creative_Json.slice(6).map((val) => (
                  <CreativeCard
                    img={val.img}
                    iconl={val.iconl}
                    icons={val.icons}
                    titel={val.titel}
                  />
                ))
              : undefined}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeRuter;
