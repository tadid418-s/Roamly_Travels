"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./custom-cursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const targets = document.querySelectorAll(".cursor-target");
    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  const isTouch = typeof window !== "undefined" && "ontouchstart" in window;
  if (isTouch) return null;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="custom-cursor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          style={{ left: position.x, top: position.y }}
        >
          <div className="arrow" aria-hidden>
            <svg
              className="arrow-svg"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17l9.2-9.2M17 17V7H7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


