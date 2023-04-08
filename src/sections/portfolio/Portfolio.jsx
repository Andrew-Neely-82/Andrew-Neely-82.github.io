import React from "react";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>
      <span
        style={{
          textAlign: "center",
          fontSize: "large",
          marginBottom: "1rem",
          color: "yellow",
        }}>
        Updating the below soon!
      </span>
      <div className="portfolio-wrapper">
        {/* <!-- Add this wrapper --> */}
        <div className="portfolio-container">
          {/* <!--  --> */}
          <div className="portfolio-box">
            <img src="https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt.</p>
              <a href="#portfolio">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          {/* <!-- WIP --> */}
          <div className="portfolio-box">
            <img src="https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt.</p>
              <a href="#portfolio">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          {/* <!-- Finished --> */}
          <div className="portfolio-box">
            <img src="https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt.</p>
              <a href="#portfolio">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          {/* <!--  --> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
