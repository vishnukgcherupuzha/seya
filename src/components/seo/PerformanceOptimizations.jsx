// Performance optimization utilities for SEO

// Image loading optimization
export const optimizeImage = (src, alt, className = '') => ({
  src,
  alt,
  loading: 'lazy',
  decoding: 'async',
  className: `${className} w-full h-full object-cover`,
});

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload hero image
    const heroImg = new Image();
    heroImg.src = '/seyaheader.png';
    
    // Preload logo
    const logo = new Image();
    logo.src = '/seyalogo.png';
  }
};

// Web Vitals tracking (optional - for monitoring)
export const trackWebVitals = (metric) => {
  // You can send to analytics service
  console.log('Web Vital:', metric);
};

// Service Worker registration for caching (optional)
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('SW registered'))
      .catch(() => console.log('SW registration failed'));
  }
};