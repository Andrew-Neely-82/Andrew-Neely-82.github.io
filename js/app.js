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
          document.querySelector(`header nav a[href*=${id}]`).classList.add("active");
        });
      }
    });
  });
};

const toggleStickyHeader = () => {
  const header = document.querySelector("header");
  const threshold = 100;

  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > threshold);
  });
};

const toggleMobileMenu = () => {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });
};

const animateContactPlaceholders = () => {
  const contactSection = document.getElementById("contact");
  const inputs = document.querySelectorAll("input, textarea");
  let animated = false;

  const animatePlaceholders = () => {
    inputs.forEach((input, index) => {
      const placeholder = input.getAttribute("placeholder");
      input.setAttribute("placeholder", "");

      setTimeout(() => {
        typePlaceholder(input, placeholder, 0);
      }, index * 100);
    });
  };

  const typePlaceholder = (input, placeholder, charIndex) => {
    if (charIndex < placeholder.length) {
      input.setAttribute("placeholder", input.getAttribute("placeholder") + placeholder[charIndex]);
      setTimeout(() => {
        typePlaceholder(input, placeholder, charIndex + 1);
      }, 50);
    }
  };

  const checkVisibility = () => {
    const rect = contactSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const isVisible = rect.top <= windowHeight && rect.top + rect.height >= 0;

    if (isVisible && !animated) {
      animatePlaceholders();
      animated = true;
    }
  };

  checkVisibility();
  document.addEventListener("scroll", checkVisibility);
};

const init = () => {
  highlightActiveNavLink();
  toggleStickyHeader();
  toggleMobileMenu();
  animateContactPlaceholders();
};

init();