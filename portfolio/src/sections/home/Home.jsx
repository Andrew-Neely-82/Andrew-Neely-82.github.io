import React from "react";
import './home.scss'

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello there! My name is</h3>
        <h1>Andrew Neely</h1>
        <h3>
          And I'm a <span>Web Developer</span>
        </h3>
        <p>As an innovative and dedicated web developer, I specialize in crafting engaging, responsive, and user-friendly websites. With expertise in various programming languages and frameworks, I strive to create intuitive digital experiences that empower users and drive business growth.</p>
        <div className="social-media">
          <a href="https://github.com/Andrew-Neely-82" target="_blank">
            <i className="bx bxl-github" title="My Github"></i>
          </a>
          <a href="https://www.linkedin.com/in/andrewneely82/" target="_blank" title="My Linkedin Page">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://alumni.codeup.com/students/1781" target="_blank" title="My Codeup Alumni Page">
            <i className="bx bxs-school"></i>
          </a>
        </div>
        {/* <a href="#" className="btn">Download CV</a> */}
      </div>
      <div className="home-img">
        <img src="https://avatars.githubusercontent.com/u/114946953?v=4" alt="me" title="Me!" />
      </div>
    </section>
  );
};

export default Home;
