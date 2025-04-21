const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");
  let isMobileNavOpen = false;

  const toggleMobileNav = () => {
    isMobileNavOpen = !isMobileNavOpen;
    mobileNav.style.display = isMobileNavOpen ? "flex" : "none";
    document.body.style.overflowY = isMobileNavOpen ? "hidden" : "auto";
    mobileNav.style.position = isMobileNavOpen ? "fixed" : "absolute";
  };

  // Ensure the button works even after scrolling
  document.addEventListener('scroll', () => {
    headerBtn.style.zIndex = "10000";
  });

  headerBtn.addEventListener("click", toggleMobileNav);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileNav(); // Use the existing toggle function
    });
  });
};

export default mobileNav;