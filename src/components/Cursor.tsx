"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rx = useRef(0);
  const ry = useRef(0);
  const mx = useRef(0);
  const my = useRef(0);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    }

    function animate() {
      rx.current += (mx.current - rx.current) * 0.15;
      ry.current += (my.current - ry.current) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx.current}px, ${ry.current}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMove);
    animate();

    function addHover(el: Element) {
      el.addEventListener("mouseenter", () => cursorRef.current?.classList.add("hover"));
      el.addEventListener("mouseleave", () => cursorRef.current?.classList.remove("hover"));
    }

    const targets = document.querySelectorAll(
      "a, button, [data-hover], .hero-name .letter, .project-visual"
    );
    targets.forEach(addHover);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
