export const scroller = (closeNavbar) => {
  return (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute(q.href);
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView(scrollSettings);
      closeNavbar();
    }
  };
};

export const highlighter = (setActiveLink) => {
  return () => {
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
};

export const q = {
  id: "id",
  section: "section",
  home: "home",
  nav: ".navbar",
  active: "active",
  href: "href",
  nActive: "not-active",
};

export const icon = "bx bx-menu-alt-right";
export const closeIcon = "bx bx-x";
export const iconId = "menu-icon";

export const scrollSettings = { behavior: "smooth", block: "start" };

export const info = [
  {
    href: "home",
    class: "active",
    a: `Home`,
  },
  {
    href: "about",
    class: "",
    a: `About`,
  },
  {
    href: "skills",
    class: "",
    a: `Skills`,
  },
  {
    href: "personalDevelopment",
    class: "",
    a: `Personal Development`,
  },
  {
    href: "portfolio",
    class: "",
    a: `Portfolio`,
  },
  {
    href: "contact",
    class: "",
    a: `Contact`,
  },
];

export const propsNav = (toggleNavbar, iconHandler, open) => {
  return {
    a: { href: "#home", className: "title" },
    svg: {
      xmlns: "http://www.w3.org/2000/svg",
      className: "bx",
      height: "24",
      width: "24",
      onClick: () => {
        toggleNavbar();
        iconHandler();
      },
      viewBox: "0 0 24 24",
    },
    rect1: { className: `line line1 ${open ? "open" : ""}`, x: "4", y: "6", width: "16", height: "2" },
    rect2: { className: `line line2 ${open ? "open" : ""}`, x: "8", y: "11", width: "12", height: "2" },
    rect3: { className: `line line3 ${open ? "open" : ""}`, x: "13", y: "16", width: "7", height: "2" },
    menu: { className: `navbar links ${open ? "active" : "not-active"}` },
  };
};
