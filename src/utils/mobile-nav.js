
const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav_link");
  let isMobileNavOpen = false;

  const toggleMobileNav = () => {
    isMobileNavOpen = !isMobileNavOpen;
    mobileNav.style.display = isMobileNavOpen ? "flex" : "none";
    document.body.style.overflowY = isMobileNavOpen ? "hidden" : "auto";
  };

  // Ensure the button works even after scrolling
  document.addEventListener('scroll', () => {
    headerBtn.style.zIndex = "10000";
  });

  headerBtn.addEventListener("click", toggleMobileNav);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
