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

  return (
    <header className="header">
      <a href="#" className="logo" title="Portfolio">
        My Portfolio
      </a>
      <i className="bx bx-menu-alt-right" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active" title="Home">
          Home
        </a>
        <a href="#about" title="About">
          About
        </a>
        <a href="#skills" title="Skills">
          Skills
        </a>
        <a href="#portfolio" title="Portfolio">
          Portfolio
        </a>
        <a href="#contact" title="Contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
