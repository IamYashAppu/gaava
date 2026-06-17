import React, { useEffect, useRef } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

const ScrambleText = ({ text, className = "", delay = 0, trigger = null }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let timeout;
    let animationFrame;

    const startAnimation = () => {
      let frame = 0;
      const queue = [];
      
      let currentStart = 0;
      const framesPerChar = Math.max(2, Math.floor(60 / text.length));

      for (let i = 0; i < text.length; i++) {
        const start = currentStart;
        const end = start + framesPerChar;
        queue.push({ from: text[i], start, end, char: '' });
        currentStart = end; 
      }

      const update = () => {
        let output = '';
        let complete = 0;

        for (let i = 0; i < queue.length; i++) {
          let { from, start, end, char } = queue[i];
          
          if (from === ' ') {
            output += ' ';
            if (frame >= end) complete++;
            continue;
          }

          if (frame >= end) {
            complete++;
            output += from;
          } else if (frame >= start) {
            if (!char || Math.random() < 0.3) {
              char = CHARS[Math.floor(Math.random() * CHARS.length)];
              queue[i].char = char;
            }
            // Use relative positioning to lock the layout width exactly to the final character
            output += `<span class="relative"><span class="opacity-0">${from}</span><span class="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 opacity-70">${char}</span></span>`;
          } else {
            // Render invisible final character to preserve exact layout width from frame 1
            output += `<span class="opacity-0">${from}</span>`;
          }
        }

        if (el) el.innerHTML = output;

        if (complete === queue.length) {
          cancelAnimationFrame(animationFrame);
        } else {
          frame++;
          animationFrame = requestAnimationFrame(update);
        }
      };

      animationFrame = requestAnimationFrame(update);
    };

    if (trigger !== null) {
      timeout = setTimeout(startAnimation, delay * 1000);
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            timeout = setTimeout(startAnimation, delay * 1000);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => {
        observer.disconnect();
        clearTimeout(timeout);
        cancelAnimationFrame(animationFrame);
      };
    }

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [text, delay, trigger]);

  return <span ref={elRef} className={className}>{text}</span>;
};

export default ScrambleText;
