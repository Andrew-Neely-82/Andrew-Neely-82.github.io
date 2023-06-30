import { icon, iconId, info, q, scrollSettings } from "./index";
import React, { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(q.home);

  const highlightActiveNavLink = () => {
    const sections = document.querySelectorAll(q.section);

    window.addEventListener("scroll", () => {
      const currentSection = [...sections].find((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        return top >= offset && top < offset + height;
      });

      if (currentSection) {
        const currentLinkId = currentSection.getAttribute(q.id);
        setActiveLink(currentLinkId);
      } else {
        setActiveLink(null);
      }
    });
  };

  useEffect(() => {
    highlightActiveNavLink();
  }, []);

  const toggleNavbar = () => {
    const navbar = document.querySelector(q.nav);
    navbar.classList.toggle(q.active);
  };
  const closeNavbar = () => {
    const navbar = document.querySelector(q.nav);
    navbar.classList.remove(q.active);
  };
  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute(q.href);
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView(scrollSettings);
      closeNavbar();
    }
  };
  const RenderLinks = () => {
    return info.map((item, linkKey) => {
      const isActive = item.href === activeLink;

      return (
        <li key={linkKey}>
          <a href={`#${item.href}`} className={isActive ? q.active : q.nActive} onClick={scrollToSection}>
            {item.a}
          </a>
        </li>
      );
    });
  };

  return (
    <nav className="header">
      <a href="#home" className="logo" title="Portfolio" onClick={scrollToSection}>
        My Portfolio
      </a>
      <i className={icon} id={iconId} onClick={toggleNavbar}></i>
      <nav className="navbar">
        <ul>
          <RenderLinks />
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
