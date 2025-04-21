const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav_link");
  let isMobileNavOpen = false;

  const toggleMobileNav = () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
      mobileNav.style.position = "fixed";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
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