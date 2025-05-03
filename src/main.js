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

// Counter animation with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  // Check if counters exist
  const counters = document.querySelectorAll('.counter');
  if (counters.length === 0) return;

  // Track animation state
  let hasAnimated = false;

  // Create single Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animateCounters();
        observer.disconnect(); // Stop observing after triggering
      }
    });
  }, {
    threshold: 0.7, // Trigger when 70% visible
    rootMargin: '0px 0px -100px 0px' // Adjust trigger point
  });

  // Observe the counter section
  const counterSection = document.querySelector('.counter-section');
  if (counterSection) {
    observer.observe(counterSection);
  }

  // Animation function
  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 seconds
      const startTime = performance.now();
      
      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        
        counter.textContent = value;
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target; // Ensure final value is exact
        }
      };
      
      requestAnimationFrame(updateCounter);
    });
  }
});

console.log('Counters found:', document.querySelectorAll('.counter').length);
console.log('Section found:', !!document.querySelector('.counter-section'));
