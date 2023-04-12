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
        }}></span>
      <div className="portfolio-wrapper">
        {/* <!-- Add this wrapper --> */}
        <div className="portfolio-container">
          {/* <!--  --> */}
          <div className="portfolio-box">
            <img src="https://neilpatel.com/wp-content/uploads/2021/07/social-media-profile_featured-image.png" alt="" />
            <div className="portfolio-layer">
              <h4>Troop Talk</h4>
              <p>
                Troop talk is a social media application for veterans from everywhere to talk to each other. <br></br>
                Will include instant / regular messaging, notifications, friend requests, live updates on whats going on around you, and so much more. <br></br>
                This application is being built using MERN stack.
              </p>
              <a href="https://github.com/TroopTalk/TroopTalk" target="_blank">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          {/* <!-- WIP --> */}
          <div className="portfolio-box">
            <img src="https://www.seoclerk.com/pics/663549-2Q7Ku01552467789.png" alt="" />
            <div className="portfolio-layer">
              <h4>Codeup Spring Blog</h4>
              <p>
                Codeup Spring Blog was a Spring boot / Java EE based project that was used for us to put our Java skills to the test. <br></br>
                This project utilized JSP's, JSTL's, repositories, and was a Full Stack project designed to be a blog like platform written in Java.
              </p>
              <a href="https://github.com/Andrew-Neely-82/codeup-spring-blog" target="_blank">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          {/* <!-- Finished --> */}
          {/* <div className="portfolio-box">
            <img src="https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg" alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deserunt.</p>
              <a href="#portfolio">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div> */}
          {/* <!--  --> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
