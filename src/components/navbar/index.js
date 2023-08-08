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
