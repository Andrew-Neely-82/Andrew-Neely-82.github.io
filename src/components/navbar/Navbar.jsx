import { scroller, highlighter, icon, iconId, info, q } from "./index";
import React, { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(q.home);

  const toggleNavbar = () => {
    const navbar = document.querySelector(q.nav);
    navbar.classList.toggle(q.active);
  };

  const closeNavbar = () => {
    const navbar = document.querySelector(q.nav);
    navbar.classList.remove(q.active);
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
      <div className="wrapper" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="#home" className="logo" title="Portfolio" onClick={scrollToSection}>
          My Portfolio
        </a>
        <i className={icon} id={iconId} onClick={toggleNavbar}></i>
        <nav className="navbar">
          <ul>
            <RenderLinks />
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
