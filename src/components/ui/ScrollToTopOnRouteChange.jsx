import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window to top
    window.scrollTo(0, 0);
    
    // Find and scroll all scrollable containers to top
    const scrollableContainers = document.querySelectorAll('.overflow-y-auto');
    scrollableContainers.forEach(container => {
      container.scrollTop = 0;
    });
    
    // Also target any element that might be the main content container
    const contentContainers = document.querySelectorAll('[class*="overflow-y-auto"]');
    contentContainers.forEach(container => {
      container.scrollTop = 0;
    });
  }, [pathname]);

  return null;
}