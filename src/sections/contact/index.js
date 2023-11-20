export function checkVisibilityFunc(animatePlaceholders) {
  return () => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const rect = contactSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const isVisible = rect.top <= windowHeight && rect.top + rect.height >= 0;

    if (isVisible) {
      animatePlaceholders();
    }
  };
}
