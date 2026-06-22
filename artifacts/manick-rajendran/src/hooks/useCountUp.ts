import { useState, useEffect } from "react";

export function useCountUp(end: number, duration: number = 2000, trigger: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      
      // Use easeOutQuart for a smoother deceleration
      const timeProgress = Math.min((currentTime - startTime) / duration, 1);
      const progress = 1 - Math.pow(1 - timeProgress, 4);
      
      setCount(Math.floor(progress * end));

      if (timeProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, trigger]);

  return count;
}