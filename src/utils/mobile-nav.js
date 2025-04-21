
const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav_link");
  // State
  let isMobileNavOpen = false;

  const toggleMobileNav = () => {
    isMobileNavOpen = !isMobileNavOpen;
    mobileNav.style.display = isMobileNavOpen ? "flex" : "none";
    document.body.style.overflowY = isMobileNavOpen ? "hidden" : "auto";
  };

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
