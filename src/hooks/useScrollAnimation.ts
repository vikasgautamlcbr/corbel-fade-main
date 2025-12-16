import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(requiredRatio: number = 0.6) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= requiredRatio) {
          setIsVisible(true);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 0.85, 0.95, 1] }
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
