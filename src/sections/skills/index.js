export function dimensions(setWidth) {
  return () => {
    setWidth(window.innerWidth);
  };
}

export const skillsData = [
  {
    name: "HTML 5",
    icon: "bx bxl-html5",
    description: "Experienced in crafting semantic and accessible HTML5 markup for responsive and modern web applications. Familiar with SEO best practices and performance optimization techniques.",
    link: "#skills",
  },
  {
    name: "CSS/SCSS",
    icon: "devicon-sass-original",
    description: "Skilled in using CSS and SCSS/Sass to create visually appealing and responsive designs. Proficient in implementing animations, transitions, and working with CSS frameworks like Bootstrap and Tailwind CSS.",
    link: "#skills",
  },
  {
    name: "Javascript",
    icon: "bx bxl-javascript",
    description: "Strong knowledge of modern JavaScript (ES6+) concepts and practices, including asynchronous programming, DOM manipulation, and working with AJAX and RESTful APIs. Familiar with popular libraries such as jQuery.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
  },
  {
    name: "React.js",
    icon: "devicon-react-original",
    description: "Proficient in building user interfaces with React.js, utilizing functional components and hooks. Experienced in working with state management libraries like Redux, and implementing server-side rendering with Next.js.",
    link: "https://legacy.reactjs.org/",
  },
  {
    name: "MySQL",
    icon: "devicon-mysql-plain",
    description: "Well-versed in designing and managing relational databases using MySQL, with a solid understanding of SQL queries, joins, and transactions. Experienced in optimizing database performance and ensuring data security.",
    link: "https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html",
  },
  {
    name: "Java",
    icon: "devicon-java-plain",
    description: "Competent in Java programming, with a focus on Java EE and Spring Boot for creating scalable and robust web applications. Knowledgeable in working with multi-threading, data structures, and various design patterns.",
    link: "https://www.w3schools.com/java/java_intro.asp",
  },
];
