import React, { useEffect, useState } from "react";
import "./footer.scss";

const Footer = () => {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const checkFooterVisibility = () => {
      const footer = document.querySelector("footer");
      const contactSection = document.getElementById("message");
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
    <>
      <footer className={`footer ${footerVisible ? "visible" : "hidden"}`}>
        <div className="footer-text">
          <p>
            Last updated on &nbsp;
            <span style={{ color: "yellow", textShadow: "none" }}>08 APRIL 2023 &nbsp;</span>
            by <span style={{ textShadow: "none" }}>Andrew Neely</span>
          </p>
        </div>
        <div className="footer-iconTop">
          <a href="#">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
