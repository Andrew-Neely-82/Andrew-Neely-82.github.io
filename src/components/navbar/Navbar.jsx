import { scroller, closeIcon, highlighter, icon, info, q } from "./index";
import React, { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(q.home);
  const [open, setOpen] = useState(false);

  const iconHandler = () => setOpen(!open);

  const toggleNavbar = () => {
    const navbar = document.querySelector(q.nav);
    navbar.classList.toggle(q.active);
  };

  const closeNavbar = () => {
    const navbar = document.querySelector(q.nav);
    navbar.classList.remove(q.active);
    setOpen(!open)
  };

  const scrollToSection = scroller(closeNavbar);
  const highlightActiveNavLink = highlighter(setActiveLink);

  useEffect(() => {
    highlightActiveNavLink();
  }, [highlightActiveNavLink]);

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
      <div className="wrapper">
        <div className="title-container" style={{ display: "flex", width: "20rem" }}>
          <a href="#home" className="title" onClick={scrollToSection}>
            My Portfolio
          </a>
        </div>
        {/* <i
          className={open ? closeIcon : icon}
          onClick={() => {
            toggleNavbar();
            iconHandler();
          }}></i> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          onClick={() => {
            toggleNavbar();
            iconHandler();
          }}
          viewBox="0 0 24 24">
          <rect className={`line line1 ${open ? "open" : ""}`} x="4" y="6" width="16" height="2"></rect>
          <rect className={`line line2 ${open ? "open" : ""}`} x="8" y="11" width="12" height="2"></rect>
          <rect className={`line line3 ${open ? "open" : ""}`} x="13" y="16" width="7" height="2"></rect>
        </svg>
        <div className={`navbar links ${open ? "active" : "not-active"}`}>
          <ul>
            <RenderLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
