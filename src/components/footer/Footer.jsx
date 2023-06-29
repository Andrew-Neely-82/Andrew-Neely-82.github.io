import React, { useEffect, useState } from "react";
import "./footer.scss";

const Footer = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const checkFooterVisibility = () => {
      const contactSection = document.getElementById("bottom");
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const rect = contactSection.getBoundingClientRect();
      const isVisible = rect.top <= windowHeight && rect.top + rect.height >= 0;

      setFooterVisible(isVisible);
    };

    checkFooterVisibility();
    window.addEventListener("scroll", checkFooterVisibility);
    return () => {
      window.removeEventListener("scroll", checkFooterVisibility);
    };
  }, []);

  return (
    <footer className={`footer ${footerVisible ? "visible" : "hidden"}`}>
      <div className="footer-text">
        <p>
          Last updated on &nbsp;
          <span style={{ color: "yellow", textShadow: "none" }}>29 JUNE 2023 &nbsp;</span>
        </p>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
