import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/featured.css";
import "../styles/components/work.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css";

import mobileNav from "./utils/mobile-nav";
import darkMode from "./utils/dark-mode";
import lazyLoading from "./utils/lazy-loading";

mobileNav();
darkMode();
lazyLoading();

// Header scroll animation
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});



// Counter animation
document.addEventListener('DOMContentLoaded', () => {
  // IntersectionObserver to trigger counter animation when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const duration = 2000; // milliseconds
          
          let current = 0;
          const increment = Math.ceil(target / 100);
          
          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = current;
              setTimeout(updateCounter, duration / 100);
            } else {
              counter.textContent = target;
              
              // Animate the progress bar when counter completes
              const card = counter.closest('.stat-card');
              const progressBar = card.querySelector('.stat-progress');
              progressBar.style.width = '100%';
            }
          };
          
          updateCounter();
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Observe the stats grid
  observer.observe(document.querySelector('.stats-grid'));
});