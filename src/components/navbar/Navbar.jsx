import { scroller, highlighter, info, q, propsNav, closeNavbarFunc } from "./index";
import React, { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(q.home);
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    const navbar = document.querySelector(q.nav);
    navbar.classList.toggle(q.active);
  };

  const closeNavbar = closeNavbarFunc(setOpen, open);
  const iconHandler = () => setOpen(!open);
  const scrollToSection = scroller(closeNavbar);
  const highlightActiveNavLink = highlighter(setActiveLink);
  const props = propsNav(toggleNavbar, iconHandler, open);

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

  const onClickFunc = () => {
    toggleNavbar();
    iconHandler();
  };

  return (
    <nav className="header">
      <div className="wrapper">
        <div className="title-container" style={{ display: "flex", width: "20rem" }}>
          <a href="#home" className="title">
            My Portfolio
          </a>
        </div>
        {/* Old menu toggle */}
        {/* <button onClick={onClickFunc}>
          <svg {...props.svg}>
            <rect {...props.rect1} />
            <rect {...props.rect2} />
            <rect {...props.rect3} />
          </svg>
        </button> */}
        <label className="hamburger">
          <input type="checkbox" onClick={onClickFunc} />
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <div {...props.menu}>
          <ul>
            <RenderLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
