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
        <button onClick={onClickFunc}>
          <svg {...props.svg}>
            <rect {...props.rect1} />
            <rect {...props.rect2} />
            <rect {...props.rect3} />
          </svg>
        </button>
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
