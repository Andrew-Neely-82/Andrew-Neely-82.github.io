import { Link } from "react-router-dom";
import { info } from "./info.js";
import React, { useState } from "react";
import { links } from "./links";
import "./home.scss";

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => setShowModal(false);

  const Socials = (key) => {
    return (
      <div key={key} className="social-media">
        {links.map((info, key) => {
          return (
            <span className="social-media_icon" key={key}>
              <Link to={info.href} target="_blank">
                <i className={info.class} title={info.title}></i>
              </Link>
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section className="home" id="home">
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={closeModal}>X</span>
            <h2>This page was created in React and uses SCSS for styling</h2>
          </div>
        </div>
      )}
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
                  <img src="https://avatars.githubusercontent.com/u/114946953?v=4" alt="me" title="Me!" />
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
