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
  const navLinks = document.querySelectorAll(".navbar a");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    });
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

const toggleFooterVisibility = () => {
  const footer = document.querySelector("footer");
  const contactSection = document.getElementById("message");
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  const checkFooterVisibility = () => {
    const rect = contactSection.getBoundingClientRect();
    const isVisible = rect.top <= windowHeight && rect.top + rect.height >= 0;

    if (isVisible) {
      footer.classList.add("visible");
      footer.classList.remove("hidden");
    } else {
      footer.classList.add("hidden");
      footer.classList.remove("visible");
    }
  };

  // Call the function initially to set the correct state
  checkFooterVisibility();

  // Update the footer visibility on scroll
  window.addEventListener("scroll", checkFooterVisibility);
};

const init = () => {
  highlightActiveNavLink();
  toggleStickyHeader();
  toggleMobileMenu();
  animateContactPlaceholders();
  toggleFooterVisibility();
};

init();
