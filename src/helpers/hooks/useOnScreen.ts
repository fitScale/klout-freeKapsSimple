"use client";

import { useState, useEffect, useRef, RefObject } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current && ref.current) {
        observer.current.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}
