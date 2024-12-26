// src/components/ScrollRestoration/ScrollRestoration.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    // Detect if the navigation was caused by a page refresh
    const isReload = window.performance
      .getEntriesByType('navigation')
      .some((nav) => nav.type === 'reload');

    if (isReload) {
      // If it's a reload, preserve the scroll position
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
      return;
    }

    // On route change, scroll to the top
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Save scroll position before the page unloads
    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', saveScrollPosition);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, []);

  return null;
}

export default ScrollRestoration;
