import React from "react";
import "./skills.scss";

const Skills = () => {
  return (
    <section class="skills" id="skills">
      <h2 class="heading">
        My <span>&nbsp;Skills</span>
      </h2>

      <div class="skills-container">
        <div class="skills-box">
          <div class="skills-box-header">
            <i class="bx bxl-html5"></i>
            <h3 style={{ display: "inline", textAlign: "center" }}>HTML 5</h3>
          </div>
          <p>Experienced in crafting semantic and accessible HTML5 markup for responsive and modern web applications. Familiar with SEO best practices and performance optimization techniques.</p>
          <br />
          <div class="btn-container">
            <a href="#skills" class="btn">
              Read More
            </a>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-box-header">
            <i class="devicon-sass-original"></i>
            <h3>CSS/SCSS</h3>
          </div>
          <p>Skilled in using CSS and SCSS/Sass to create visually appealing and responsive designs. Proficient in implementing animations, transitions, and working with CSS frameworks like Bootstrap and Tailwind CSS.</p>
          <div class="btn-container">
            <a href="#skills" class="btn">
              Read More
            </a>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-box-header">
            <i class="bx bxl-javascript"></i>
            <h3>Javascript</h3>
          </div>
          <p>Strong knowledge of modern JavaScript (ES6+) concepts and practices, including asynchronous programming, DOM manipulation, and working with AJAX and RESTful APIs. Familiar with popular libraries such as jQuery.</p>
          <div class="btn-container">
            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" class="btn">
              Read More
            </a>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-box-header">
            <i class="devicon-react-original"></i>
            <h3>React.js</h3>
          </div>
          <p>Proficient in building user interfaces with React.js, utilizing functional components and hooks. Experienced in working with state management libraries like Redux, and implementing server-side rendering with Next.js.</p>
          <div class="btn-container">
            <a href="https://legacy.reactjs.org/" target="_blank" class="btn">
              Read More
            </a>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-box-header">
            <i class="devicon-mysql-plain"></i>
            <h3>MySQL</h3>
          </div>
          <p>Well-versed in designing and managing relational databases using MySQL, with a solid understanding of SQL queries, joins, and transactions. Experienced in optimizing database performance and ensuring data security.</p>
          <div class="btn-container">
            <a href="https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html" target="_blank" class="btn">
              Read More
            </a>
          </div>
        </div>

        <div class="skills-box">
          <div class="skills-box-header">
            <i class="devicon-java-plain"></i>
            <h3>Java</h3>
          </div>
          <p>Competent in Java programming, with a focus on Java EE and Spring Boot for creating scalable and robust web applications. Knowledgeable in working with multi-threading, data structures, and various design patterns.</p>
          <div class="btn-container">
            <a href="https://www.w3schools.com/java/java_intro.asp" target="_blank" class="btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
