import React, { useEffect } from "react";
import "./navbar.scss";

const Navbar = () => {
  const highlightActiveNavLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    });
  };

  useEffect(() => {
    highlightActiveNavLink();
  }, []);

  const toggleNavbar = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
  };

  const closeNavbar = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("active");
  };

  const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      closeNavbar();
    }
  };

  return (
    <header className="header">
      <a href="#home" className="logo" title="Portfolio" onClick={scrollToSection}>
        My Portfolio
      </a>
      <i className="bx bx-menu-alt-right" id="menu-icon" onClick={toggleNavbar}></i>
      <nav className="navbar">
        <a href="#home" activeClassName="active" onClick={scrollToSection}>
          Home
        </a>
        <a href="#about" activeClassName="active" onClick={scrollToSection}>
          About
        </a>
        <a href="#skills" activeClassName="active" onClick={scrollToSection}>
          Skills
        </a>
        <a href="#udemy" activeClassName="active" onClick={scrollToSection}>
          Udemy Certifications
        </a>
        <a href="#portfolio" activeClassName="active" onClick={scrollToSection}>
          Portfolio
        </a>
        <a href="#contact" activeClassName="active" onClick={scrollToSection}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
