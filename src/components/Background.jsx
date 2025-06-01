import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../main.css';

const words = [
  "Coder.",
  "Designer.",
  "Thinker.",
  "Web Developer.",
  "Leader.",
  "Python.",
  "Maori.",
  "Student.",
  "Footballer.",
  "Tinkerer.",
];
const DEFAULT_WORD = "Ezekiel";

const Background = ({ children }) => {
  const location = useLocation();
  const showText = location.pathname === '/';
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const timeoutsRef = useRef([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((tid) => clearTimeout(tid));
    timeoutsRef.current = [];
  };

  /* ====================================================
   * 1) TEXT-ANIMATION EFFECT
   * ==================================================== */
  useEffect(() => {
    if (!showText) {
      clearAllTimeouts();
      if (textRef.current) {
        textRef.current.innerHTML = '';
      }
      return;
    }

    const textEl = textRef.current;
    let currentWord = DEFAULT_WORD;
    let lastWord = null;

    const buildSpansForWord = (word) => {
      textEl.innerHTML = '';
      const fragment = document.createDocumentFragment();
      Array.from(word).forEach((ch) => {
        const span = document.createElement('span');
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        fragment.appendChild(span);
      });
      textEl.appendChild(fragment);
    };

    const fadeLetters = (direction, onComplete) => {
      const spans = Array.from(textEl.children);
      spans.forEach((span, i) => {
        span.classList.remove('fade-in', 'fade-out');
        const delayMs = i * 150;
        const tid = setTimeout(() => {
          if (!showText) return;
          span.classList.add(direction === 'in' ? 'fade-in' : 'fade-out');
        }, delayMs);
        timeoutsRef.current.push(tid);
      });
      const totalSeconds = (spans.length - 1) * 0.15 + 0.5;
      const endTid = setTimeout(() => {
        if (onComplete && showText) {
          onComplete();
        }
      }, totalSeconds * 1000);
      timeoutsRef.current.push(endTid);
    };

    const cycleText = () => {
      fadeLetters('out', () => {
        let pick;
        do {
          pick = words[Math.floor(Math.random() * words.length)];
        } while (pick === currentWord || pick === lastWord);
        lastWord = currentWord;
        currentWord = pick;

        buildSpansForWord(pick);
        fadeLetters('in', () => {
          const holdTid = setTimeout(() => {
            fadeLetters('out', () => {
              lastWord = currentWord;
              currentWord = DEFAULT_WORD;
              buildSpansForWord(DEFAULT_WORD);
              fadeLetters('in', () => {
                const nextTid = setTimeout(() => {
                  if (showText) {
                    cycleText();
                  }
                }, 4000);
                timeoutsRef.current.push(nextTid);
              });
            });
          }, 4000);
          timeoutsRef.current.push(holdTid);
        });
      });
    };

    buildSpansForWord(DEFAULT_WORD);
    fadeLetters('in', () => {
      const initHoldTid = setTimeout(() => {
        if (showText) {
          cycleText();
        }
      }, 4000);
      timeoutsRef.current.push(initHoldTid);
    });

    return () => {
      clearAllTimeouts();
      if (textEl) {
        textEl.innerHTML = '';
      }
    };
  }, [showText]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    let resizeDebounce = null;
    const onResize = () => {
      if (resizeDebounce) {
        clearTimeout(resizeDebounce);
      }
      resizeDebounce = setTimeout(() => {
        resizeCanvas();
        resizeDebounce = null;
      }, 150);
    };
    window.addEventListener('resize', onResize);

    let rafId = null;
    const drawNoiseFrame = () => {
      const w = canvas.width;
      const h = canvas.height;
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = data[i + 1] = data[i + 2] = v;
        data[i + 3] = 25;
      }
      ctx.putImageData(imageData, 0, 0);
      rafId = requestAnimationFrame(drawNoiseFrame);
    };
    rafId = requestAnimationFrame(drawNoiseFrame);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('resize', onResize);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div id="container" ref={containerRef}>
      {showText && <div id="textElement" className="text" ref={textRef} />}
      {children}
    </div>
  );
};

export default Background;
