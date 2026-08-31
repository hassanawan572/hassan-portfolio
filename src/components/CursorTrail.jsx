import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);

  useEffect(() => {
    // Respect users who've asked for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Skip on touch-only devices — there's no cursor to trail
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const MAX_POINTS = 24; // trail length
    const LINE_COLOR = "34, 211, 238"; // cyan, matches accent

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function handleMove(e) {
      pointsRef.current.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (pointsRef.current.length > MAX_POINTS) {
        pointsRef.current.shift();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const points = pointsRef.current;

      for (let i = 1; i < points.length; i++) {
        const p1 = points[i - 1];
        const p2 = points[i];
        const opacity = (i / points.length) * p2.life;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(${LINE_COLOR}, ${opacity})`;
        ctx.lineWidth = (i / points.length) * 3;
        ctx.lineCap = "round";
        ctx.shadowColor = `rgba(${LINE_COLOR}, ${opacity})`;
        ctx.shadowBlur = 12;
        ctx.stroke();
      }

      // fade points out over time so the trail shrinks when the mouse stops
      pointsRef.current = points
        .map((p) => ({ ...p, life: p.life - 0.02 }))
        .filter((p) => p.life > 0);

      animationFrame = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMove);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    />
  );
}
