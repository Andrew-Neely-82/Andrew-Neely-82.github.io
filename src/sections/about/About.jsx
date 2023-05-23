import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="https://avatars.githubusercontent.com/u/114946953?v=4" alt="me" title="Me!" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          About <span>Me...</span>
        </h2>
        <h3>Web Developer</h3>
        <p>Having grown up in a military family, I had the opportunity to travel extensively across the United States. Upon graduating from Copperas Cove High School, I proudly served in the United States Army as a Signal Systems Support Specialist. Embracing challenges, I chose to become a paratrooper and had the privilege of serving with the renowned 82nd Airborne Division and 173rd Airborne Brigade. After completing my military service, I embarked on a new journey in web development by enrolling in Codeup, a reputable coding bootcamp based in San Antonio, Texas.</p>

        <div className="btn-container">
          <span>Button below for more info coming soon:</span>
          <span>Click it anyways to see a cool effect!</span>
          <a href="#about" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
