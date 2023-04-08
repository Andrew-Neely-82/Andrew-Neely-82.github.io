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
            document.querySelector(`header nav a[href*=${id}]`).classList.add("active");
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

  return (
    <header className="header">
      <a href="#" className="logo" title="Portfolio">
        My Portfolio
      </a>
      <i className="bx bx-menu-alt-right" id="menu-icon" onClick={toggleNavbar}></i>
      <nav className="navbar">
        <a href="#home" className="active" title="Home" onClick={closeNavbar}>
          Home
        </a>
        <a href="#about" title="About" onClick={closeNavbar}>
          About
        </a>
        <a href="#skills" title="Skills" onClick={closeNavbar}>
          Skills
        </a>
        <a href="#portfolio" title="Portfolio" onClick={closeNavbar}>
          Portfolio
        </a>
        <a href="#contact" title="Contact" onClick={closeNavbar}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
