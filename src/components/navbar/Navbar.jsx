import React, { useEffect } from "react";
import { id, info } from "./info";
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

  const renderLinks = () => {
    return id.map((item, linkKey) => {
      const key = Object.keys(item)[0];
      const value = Object.values(item)[0];
      const capitalizedValue = key.charAt(0).toUpperCase() + key.slice(1);
      const linkText = capitalizedValue === "Udemy" ? `Udemy Certifications` : capitalizedValue;

      return (
        <a href={`#${value}`} activeClassName="active" onClick={scrollToSection} key={linkKey}>
          {linkText}
        </a>
      );
    });
  };

  return (
    <React.Fragment>
      {info.map((infoItem, key) => {
        return (
          <header className="header" key={key}>
            <a href="#home" className="logo" title="Portfolio" onClick={scrollToSection}>
              {infoItem.port}
            </a>
            <i className="bx bx-menu-alt-right" id="menu-icon" onClick={toggleNavbar}></i>
            <nav className="navbar">{renderLinks()}</nav>
          </header>
        );
      })}
    </React.Fragment>
  );
};

export default Navbar;
