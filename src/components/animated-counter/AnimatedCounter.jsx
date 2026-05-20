import React, { useEffect, useRef } from 'react';
import './AnimatedCounter.css';

const AnimatedCounter = ({ targetValue, label, delay = 0 }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const animateCounter = () => {
      // Si el valor es 1, mostrarlo directamente sin animación
      if (targetValue <= 5) {
        counterRef.current.innerText = targetValue.toString();
        counterRef.current.classList.add('pop-animation');
        return;
      }

      const startTime = Date.now();
      const startValue = 0;
      
      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / 3000, 1);
        const easedProgress = Math.sin(progress * Math.PI/2);
        const currentValue = Math.floor(easedProgress * targetValue);
        counterRef.current.innerText = currentValue;
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counterRef.current.classList.add('pop-animation');
        }
      };

      requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          counterRef.current.innerText = targetValue === 1 ? '1' : '0';
          animateCounter();
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div className="counter-item" style={{ '--delay': `${delay}s` }}>
      <span ref={counterRef} className="counter-value">0</span>
      <div className="counter-label">
        {label.includes('-') ? (
          <>
            <span className="country-name">{label.split('-')[1].trim()}</span>
          </>
        ) : (
          <span className="country-name">{label}</span>
        )}
      </div>
    </div>
  );
};

export default AnimatedCounter;