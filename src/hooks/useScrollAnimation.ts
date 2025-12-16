import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(requiredRatio: number = 0.6) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : true;
    const effectiveRequired = isMobile ? Math.min(requiredRatio, 0.1) : requiredRatio;
    const thresholds = isMobile ? [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.35, 0.5] : [0, 0.25, 0.5, 0.75, 0.85, 0.95, 1];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= effectiveRequired) {
          setIsVisible(true);
        }
      },
      { threshold: thresholds, rootMargin: isMobile ? '0px 0px 20% 0px' : '0px' }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [requiredRatio]);

  return { ref, isVisible };
}
