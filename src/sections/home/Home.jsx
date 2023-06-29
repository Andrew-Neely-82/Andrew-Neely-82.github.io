import { Me } from "../../assets/img/index.js";
import Socials from "./socials/Socials.jsx";
import { info } from "./info.js";
import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        {info.map((info, key) => {
          return (
            <React.Fragment key={key}>
              <div className="intro">
                <div className="intro-details">
                  <h3>{info.h3_1}</h3>
                  <h1>{info.h1}</h1>
                  <h3>
                    {info.h3_2}
                    <span>{info.span}</span>
                  </h3>
                  <p>{info.p}</p>
                  <Socials />
                </div>
                <div className="home-img">
                  <img src={Me} alt="me" title="Me!" />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
