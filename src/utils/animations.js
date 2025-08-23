// Animation utilities for SEYA Driving School website
export const initializeAnimations = () => {
  // Function to trigger animations when elements come into view
  const observeElements = () => {
    const animatedElements = document.querySelectorAll('.animate-on-load');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove the opacity: 0 class and let the animation play
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    animatedElements.forEach((el) => {
      observer.observe(el);
    });
  };

  // Initialize on DOM content loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
  } else {
    observeElements();
  }

  // Initialize on page load for any missed elements
  window.addEventListener('load', () => {
    setTimeout(observeElements, 100);
  });
};

// Initialize animations
initializeAnimations();